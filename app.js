const STORAGE_KEYS = {
  history: 'hrec_history_v1',
  settings: 'hrec_settings_v1'
};

const state = {
  caseIndex: 0,
  difficulty: 'intermediate',
  questionIndex: 0,
  voiceSpeed: 1.0,
  voiceURI: '',
  showKorean: false,
  lastVisitDate: '',
  history: []
};

const els = {};

function $(id) { return document.getElementById(id); }

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function loadSettings() {
  try {
    const s = JSON.parse(localStorage.getItem(STORAGE_KEYS.settings) || '{}');
    if (s.difficulty) state.difficulty = s.difficulty;
    if (typeof s.voiceSpeed === 'number') state.voiceSpeed = s.voiceSpeed;
    if (typeof s.voiceURI === 'string') state.voiceURI = s.voiceURI;
    if (typeof s.showKorean === 'boolean') state.showKorean = s.showKorean;
    if (typeof s.caseIndex === 'number') state.caseIndex = s.caseIndex;
    if (typeof s.questionIndex === 'number') state.questionIndex = s.questionIndex;
    if (typeof s.lastVisitDate === 'string') state.lastVisitDate = s.lastVisitDate;
  } catch {}
}

function saveSettings() {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify({
    difficulty: state.difficulty,
    voiceSpeed: state.voiceSpeed,
    voiceURI: state.voiceURI,
    showKorean: state.showKorean,
    caseIndex: state.caseIndex,
    questionIndex: state.questionIndex,
    lastVisitDate: state.lastVisitDate
  }));
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getTodaysCaseQuestion() {
  const d = new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((d - start) / (1000 * 60 * 60 * 24));
  const caseIdx = dayOfYear % CASES.length;
  const qs = CASES[caseIdx].questions[state.difficulty] || CASES[caseIdx].questions.intermediate || [];
  const qIdx = qs.length > 0 ? dayOfYear % qs.length : 0;
  return { caseIndex: caseIdx, questionIndex: qIdx };
}

function applyTodaysRecommendation(showBanner) {
  const t = getTodaysCaseQuestion();
  state.caseIndex = t.caseIndex;
  state.questionIndex = t.questionIndex;
  state.lastVisitDate = todayKey();
  saveSettings();
  if (showBanner && els.todayBanner) {
    els.todayBanner.classList.remove('hidden');
  }
}

function loadHistory() {
  try {
    state.history = JSON.parse(localStorage.getItem(STORAGE_KEYS.history) || '[]');
  } catch {
    state.history = [];
  }
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(state.history.slice(0, 100)));
}

function currentCase() {
  return CASES[state.caseIndex];
}

function currentQuestions() {
  return currentCase().questions[state.difficulty] || [];
}

function currentQuestion() {
  return currentQuestions()[state.questionIndex];
}

function renderCaseSelect() {
  els.caseSelect.innerHTML = '';
  CASES.forEach((c, i) => {
    const opt = document.createElement('option');
    opt.value = String(i);
    opt.textContent = c.titleKo + ' — ' + c.title;
    els.caseSelect.appendChild(opt);
  });
  els.caseSelect.value = String(state.caseIndex);
}

function renderBriefingAndCase() {
  const c = currentCase();
  const b = c.briefing[state.difficulty];
  const cs = c.caseStudy[state.difficulty];

  els.briefingEn.innerHTML = makeClickableText(b.en, c.glossary);
  els.caseEn.innerHTML = makeClickableText(cs.en, c.glossary);

  if (state.showKorean) {
    els.briefingKo.textContent = b.ko;
    els.caseKo.textContent = cs.ko;
    els.briefingKo.classList.remove('hidden');
    els.caseKo.classList.remove('hidden');
  } else {
    els.briefingKo.classList.add('hidden');
    els.caseKo.classList.add('hidden');
  }
}

