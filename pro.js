/* ============================================================
   HR English Coach — Pro (유료화) 모듈
   - 케이스 잠금/해제 (라이선스 코드, localStorage)
   - 가격 안내 모달 + HR 실무자 인증 할인 안내
   - 케이스별 Startup Advisor's Note 렌더링
   주의: 정적 사이트 특성상 클라이언트 사이드 잠금입니다.
   결제 강제가 필요해지면 백엔드(서버리스) 검증으로 전환하세요.
   ============================================================ */
(function () {
  'use strict';

  // 유효한 라이선스 코드의 SHA-256 해시 목록 (코드 원본은 운영자만 보관)
  const PRO_HASHES = [
    '0300d539a37c3943caa3f4fb4a4c003b2b9c1671ec34a0aadef63d80f898bd11',
    'd9a167fc41a86b18db252d3760c64629cd545a2c8edf6a69e6237f7180aae547',
    '9ba8fce697727f42c7a98c9986798d40dfa0e6ec9f172d897ce39be629aa1b18',
    'cf69cc9d5fd93baee5007b66aeb8239ae820e71ba7dc07d028a0c2a8668ca4fe',
    '011ff55b485818cd58ff05c18c4fbf12780c31c7fe118f0074e511f3acd593d6',
    'b959b3acaabf61d147554b656195c89d172b8c0c4eb9e3170bf941a284a30a01',
    'a5a4fe8a6f5bd8aef38d1615ba949508008188ae09f5d20ec097abda04cfac02',
    '63eb5de19cfa23fe6068760468203442d330627a9bed7fb8bc352839787493fc',
    '2575f2d40b5b200e7ee563f10b8ea122beba1de2fe9c79633180879278cc0a1a',
    '98e0f2e465785a381c68cb0bc4bce282d13f4e1c5915a60f9a6b4431f796dbab',
    '3382396f2ec0739c044d212bf9c8c4aebaa2cce8c9204cec9e2261f8bd887258',
    '859227a8e88d8199d0ff85a67becc1a2b918cb14844ebb877c341c6fce0cab91',
    'b1246a999abc30dd103beaf58262f3a5458c346ca81948714bf0f984552c7914',
    '6c5b47bcf8907c8e2897eee63207b894dbb82b3a0033d9f8540e60317102d9ac',
    'b3557e227389e082080b5e850cd3853d998ff77a6be29d84288fb0f3e7867d24',
    '7f65e6fb084d0470ad460094b931dde2b581bd318128451465846c2e662ae8ea',
    '7fe2eb86c2ab1bbf92c59a9a13ad4e4d61e9167b03a8bf97181b971e3706b1ef',
    '70e41651228d3f52bb2ca5dbc70f37e00149df1d7b91f36b6ed0353d9ac5a09c',
    'a6a5e648cb07e666da74cce30bb734108d8c6ae59c6da42606481a7af06512b1',
    '28d02a61fe618045e6421db214a426caa9e48b6844b8ecf671709403e353d658'
  ];

  const LS_KEY = 'hrec_license_code';

  function isPro() {
    return !!localStorage.getItem(LS_KEY);
  }

  async function sha256hex(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  async function redeemCode(raw) {
    const code = (raw || '').trim().toUpperCase();
    if (!code) return { ok: false, msg: '코드를 입력하세요.' };
    const h = await sha256hex(code);
    if (PRO_HASHES.includes(h)) {
      localStorage.setItem(LS_KEY, code);
      return { ok: true, msg: '✅ Pro가 활성화되었습니다. 모든 케이스가 열렸습니다.' };
    }
    return { ok: false, msg: '유효하지 않은 코드입니다. 코드를 다시 확인해 주세요.' };
  }

  function esc(t) {
    const d = document.createElement('div');
    d.textContent = t;
    return d.innerHTML;
  }

  function currentCaseObj() {
    const sel = document.getElementById('case-select');
    const i = parseInt(sel && sel.value || '0', 10);
    return (typeof CASES !== 'undefined' && CASES[i]) || null;
  }

  /* ---------- 케이스 선택지에 잠금 표시 ---------- */
  function decorateSelect() {
    const sel = document.getElementById('case-select');
    if (!sel || typeof CASES === 'undefined') return;
    CASES.forEach((c, i) => {
      const opt = sel.options[i];
      if (!opt) return;
      const base = c.titleKo + ' — ' + c.title;
      opt.textContent = (c.pro && !isPro() ? '🔒 ' : '') + base;
    });
  }

  /* ---------- Advisor's Note 렌더링 ---------- */
  function renderAdvisor() {
    const card = document.getElementById('advisor-card');
    if (!card) return;
    const c = currentCaseObj();
    if (!c || !c.advisorNote) { card.classList.add('hidden'); return; }
    card.classList.remove('hidden');

    const locked = c.pro && !isPro();
    const n = c.advisorNote;
    let html = '<p class="advisor-target">🎯 대상: ' + esc(n.target) + '</p>';

    const points = locked ? n.points.slice(0, 1) : n.points;
    html += '<ul class="advisor-points">' + points.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>';

    if (locked) {
      html += '<div class="advisor-locked">🔒 나머지 조언 ' + (n.points.length - 1) +
        '개와 실행 체크리스트는 <b>Pro</b>에서 볼 수 있습니다. ' +
        '<button class="primary-btn small" id="advisor-upgrade-btn">Pro 안내 보기</button></div>';
    } else {
      html += '<h4 class="advisor-check-title">✅ 실행 체크리스트</h4>' +
        '<ul class="advisor-checklist">' + n.checklist.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>';
    }
    html += '<p class="hint advisor-disclaimer">이 조언은 일반적인 실무 관점의 참고 자료이며, 법률·노무 자문을 대체하지 않습니다. 실제 실행 전에는 노무사 검토를 권합니다.</p>';

    document.getElementById('advisor-content').innerHTML = html;
    const up = document.getElementById('advisor-upgrade-btn');
    if (up) up.addEventListener('click', openPricing);
  }

  /* ---------- 케이스 잠금 게이트 ---------- */
  function applyGate() {
    const c = currentCaseObj();
    const locked = !!(c && c.pro && !isPro());
    const practice = document.querySelector('.practice-card');
    const feedback = document.getElementById('feedback-card');
    const lockCard = document.getElementById('lock-card');
    if (!practice || !lockCard) return;

    if (locked) {
      practice.classList.add('hidden');
      if (feedback) feedback.classList.add('hidden');
      lockCard.classList.remove('hidden');
    } else {
      practice.classList.remove('hidden');
      lockCard.classList.add('hidden');
    }
  }

  /* ---------- 가격 모달 ---------- */
  function openPricing() {
    document.getElementById('pricing-modal').classList.remove('hidden');
    document.getElementById('popup-overlay').classList.remove('hidden');
  }
  function closePricing() {
    document.getElementById('pricing-modal').classList.add('hidden');
    document.getElementById('popup-overlay').classList.add('hidden');
  }

  function refreshProUI() {
    decorateSelect();
    renderAdvisor();
    applyGate();
    const btn = document.getElementById('pro-btn');
    if (btn) btn.textContent = isPro() ? '⭐ Pro 사용 중' : '⭐ Pro';
  }

  document.addEventListener('DOMContentLoaded', function () {
    // app.js 초기화 이후 실행 보장
    setTimeout(refreshProUI, 0);

    const sel = document.getElementById('case-select');
    if (sel) sel.addEventListener('change', function () { setTimeout(refreshProUI, 0); });

    const proBtn = document.getElementById('pro-btn');
    if (proBtn) proBtn.addEventListener('click', openPricing);
    const lockBtn = document.getElementById('lock-upgrade-btn');
    if (lockBtn) lockBtn.addEventListener('click', openPricing);
    const closeBtn = document.getElementById('close-pricing-btn');
    if (closeBtn) closeBtn.addEventListener('click', closePricing);

    const redeemBtn = document.getElementById('redeem-btn');
    if (redeemBtn) redeemBtn.addEventListener('click', async function () {
      const input = document.getElementById('license-input');
      const status = document.getElementById('redeem-status');
      const r = await redeemCode(input.value);
      status.textContent = r.msg;
      status.style.color = r.ok ? 'var(--success, #2e7d32)' : 'var(--danger, #c62828)';
      if (r.ok) {
        refreshProUI();
        setTimeout(closePricing, 1200);
      }
    });
  });
})();
