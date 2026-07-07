/* ============================================================
   HR English Coach — Startup Advisor's Note 렌더러
   케이스별 실무 조언 + 실행 체크리스트를 표시합니다. (전체 무료)
   ============================================================ */
(function () {
  'use strict';

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

  function renderAdvisor() {
    const card = document.getElementById('advisor-card');
    if (!card) return;
    const c = currentCaseObj();
    if (!c || !c.advisorNote) { card.classList.add('hidden'); return; }
    card.classList.remove('hidden');

    const n = c.advisorNote;
    let html = '<p class="advisor-target">🎯 대상: ' + esc(n.target) + '</p>';
    html += '<ul class="advisor-points">' + n.points.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>';
    html += '<h4 class="advisor-check-title">✅ 실행 체크리스트</h4>' +
      '<ul class="advisor-checklist">' + n.checklist.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>';
    html += '<p class="hint advisor-disclaimer">이 조언은 일반적인 실무 관점의 참고 자료이며, 법률·노무 자문을 대체하지 않습니다. 실제 실행 전에는 노무사 검토를 권합니다.</p>';

    document.getElementById('advisor-content').innerHTML = html;
  }

  document.addEventListener('DOMContentLoaded', function () {
    // app.js 초기화 이후 실행 보장
    setTimeout(renderAdvisor, 0);
    const sel = document.getElementById('case-select');
    if (sel) sel.addEventListener('change', function () { setTimeout(renderAdvisor, 0); });
  });
})();