function tokenizePlainText(text) {
  let html = '';
  const parts = text.split(/(\s+)/);
  parts.forEach((part) => {
    if (part === '') return;
    if (/^\s+$/.test(part)) {
      html += part;
      return;
    }
    const clean = part.replace(/[^A-Za-z'-]/g, '');
    if (clean) {
      html += '<span class="word" data-word="' + escapeHtml(clean) + '">' + escapeHtml(part) + '</span>';
    } else {
      html += escapeHtml(part);
    }
  });
  return html;
}

function makeClickableText(text, glossary) {
  const glossaryKeys = Object.keys(glossary || {}).sort((a, b) => b.length - a.length);

  const matches = [];
  glossaryKeys.forEach((term) => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp('\\b' + escaped + '\\b', 'gi');
    let m;
    while ((m = re.exec(text)) !== null) {
      matches.push({ start: m.index, end: m.index + m[0].length, term: term, match: m[0] });
    }
  });
  matches.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));

  const nonOverlap = [];
  let lastEnd = -1;
  matches.forEach((m) => {
    if (m.start >= lastEnd) {
      nonOverlap.push(m);
      lastEnd = m.end;
    }
  });

  let html = '';
  let cursor = 0;
  nonOverlap.forEach((m) => {
    if (cursor < m.start) {
      html += tokenizePlainText(text.slice(cursor, m.start));
    }
    const koDef = escapeHtml(glossary[m.term] || '');
    html += '<span class="word glossary-term" data-word="' + escapeHtml(m.match) +
      '" data-gloss="' + koDef + '" data-term="' + escapeHtml(m.term) + '">' +
      escapeHtml(m.match) + '</span>';
    cursor = m.end;
  });
  if (cursor < text.length) {
    html += tokenizePlainText(text.slice(cursor));
  }
  return html;
}

function renderQuestion() {
  const qs = currentQuestions();
  els.questionNumber.textContent = String(state.questionIndex + 1);
  els.questionTotal.textContent = String(qs.length);
  const q = currentQuestion();
  els.currentQuestion.textContent = q ? q.q : '(질문이 없습니다)';
  els.answerText.value = '';
  els.answerVoice.value = '';
  els.feedbackCard.classList.add('hidden');
}

function renderHistory() {
  const list = els.historyList;
  if (state.history.length === 0) {
    list.textContent = '아직 기록이 없습니다. 답변을 제출하면 여기에 쌓입니다.';
    return;
  }
  list.innerHTML = '';
  state.history.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'history-item';
    const date = new Date(item.timestamp).toLocaleString('ko-KR');
    div.innerHTML =
      '<div class="history-item-header">' +
        '<span>' + escapeHtml(item.caseTitle) + ' · ' + escapeHtml(item.difficulty) + '</span>' +
        '<span>' + date + '</span>' +
      '</div>' +
      '<div class="history-item-q">Q: ' + escapeHtml(item.question) + '</div>' +
      '<div class="history-item-a">A: ' + escapeHtml(item.myAnswer || '(빈 답변)') + '</div>';
    list.appendChild(div);
  });
}

function getEnglishVoices() {
  if (!('speechSynthesis' in window)) return [];
  const voices = window.speechSynthesis.getVoices() || [];
  const en = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
  const score = (v) => {
    const n = (v.name || '').toLowerCase();
    let s = 0;
    if (/natural|neural|premium|enhanced|wavenet|studio/.test(n)) s += 100;
    if (/google/.test(n)) s += 30;
    if (/microsoft/.test(n)) s += 20;
    if (/samantha|alex|karen|daniel|aria|jenny|guy|davis/.test(n)) s += 15;
    if (v.localService) s -= 5;
    if (v.lang === 'en-US') s += 10;
    if (v.lang === 'en-GB') s += 5;
    return s;
  };
  return en.sort((a, b) => score(b) - score(a));
}

function pickVoice() {
  const voices = getEnglishVoices();
  if (voices.length === 0) return null;
  if (state.voiceURI) {
    const match = voices.find((v) => v.voiceURI === state.voiceURI);
    if (match) return match;
  }
  return voices[0];
}

