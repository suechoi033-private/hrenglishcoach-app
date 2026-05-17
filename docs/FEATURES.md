# 기능 상세 명세서 (Feature Specification)
**HR English Coach** v1.0

> 이 문서는 현재 출시된 기능의 정확한 동작을 명세합니다. 새 기능 추가나 동작 변경 시 이 문서를 함께 업데이트하세요.

---

## 1. 케이스 스터디 시스템

### 1.1 데이터 구조
케이스는 `cases.js`의 `CASES` 배열에 저장됩니다. 각 케이스는 다음 구조를 따릅니다:

```js
{
  id: string,                  // 고유 식별자 (예: 'restructuring-01')
  title: string,               // 영문 제목
  titleKo: string,             // 한글 제목
  category: string,            // 카테고리 (예: 'Change Management')
  estimatedMinutes: number,    // 권장 학습 시간
  briefing: {
    beginner:    { en: string, ko: string },
    intermediate:{ en: string, ko: string },
    advanced:    { en: string, ko: string }
  },
  caseStudy: {                 // 배경 자료
    beginner:    { en: string, ko: string },
    intermediate:{ en: string, ko: string },
    advanced:    { en: string, ko: string }
  },
  questions: {
    beginner:    [{ q: string, modelAnswer: string, tips: string[] }, ...],
    intermediate:[...],
    advanced:    [...]
  },
  glossary: {                  // 용어 → 한글 정의 매핑
    "restructuring": "구조조정",
    ...
  }
}
```

### 1.2 케이스 선택 UI
- 화면 상단 컨트롤 바의 "케이스" 드롭다운에서 선택
- 케이스 변경 시 질문 인덱스는 0으로 리셋
- 변경된 케이스 ID는 localStorage에 저장

### 1.3 매일 추천 (Today's Pick)
- `getTodaysCaseQuestion()` 함수가 날짜 기반으로 추천:
  ```
  dayOfYear = (오늘 - 1월 0일) / 86400000
  caseIndex = dayOfYear % CASES.length
  questionIndex = dayOfYear % currentQuestions.length
  ```
- **자동 적용 조건**: `state.lastVisitDate !== todayKey()` (즉, 오늘 첫 방문)
- 자동 적용 시: 상단에 "📅 오늘의 추천 학습이 자동 선택되었습니다" 배너 표시 (확인 버튼으로 닫기)
- 수동 적용: 헤더의 "📅 오늘의 학습" 버튼

---

## 2. 난이도 시스템 (Difficulty)

### 2.1 3단계
| 난이도 | 영어 수준 | 콘텐츠 특성 |
|--------|----------|------------|
| Beginner | TOEIC 600~ | 짧은 문장, 기본 어휘, 3개 질문 |
| Intermediate | TOEIC 750+ | 표준 비즈니스 어휘, 5개 질문 |
| Advanced | TOEIC 900+ | 정교한 표현, 전문 용어, 3개 질문 |

### 2.2 동작
- 난이도 변경 → briefing/caseStudy/questions 모두 해당 난이도 콘텐츠로 교체
- 난이도 변경 시 questionIndex 0으로 리셋
- 선택값은 localStorage에 저장 (다음 방문 시 유지)

---

## 3. 음성 기능

### 3.1 음성 출력 (TTS)
- **구현**: 브라우저 내장 `window.speechSynthesis`
- **속도 조절**: 0.5x ~ 1.1x (슬라이더로 0.05 단위)
- **언어**: en-US 우선, 없으면 첫 영어 보이스
- **트리거**: Briefing/Case Study/Question/Model Answer 옆 🔊 버튼
- **동작**: 새 발화 시 진행 중인 발화 자동 취소 (`speechSynthesis.cancel()`)
- **호환성**: 모든 최신 브라우저 (Chrome, Edge, Safari, Firefox)

### 3.2 음성 입력 (STT)
- **구현**: 브라우저 내장 `webkitSpeechRecognition` / `SpeechRecognition`
- **언어**: en-US 고정
- **모드**: `continuous: true`, `interimResults: true`
- **트리거**: 답변 영역의 "🎤 녹음 시작" 버튼
- **결과 표시**: 텍스트 영역에 실시간 표시, 수동 수정 가능
- **호환성**: Chrome / Edge만 안정 / Safari 제한적 / Firefox 미지원
- **에러 처리**: 미지원 브라우저에서 버튼 비활성화 + 안내 메시지

### 3.3 보안 요구사항
- 음성 입력은 HTTPS 환경 필요 (localhost는 예외)
- 마이크 권한은 사용자가 명시적으로 승인해야 함

---

## 4. 단어/용어 검색 (Dictionary Lookup)

### 4.1 클릭 가능 텍스트
- Briefing, Case Study, Model Answer의 모든 단어가 `<span class="word">` 으로 감싸짐
- 케이스의 `glossary`에 등록된 용어는 `<span class="word glossary-term">` 으로 강조 (파란 배경)

