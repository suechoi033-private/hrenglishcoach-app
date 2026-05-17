# 로드맵 (Roadmap)

> 단기/중기/장기 계획. 우선순위와 의존성 표기.

---

## Phase 1: MVP 출시 ✅ (2026-05 완료)

- [x] 케이스 스터디 1개 (구조조정)
- [x] 3단계 난이도
- [x] TTS/STT (브라우저 내장)
- [x] 단어 검색 (무료 사전 API)
- [x] 학습 기록 (localStorage)
- [x] 오늘의 학습 자동 선택
- [x] GitHub Pages 배포 가능
- [x] 매일 학습 리마인더 (GitHub Actions Issue)

---

## Phase 2: 콘텐츠 확장 + AI 코칭 🎯 (목표: 다음 2~3개월)

### 2.1 콘텐츠 (우선 — 콘텐츠 없으면 의미 없음)
- [ ] 케이스 9개 추가 → 총 10개
  - [ ] M&A 후 통합 (Post-merger integration)
  - [ ] DEI 이니셔티브 발표 (Diversity & Inclusion announcement)
  - [ ] 임원 보상 협상 (Executive compensation negotiation)
  - [ ] 성과 부진자 관리 (Performance management)
  - [ ] 노조 협상 (Union negotiation)
  - [ ] 글로벌 확장 인사 전략 (Global expansion HR strategy)
  - [ ] AI 도입에 따른 인력 재배치 (AI-driven workforce redesign)
  - [ ] 이사회 보고 (Board reporting)
  - [ ] 위기 커뮤니케이션 (Crisis communication)

### 2.2 AI 피드백 (의존: 사용자가 ANTHROPIC_API_KEY 발급)
- [ ] 답변 제출 시 Claude API 호출하여 다음 항목 피드백:
  - 문법 오류 표시
  - 표현 업그레이드 제안 (격식 / 비격식, 정확한 비즈니스 어휘)
  - 답변 구조 코칭 (STAR 형식 등)
  - 1~10점 점수 + 이유
- [ ] "AI 코칭" 버튼 — 모범 답변 비교 외에 별도 제공
- [ ] 키 없는 사용자에게는 비활성화 + 안내

### 2.3 음성 품질 개선 (선택)
- [ ] OpenAI TTS 또는 ElevenLabs 옵션 (사용자가 키 추가 시)
- [ ] OpenAI Whisper 음성 인식 (브라우저 STT보다 정확)

### 2.4 자동 콘텐츠 생성 (의존: 2.2의 키 셋업)
- [ ] `.github/workflows/generate-case.yml` 활성화 (cron 매주 월요일)
- [ ] 자동 생성 케이스를 PR로 제출
- [ ] PR 리뷰 가이드 작성 (어떤 기준으로 머지/리젝)

---

## Phase 3: 사용자 경험 고도화 🚀 (Phase 2 검증 후)

### 3.1 클라우드 동기화
- [ ] Supabase (무료 티어) 백엔드 추가
- [ ] 학습 기록 다기기 동기화
- [ ] 이메일/소셜 로그인 (선택적)

### 3.2 진척률 대시보드
- [ ] 케이스별 학습 횟수 시각화
- [ ] 답변 길이/품질 추이 (Phase 2 AI 점수 활용)
- [ ] 주간/월간 학습 시간 통계

### 3.3 발음 평가
- [ ] Speechace 또는 Azure Cognitive Services
- [ ] 단어/문장 단위 발음 점수
- [ ] 약한 발음 패턴 추적

### 3.4 모바일 PWA
- [ ] Service Worker (오프라인 지원, 케이스 캐시)
- [ ] 홈 화면 설치 (Add to Home Screen)
- [ ] 푸시 알림 (네이티브 리마인더)

---

## Phase 4: 커뮤니티 & 확장 (장기, 시장 검증 후)

### 4.1 답변 공유 (옵션)
- [ ] 익명 답변 공유 (사용자 동의 시)
- [ ] 다른 사용자의 답변 보기 (피드백/영감)

### 4.2 다국어 학습자 지원
- [ ] 일본어 / 중국어 사용자 UI
- [ ] 모국어별 자주 하는 실수 가이드

### 4.3 사용자 케이스 기여
- [ ] 사용자가 자기 케이스 추가 (자기 회사 시나리오)
- [ ] 비공개/공개 옵션

### 4.4 수익화 (시장 검증 후만)
- [ ] Premium 티어 — 무제한 AI 피드백, 클라우드 동기화
- [ ] 기업 라이선스 — 회사 내부 케이스, SSO

---

## 의도적 비범위 (Won't Build)
- ❌ 게이미피케이션 (배지/포인트/리더보드) — 단순함 유지
- ❌ 비디오 콘텐츠 — 음성으로 충분, 제작 비용 큼
- ❌ 채팅/메신저 — 핵심 가치 흐림
- ❌ 광고 모델 — 학습 몰입 저해

---

## 변경 이력
| 날짜 | 변경 |
|------|------|
| 2026-05-17 | 초안 작성 (Phase 1 완료, Phase 2~4 계획) |
