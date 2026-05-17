# HR English Coach

CHRO / HRBP를 위한 비즈니스 영어 시뮬레이션 웹앱. CEO와의 전략 대화를 케이스 기반으로 연습할 수 있습니다.

## 주요 기능 (Phase 1 — 무료, API 키 불필요)

- 📖 실제 HR 시나리오 케이스 스터디 (3단계 난이도)
- 🔊 음성 듣기 — 속도 0.5x ~ 1.1x 조절 (브라우저 내장 TTS)
- 🎤 음성으로 답변 (브라우저 내장 STT, Chrome/Edge 권장)
- 📝 텍스트로 답변
- 🔍 단어 클릭하면 사전 + 케이스 용어집 표시
- 📊 학습 기록 (브라우저 localStorage 자동 저장)
- 💬 모범 답변 비교 + 답변 팁

## 사용 방법

### 1. 로컬에서 빠르게 보기 (음성 입력 제외)

`index.html`을 브라우저에서 직접 엽니다. 음성 듣기와 텍스트는 동작하지만, **음성 입력은 HTTPS가 필요**해 작동하지 않습니다.

### 2. 로컬에서 모든 기능 사용하기

저장소 폴더에서 Python 간이 서버 실행:

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 열기. localhost는 HTTPS와 동일하게 취급되어 음성 입력도 됩니다.

### 3. GitHub Pages 배포 (무료, 공유 가능)

1. GitHub 저장소 → Settings → Pages
2. Source: `Deploy from a branch`
3. Branch 선택 → Folder: `/ (root)` 선택
4. 1~2분 후 `https://<username>.github.io/hrenglishcoach-app/` 에서 접속

## 파일 구조

```
hrenglishcoach-app/
├── index.html      # 메인 페이지
├── styles.css      # 스타일
├── app.js          # 앱 로직
├── cases.js        # 케이스 스터디 데이터 (여기에 케이스 추가)
└── README.md
```

## 케이스 추가하기

`cases.js`의 `CASES` 배열에 새 객체를 추가하면 됩니다. 각 케이스는 `briefing`, `caseStudy`, `questions`(beginner/intermediate/advanced 별), `glossary`를 가집니다.

## Phase 2 업그레이드 경로 (선택)

현재는 모범 답변과 비교하는 자가 학습 방식. 다음 기능을 원하면 키를 발급해서 추가할 수 있습니다:

| 기능 | 옵션 | 대략 비용 |
|------|------|----------|
| AI 실시간 피드백 (문법/표현 교정) | Anthropic Claude API / OpenAI API | 답변당 약 $0.01 |
| 자연스러운 고품질 음성 | OpenAI TTS / ElevenLabs | 분당 약 $0.015 |
| 정확도 높은 음성 인식 | OpenAI Whisper API | 분당 약 $0.006 |
| 클라우드 학습 기록 | Supabase 무료 티어 | 무료 |

업그레이드 시점에 안내해드릴 수 있습니다.

## 브라우저 호환성

| 기능 | Chrome | Edge | Safari | Firefox |
|------|--------|------|--------|---------|
| 음성 듣기 (TTS) | ✅ | ✅ | ✅ | ✅ |
| 음성 입력 (STT) | ✅ | ✅ | ⚠️ 제한 | ❌ |
| 사전 검색 | ✅ | ✅ | ✅ | ✅ |
| 학습 기록 | ✅ | ✅ | ✅ | ✅ |

음성 입력 사용에는 Chrome 또는 Edge를 권장합니다.

## 데이터 프라이버시

모든 학습 기록은 **브라우저 localStorage에만 저장**되며 외부 서버로 전송되지 않습니다. 단어 검색 시에만 무료 사전 API(api.dictionaryapi.dev)로 단어를 보냅니다.