### 4.2 검색 동작
1. 사용자가 단어 클릭
2. 우선 케이스 `glossary`에 해당 용어가 있으면 한글 정의를 팝업 상단에 표시
3. `https://api.dictionaryapi.dev/api/v2/entries/en/{word}` API 호출
4. 응답 받으면 발음 기호, 품사, 정의(최대 3품사 × 2정의), 예문 표시
5. 실패 시 글로서리만 표시 (없으면 "찾지 못했습니다")

### 4.3 외부 의존
- **API**: `dictionaryapi.dev` (무료, API 키 없음, CORS 허용)
- **제한**: 무료 API의 가용성에 의존. 다운 시 글로서리만 동작

---

## 5. 답변 제출 & 피드백

### 5.1 입력 모드
- **텍스트 탭**: textarea에 직접 입력
- **음성 탭**: STT로 받은 텍스트 (수동 수정 가능)
- 탭 전환 시 입력값은 각각 보존됨 (단, 질문 변경 시 모두 리셋)

### 5.2 제출
- "답변 제출 & 모범답안 보기" 버튼 클릭
- 활성 탭의 입력값 사용
- 피드백 카드가 표시됨 (스크롤 자동 이동)

### 5.3 피드백 표시
- **내 답변** (회색 박스) — 사용자가 입력한 텍스트
- **모범 답변** (초록 박스) — `question.modelAnswer`, 클릭 가능 텍스트, 🔊 듣기 버튼
- **답변 팁** (노란 박스) — `question.tips` 배열의 항목들

---

## 6. 학습 기록 (History)

### 6.1 저장
- 답변 제출 시 자동 저장
- 저장 위치: localStorage 키 `hrec_history_v1`
- 저장 항목:
  ```js
  {
    timestamp: number,       // Date.now()
    caseId: string,
    caseTitle: string,
    difficulty: string,
    question: string,
    myAnswer: string,
    modelAnswer: string
  }
  ```
- 최대 100건 (오래된 것부터 삭제)

### 6.2 표시
- "📚 학습 기록" 카드에 최신순 표시
- 각 항목: 케이스 · 난이도 · 날짜시간, 질문, 답변

### 6.3 삭제
- "전체 삭제" 버튼 → 확인 후 일괄 삭제
- 개별 삭제는 미구현 (Phase 2 고려)

---

## 7. 표시 언어 토글

### 7.1 옵션
- **영문만** (기본) — 영어 학습 몰입 우선
- **영문 + 한글** — Briefing/Case Study의 한글 번역 추가 표시

### 7.2 동작
- 컨트롤 바의 "번역 표시" 드롭다운으로 선택
- 변경 즉시 반영, localStorage에 저장

---

## 8. 설정 저장 (Settings Persistence)

### 8.1 localStorage 키
- `hrec_settings_v1`: 사용자 설정
  ```js
  {
    difficulty: 'beginner' | 'intermediate' | 'advanced',
    voiceSpeed: number,    // 0.5 ~ 1.1
    showKorean: boolean,
    caseIndex: number,
    questionIndex: number,
    lastVisitDate: 'YYYY-MM-DD'
  }
  ```
- `hrec_history_v1`: 학습 기록 (위 6.1 참고)

### 8.2 변경 추적
- 모든 설정 변경은 `saveSettings()` 호출로 즉시 저장
- 페이지 새로고침 후에도 동일한 상태 복원

---

## 9. 자동화 (Automation)

### 9.1 매일 학습 리마인더
- **파일**: `.github/workflows/daily-reminder.yml`
- **트리거**: cron — 매일 06:00 KST (= 21:00 UTC 전날)
- **동작**: 오늘의 추천 케이스 정보로 GitHub Issue 생성
- **알림 수신**: GitHub Notifications 설정에 따라 이메일/모바일 푸시
- **비활성화**: 워크플로우 파일을 삭제하거나 `on:` 섹션 주석 처리

### 9.2 새 케이스 자동 생성 (Phase 2, 셋업만 완료)
- **파일**: `.github/workflows/generate-case.yml`
- **트리거**: `workflow_dispatch` (수동) — Phase 2에서 cron으로 전환
- **요구사항**: `ANTHROPIC_API_KEY` 시크릿 등록 필요
- **동작**:
  1. Claude API 호출하여 케이스 JSON 생성
  2. `cases.js`에 추가
  3. 새 브랜치 푸시 + PR 생성
  4. 사용자가 PR 리뷰 후 머지
- **비용**: 케이스당 약 $0.05~0.10 (Sonnet 기준)

---

## 10. 키보드 단축키 (없음)
현재 키보드 단축키는 정의되지 않았습니다. 필요 시 Phase 2에 추가 (예: Space=듣기, Enter=제출).

---

## 11. 알려진 제약

- iOS Safari에서 음성 입력 불안정
- 음성 출력 보이스 품질은 OS/브라우저에 의존 (한국 사용자 환경에서 영어 보이스가 어색할 수 있음 → Phase 2에서 클라우드 TTS로 개선)
- 학습 기록은 브라우저에만 저장되므로 다른 기기/브라우저에서 보이지 않음 (Phase 3 클라우드 동기화 예정)
- 사전 lookup은 외부 API 의존 → 오프라인 동작 불가