function populateVoiceSelect() {
  if (!els.voiceSelect) return;
  const voices = getEnglishVoices();
  if (voices.length === 0) return;
  els.voiceSelect.innerHTML = '';
  voices.forEach((v) => {
    const opt = document.createElement('option');
    opt.value = v.voiceURI;
    const isPremium = /natural|neural|premium|enhanced|wavenet|studio/i.test(v.name);
    const label = (isPremium ? '⭐ ' : '') + v.name + ' (' + v.lang + ')';
    opt.textContent = label;
    els.voiceSelect.appendChild(opt);
  });
  if (state.voiceURI && voices.some((v) => v.voiceURI === state.voiceURI)) {
    els.voiceSelect.value = state.voiceURI;
  } else {
    const chosen = pickVoice();
    if (chosen) els.voiceSelect.value = chosen.voiceURI;
  }
}

function speak(text) {
  if (!('speechSynthesis' in window)) {
    alert('이 브라우저는 음성 출력을 지원하지 않습니다.');
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = state.voiceSpeed;
  u.lang = 'en-US';
  const v = pickVoice();
  if (v) {
    u.voice = v;
    u.lang = v.lang;
  }
  window.speechSynthesis.speak(u);
}

function getPlainText(el) {
  return el.textContent || '';
}

let recognition = null;
let isRecording = false;

function initRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    els.recordBtn.disabled = true;
    els.recordBtn.textContent = '🎤 음성 인식 미지원';
    els.recordingStatus.textContent = '이 브라우저는 음성 인식을 지원하지 않습니다. Chrome/Edge를 사용하세요.';
    return;
  }
  recognition = new SR();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  let finalTranscript = '';

  recognition.onstart = () => {
    isRecording = true;
    finalTranscript = els.answerVoice.value ? els.answerVoice.value + ' ' : '';
    els.recordBtn.textContent = '⏹ 녹음 중지';
    els.recordBtn.classList.add('recording');
    els.recordingStatus.textContent = '🔴 듣고 있습니다... 말씀하세요';
  };

  recognition.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const transcript = e.results[i][0].transcript;
      if (e.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      } else {
        interim += transcript;
      }
    }
    els.answerVoice.value = (finalTranscript + interim).trim();
  };

  recognition.onerror = (e) => {
    els.recordingStatus.textContent = '오류: ' + e.error + '. 다시 시도하세요.';
    stopRecording();
  };

  recognition.onend = () => {
    if (isRecording) stopRecording();
  };
}

function startRecording() {
  if (!recognition) return;
  try {
    recognition.start();
  } catch (e) {
    els.recordingStatus.textContent = '녹음을 시작할 수 없습니다. 마이크 권한을 확인하세요.';
  }
}

function stopRecording() {
  isRecording = false;
  els.recordBtn.textContent = '🎤 녹음 시작';
  els.recordBtn.classList.remove('recording');
  els.recordingStatus.textContent = '녹음이 중지되었습니다. 다시 시작하거나 텍스트를 수정하세요.';
  try { recognition && recognition.stop(); } catch {}
}

function submitAnswer() {
  const activeTab = document.querySelector('.tab-btn.active').dataset.tab;
  const myAnswer = activeTab === 'voice' ? els.answerVoice.value.trim() : els.answerText.value.trim();
  const q = currentQuestion();
  if (!q) return;

  els.myAnswerDisplay.textContent = myAnswer || '(답변 없음)';
  els.modelAnswerDisplay.innerHTML = makeClickableText(q.modelAnswer, currentCase().glossary);
  els.tipsDisplay.innerHTML = '';
  (q.tips || []).forEach((t) => {
    const li = document.createElement('li');
    li.textContent = t;
    els.tipsDisplay.appendChild(li);
  });
  els.feedbackCard.classList.remove('hidden');
  els.feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'start' });

  state.history.unshift({
    timestamp: Date.now(),
    caseId: currentCase().id,
    caseTitle: currentCase().titleKo,
    difficulty: state.difficulty,
    question: q.q,
    myAnswer: myAnswer,
    modelAnswer: q.modelAnswer
  });
  saveHistory();
  renderHistory();
}

