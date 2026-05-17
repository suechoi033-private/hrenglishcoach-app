# 새 케이스 추가 가이드

> 이 문서는 `cases.js`에 새 케이스를 추가하는 방법을 설명합니다. Claude에게 케이스 추가를 부탁할 때 이 문서를 참고하라고 알려주세요.

---

## 1. 빠른 시작

`cases.js` 파일을 열고, `CASES` 배열의 마지막 객체 뒤에 새 케이스 객체를 추가합니다.

```js
const CASES = [
  { /* 기존 케이스 1 */ },
  { /* 기존 케이스 2 */ },
  { /* ← 여기에 새 케이스 추가 */ }
];
```

---

## 2. 케이스 객체 스키마

```js
{
  id: 'snake-case-id-NN',         // 고유, 영문/숫자/하이픈만
  title: 'English Title',          // 표시용 영문
  titleKo: '한글 제목',            // 표시용 한글
  category: 'Category Name',       // 분류 (자유)
  estimatedMinutes: 20,            // 권장 학습 시간

  briefing: {
    beginner:    { en: '...', ko: '...' },
    intermediate:{ en: '...', ko: '...' },
    advanced:    { en: '...', ko: '...' }
  },

  caseStudy: {
    beginner:    { en: '...', ko: '...' },
    intermediate:{ en: '...', ko: '...' },
    advanced:    { en: '...', ko: '...' }
  },

  questions: {
    beginner: [
      {
        q: 'Question text in English.',
        modelAnswer: 'Model answer text...',
        tips: ['Tip 1', 'Tip 2', 'Tip 3']
      },
      // ... 3개 권장
    ],
    intermediate: [ /* 5개 권장 */ ],
    advanced:     [ /* 3개 권장 */ ]
  },

  glossary: {
    'term': '한글 정의',
    'multi word term': '한글 정의',
    // ... 보통 20~40개
  }
}
```

---

## 3. 작성 가이드라인

### 3.1 콘텐츠 원칙
- **실제 HR 시나리오 기반**, 하지만 가상의 회사/인물 (저작권 안전)
- **현실적 갈등 요소** 포함 (트레이드오프, 윤리적 딜레마, 시간 압박)
- **CEO/임원과의 대화** 형식 (질문이 CEO 발언인 것처럼)
- 한국 HR 담당자의 글로벌 업무 맥락에서 유용해야 함

### 3.2 난이도별 차이
| 난이도 | Briefing 길이 | 어휘 | 질문 깊이 | 모범답안 길이 |
|--------|--------------|------|----------|-------------|
| Beginner | 50~80 단어 | 일상 비즈니스 어휘 | 사실적/절차적 | 60~100 단어 |
| Intermediate | 100~150 단어 | 표준 HR 비즈니스 어휘 | 분석적/전략적 | 120~200 단어 |
| Advanced | 150~250 단어 | 전문 용어, 정교한 표현 | 추상적/철학적 | 200~350 단어 |

### 3.3 단어/표현 권장
- ✅ "I'd recommend", "Three priorities", "The trade-off is", "From a humanitarian standpoint"
- ✅ HR 전문 용어 명확히 사용 (RIF, NRR, attrition, succession, etc.)
- ❌ 너무 학술적인 표현 (전문 학자 아닌 임원과의 대화)
- ❌ 너무 캐주얼한 표현 (yeah, gonna, kinda)

### 3.4 한글 번역
- **영어 학습 몰입을 해치지 않도록 보조 역할만**
- 직역보다 자연스러운 한국어로
- 한국 HR 담당자가 이해하기 쉬운 용어 (예: "headcount" → "인원수, 인력 규모")

### 3.5 Glossary 작성
- 케이스에 등장하는 비즈니스/HR 전문 용어를 모두 포함
- 일반 영어 단어는 제외 (사전 API가 처리)
- 다중 단어 용어 우선 (예: "net revenue retention", "WARN Act")
- 한글 정의는 1줄 (필요 시 약어 풀이 포함)

---

## 4. 추가 후 체크리스트

새 케이스를 추가한 뒤 다음을 확인하세요:

- [ ] `id`가 기존 케이스와 중복되지 않음
- [ ] 3단계 난이도 모두 작성됨 (필요 시 일부 생략 가능, 단 questions는 최소 1개 필요)
- [ ] 영문/한글 모두 작성됨
- [ ] JSON 문법 오류 없음 (콤마 누락, 따옴표 짝, etc.)
- [ ] 로컬에서 동작 확인: `python3 -m http.server 8000` 후 브라우저
- [ ] 케이스 드롭다운에 새 케이스가 나타남
- [ ] 케이스 선택 시 Briefing/Case Study/Questions가 정상 표시됨
- [ ] 음성 듣기/말하기 정상 동작
- [ ] Glossary 단어 클릭 시 한글 정의 표시됨

---

## 5. Claude에게 케이스 작성 부탁하기

새 세션의 Claude에게 다음과 같이 요청하면 됩니다:

> "cases.js에 새 케이스 'M&A 후 통합'을 추가해줘. 다음을 참고:
>  - docs/ADDING-CASES.md (스키마와 작성 원칙)
>  - cases.js의 기존 'restructuring-01' 케이스 (스타일 참조)
> 가상의 회사 시나리오로, 3단계 난이도 모두 작성하고 글로서리 30개 정도. 작성 후 PR 만들어줘."

Claude가 위 가이드를 따라 자동으로 작성합니다.

---

## 6. 케이스가 많아지면 (10개 이상)

`cases.js`가 너무 길어지면 다음 구조로 리팩토링 고려:

```
cases/
├── index.js              # CASES 배열 = [ ...case1, ...case2, ... ]
├── 01-restructuring.js   # 개별 케이스
├── 02-merger.js
└── ...
```

`index.html`에서 `<script src="cases/index.js"></script>` 로 로드.

지금은 단일 파일이 더 단순하므로 10개 정도까진 유지.
