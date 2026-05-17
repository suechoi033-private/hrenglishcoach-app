# Claude 작업 가이드

이 파일은 Claude Code 세션이 시작될 때 자동으로 로드됩니다. 새 세션에서 이 프로젝트의 컨텍스트를 빠르게 잡기 위한 짧은 안내문입니다.

## 프로젝트 한 줄 요약
HR 담당자(HRBP/CHRO)를 위한 비즈니스 영어 학습 웹앱. 케이스 기반으로 CEO와의 가상 대화를 음성/텍스트로 연습.

## 기술 스택
- **Vanilla HTML / CSS / JavaScript** (빌드 도구 없음, 프레임워크 없음)
- 브라우저 내장 Web Speech API (TTS/STT)
- 무료 Dictionary API (`api.dictionaryapi.dev`)
- localStorage 기반 학습 기록
- GitHub Pages 배포 (정적 호스팅)

## 파일 구조
```
hrenglishcoach-app/
├── index.html              # UI 마크업
├── styles.css              # 전체 스타일
├── app.js                  # 앱 로직 (state, 이벤트, 음성, 사전, 기록)
├── cases.js                # 케이스 스터디 데이터 (CASES 배열)
├── .nojekyll               # GitHub Pages용 (Jekyll 비활성화)
├── README.md               # 사용자/운영자용 문서
├── CLAUDE.md               # ← 지금 이 파일 (Claude 세션 컨텍스트)
├── docs/
│   ├── PRD.md              # 제품 기획서
│   ├── FEATURES.md         # 기능 상세 명세서
│   ├── ROADMAP.md          # 향후 로드맵 (Phase 2/3)
│   └── ADDING-CASES.md     # 새 케이스 추가 방법
└── .github/
    └── workflows/
        ├── daily-reminder.yml    # 매일 학습 리마인더 이슈 자동 생성
        └── generate-case.yml     # (수동 또는 주간) Claude API로 새 케이스 생성
```

## 작업 시 우선 참고할 문서
1. **기능을 추가/수정하려면** → `docs/FEATURES.md` (현재 기능의 정확한 동작 명세)
2. **새 케이스를 추가하려면** → `docs/ADDING-CASES.md` (cases.js 스키마와 작성 가이드)
3. **방향성 결정이 필요하면** → `docs/PRD.md`, `docs/ROADMAP.md`

## 코드 작성 원칙
- **빌드 도구 추가 금지**: 사용자가 빌드 환경 없이 GitHub Pages로 바로 배포할 수 있어야 함
- **외부 라이브러리 추가 신중**: 가능하면 vanilla JS로 해결. 꼭 필요하면 CDN으로 한 줄 추가하고 PR 설명에 이유 명시
- **API 키 필요한 기능 추가 시**: 기본은 비활성화(워크플로우 `workflow_dispatch` 또는 토글). 사용자가 시크릿 추가 후 활성화하는 방식
- **케이스 데이터 추가**: `cases.js`의 `CASES` 배열에 객체 추가. 스키마는 `docs/ADDING-CASES.md` 참고

## 자주 하는 작업 예시
| 요청 | 어디를 만지나 |
|------|--------------|
| 새 케이스 추가 | `cases.js` 끝에 객체 추가 |
| UI 디자인 변경 | `styles.css` |
| 새 인터랙션 (버튼, 모달 등) | `index.html` + `app.js` + `styles.css` |
| 음성 동작 변경 | `app.js`의 `speak()`, `initRecognition()` |
| 매일 자동 작업 추가 | `.github/workflows/` |

## 배포
- main 브랜치에 머지되면 GitHub Pages가 자동 반영 (Settings → Pages에서 활성화 필요)
- 라이브 URL: `https://suechoi033-private.github.io/hrenglishcoach-app/`

## 정리 원칙
- 임시 파일(예: `app.b64`, 테스트 산출물) 발견 시 즉시 삭제
- 사용하지 않는 코드/CSS 클래스 발견 시 삭제
- PR 머지 후 작업 브랜치는 GitHub에서 삭제