async function lookupWord(word, glossDef, term) {
  els.dictWord.textContent = word;
  els.dictContent.innerHTML = '<p>로딩 중...</p>';
  showPopup();

  let html = '';
  if (glossDef) {
    html += '<div class="glossary-def"><b>' + escapeHtml(term || word) + '</b> — ' +
      escapeHtml(glossDef) + ' <small>(케이스 용어집)</small></div>';
  }

  try {
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(word.toLowerCase()));
    if (!res.ok) throw new Error('not found');
    const data = await res.json();
    const entry = data[0];
    if (entry.phonetic) {
      html += '<div class="phonetic">' + escapeHtml(entry.phonetic) + '</div>';
    }
    (entry.meanings || []).slice(0, 3).forEach((m) => {
      html += '<div class="definition"><div class="pos">' + escapeHtml(m.partOfSpeech || '') + '</div>';
      (m.definitions || []).slice(0, 2).forEach((d) => {
        html += '<div class="meaning">• ' + escapeHtml(d.definition) + '</div>';
        if (d.example) html += '<div class="example">e.g. ' + escapeHtml(d.example) + '</div>';
      });
      html += '</div>';
    });
  } catch {
    if (!glossDef) {
      html += '<p style="color: var(--text-muted);">사전에서 정의를 찾지 못했습니다.</p>';
    }
  }

  els.dictContent.innerHTML = html || '<p>정의를 찾을 수 없습니다.</p>';
}

function showPopup() {
  els.dictionaryPopup.classList.remove('hidden');
  els.popupOverlay.classList.remove('hidden');
}

function hidePopup() {
  els.dictionaryPopup.classList.add('hidden');
  els.popupOverlay.classList.add('hidden');
  els.howtoModal.classList.add('hidden');
}

function attachListeners() {
  els.caseSelect.addEventListener('change', () => {
    state.caseIndex = parseInt(els.caseSelect.value, 10);
    state.questionIndex = 0;
    saveSettings();
    renderBriefingAndCase();
    renderQuestion();
  });

  els.difficultySelect.addEventListener('change', () => {
    state.difficulty = els.difficultySelect.value;
    state.questionIndex = 0;
    saveSettings();
    renderBriefingAndCase();
    renderQuestion();
  });

  els.langToggle.addEventListener('change', () => {
    state.showKorean = els.langToggle.value === 'both';
    saveSettings();
    renderBriefingAndCase();
  });

  els.speedSlider.addEventListener('input', () => {
    state.voiceSpeed = parseFloat(els.speedSlider.value);
    els.speedValue.textContent = state.voiceSpeed.toFixed(2);
    saveSettings();
  });

  els.voiceSelect.addEventListener('change', () => {
    state.voiceURI = els.voiceSelect.value;
    saveSettings();
    speak('Hello, this is a sample of the selected voice.');
  });

  document.querySelectorAll('.play-btn[data-target]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = $(btn.dataset.target);
      if (target) speak(getPlainText(target));
    });
  });

  els.playQuestionBtn.addEventListener('click', () => {
    const q = currentQuestion();
    if (q) speak(q.q);
  });

  els.playModelBtn.addEventListener('click', () => {
    speak(getPlainText(els.modelAnswerDisplay));
  });

  els.prevQuestionBtn.addEventListener('click', () => {
    if (state.questionIndex > 0) {
      state.questionIndex--;
      renderQuestion();
    }
  });

  els.nextQuestionBtn.addEventListener('click', () => {
    if (state.questionIndex < currentQuestions().length - 1) {
      state.questionIndex++;
      renderQuestion();
    }
  });

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.tab-content').forEach((c) => c.classList.add('hidden'));
      $('tab-' + btn.dataset.tab).classList.remove('hidden');
    });
  });

  els.recordBtn.addEventListener('click', () => {
    if (isRecording) stopRecording();
    else startRecording();
  });

  els.submitBtn.addEventListener('click', submitAnswer);

  els.clearHistoryBtn.addEventListener('click', () => {
    if (confirm('학습 기록을 모두 삭제하시겠습니까?')) {
      state.history = [];
      saveHistory();
      renderHistory();
    }
  });

  document.body.addEventListener('click', (e) => {
    const wordEl = e.target.closest('.word');
    if (wordEl) {
      const word = wordEl.dataset.word;
      const gloss = wordEl.dataset.gloss || '';
      const term = wordEl.dataset.term || '';
      if (word) lookupWord(word, gloss, term);
    }
  });

  els.closeDictBtn.addEventListener('click', hidePopup);
  els.closeHowtoBtn.addEventListener('click', hidePopup);
  els.popupOverlay.addEventListener('click', hidePopup);

  els.howToBtn.addEventListener('click', () => {
    els.howtoModal.classList.remove('hidden');
    els.popupOverlay.classList.remove('hidden');
  });

  els.todayBtn.addEventListener('click', () => {
    applyTodaysRecommendation(false);
    renderCaseSelect();
    renderBriefingAndCase();
    renderQuestion();
  });

  els.dismissBannerBtn.addEventListener('click', () => {
    els.todayBanner.classList.add('hidden');
  });
}

function init() {
  els.caseSelect = $('case-select');
  els.difficultySelect = $('difficulty-select');
  els.langToggle = $('lang-toggle');
  els.voiceSelect = $('voice-select');
  els.speedSlider = $('speed-slider');
  els.speedValue = $('speed-value');
  els.briefingEn = $('briefing-en');
  els.briefingKo = $('briefing-ko');
  els.caseEn = $('case-en');
  els.caseKo = $('case-ko');
  els.questionNumber = $('question-number');
  els.questionTotal = $('question-total');
  els.currentQuestion = $('current-question');
  els.playQuestionBtn = $('play-question-btn');
  els.prevQuestionBtn = $('prev-question-btn');
  els.nextQuestionBtn = $('next-question-btn');
  els.answerText = $('answer-text');
  els.answerVoice = $('answer-voice');
  els.recordBtn = $('record-btn');
  els.recordingStatus = $('recording-status');
  els.submitBtn = $('submit-btn');
  els.feedbackCard = $('feedback-card');
  els.myAnswerDisplay = $('my-answer-display');
  els.modelAnswerDisplay = $('model-answer-display');
  els.playModelBtn = $('play-model-btn');
  els.tipsDisplay = $('tips-display');
  els.historyList = $('history-list');
  els.clearHistoryBtn = $('clear-history-btn');
  els.dictionaryPopup = $('dictionary-popup');
  els.dictWord = $('dict-word');
  els.dictContent = $('dict-content');
  els.closeDictBtn = $('close-dict-btn');
  els.popupOverlay = $('popup-overlay');
  els.howToBtn = $('how-to-btn');
  els.howtoModal = $('howto-modal');
  els.closeHowtoBtn = $('close-howto-btn');
  els.todayBtn = $('today-btn');
  els.todayBanner = $('today-banner');
  els.dismissBannerBtn = $('dismiss-banner-btn');

  loadSettings();
  loadHistory();

  if (state.lastVisitDate !== todayKey()) {
    applyTodaysRecommendation(true);
  }

  els.difficultySelect.value = state.difficulty;
  els.langToggle.value = state.showKorean ? 'both' : 'en';
  els.speedSlider.value = state.voiceSpeed;
  els.speedValue.textContent = state.voiceSpeed.toFixed(2);

  renderCaseSelect();
  renderBriefingAndCase();
  renderQuestion();
  renderHistory();
  initRecognition();
  attachListeners();

  if ('speechSynthesis' in window) {
    populateVoiceSelect();
    window.speechSynthesis.onvoiceschanged = () => {
      populateVoiceSelect();
    };
    window.speechSynthesis.getVoices();
  }
}

document.addEventListener('DOMContentLoaded', init);
