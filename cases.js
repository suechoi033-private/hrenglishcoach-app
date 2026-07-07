const CASES = [
  {
    id: 'startup-first-rif-01',
    title: 'The First Layoff Conversation at a Startup',
    titleKo: '스타트업 첫 권고사직 면담',
    category: 'Startup HR Essentials',
    estimatedMinutes: 25,
    advisorNote: {
      target: "스타트업 대표 · 1인 HR (10~50인)",
      points: [
        "한국에서는 일방적 해고가 아니라 권고사직(상호 합의) 형태가 실무 표준입니다. 면담의 목적은 통보가 아니라 '합의에 이르는 대화'라는 점이 영어 표현 선택에도 반영되어야 합니다.",
        "첫 감원의 후폭풍은 떠나는 사람보다 남는 사람에게서 옵니다. 면담 당일 전체 커뮤니케이션까지 한 세트로 준비하세요.",
        "대표가 직접 면담하는 것이 원칙입니다. 30인 이하에서 이 대화를 위임하면 신뢰 비용이 더 큽니다.",
        "면담은 10분을 넘기지 마세요. 결정은 이미 내려졌음을 명확히 하되, 조건(위로금·전직 지원·추천서)은 준비된 것을 먼저 제시합니다.",
        "합의서·위로금 기준·마지막 근무일 처리는 반드시 노무사 검토를 거치세요. 이 앱의 조언은 커뮤니케이션 연습을 위한 것으로, 법률 자문을 대체하지 않습니다."
      ],
      checklist: [
        "노무사 검토 완료 (합의서 초안·위로금 기준)",
        "면담 스크립트 3단 구성: 결정 전달 → 조건 제시 → 다음 절차",
        "면담 직후 전체 공지문 준비",
        "퇴사자 인수인계·계정 처리 체크리스트",
        "잔류 팀 1:1 일정 (일주일 내)"
      ]
    },

    briefing: {
      beginner: {
        en: `You are the CEO of a small startup with 28 people. The company does not have enough money to keep everyone. You must let 4 people go. Today you practice the conversation with one of them, and how to tell the team.`,
        ko: `당신은 28명 규모 스타트업의 대표입니다. 회사 자금이 부족해 4명을 내보내야 합니다. 오늘은 그중 한 명과의 면담, 그리고 팀 전체에 알리는 방법을 연습합니다.`
      },
      intermediate: {
        en: `You are the founder-CEO of Daybreak Labs, a 28-person seed-stage startup with 8 months of runway. To extend runway to 14 months and reach the next milestone, you must reduce headcount by 4. One of them is Minho, a loyal operations coordinator who joined in the first year. You will practice the separation conversation with Minho, the same-day team announcement, and the message to your lead investor.`,
        ko: `당신은 28명 규모 시드 단계 스타트업 Daybreak Labs의 창업자 겸 대표입니다. 런웨이는 8개월 남았고, 다음 마일스톤까지 14개월로 늘리려면 4명을 감원해야 합니다. 그중 한 명은 창업 첫해에 합류한 성실한 오퍼레이션 담당자 민호입니다. 민호와의 면담, 당일 팀 공지, 리드 투자자에게 보내는 메시지를 연습합니다.`
      },
      advanced: {
        en: `You are the founder-CEO of Daybreak Labs (28 FTEs, seed stage, $2.1M raised, 8 months of runway, pre-product-market fit). The board has aligned on a plan to cut burn by 30%: a reduction of 4 roles concentrated in operations and marketing, paired with a pivot toward an AI-assisted workflow product. One affected employee, Minho, was employee #3 and is widely loved by the team. You must handle: the separation conversation under Korean mutual-agreement norms, same-day internal communication that preserves trust and momentum, and a proactive investor update that frames the action as disciplined, not distressed.`,
        ko: `당신은 Daybreak Labs(28명, 시드, 누적 투자 $2.1M, 런웨이 8개월, PMF 이전)의 창업자 겸 대표입니다. 이사회는 번레이트 30% 절감안에 합의했습니다: 오퍼레이션·마케팅 중심 4개 포지션 감축과 AI 워크플로우 제품으로의 피벗입니다. 대상자 중 민호는 3번째 입사자로 팀 전체가 아끼는 동료입니다. 한국의 권고사직(상호 합의) 관행에 맞는 면담, 신뢰와 추진력을 지키는 당일 사내 커뮤니케이션, '위기가 아닌 절제된 경영'으로 프레이밍하는 선제적 투자자 업데이트를 모두 다뤄야 합니다.`
      }
    },

    caseStudy: {
      beginner: {
        en: `Daybreak Labs has 28 employees. The company has money for only 8 more months.

The plan:
- 4 people must leave
- The company will give each person 2 months of pay
- The company will help them find new jobs

Today you meet Minho. He has worked here for 2 years. He works hard, but his role is no longer needed after the change.

You have 3 tasks:
1. Tell Minho the news in a kind and clear way
2. Tell the team on the same day
3. Answer hard questions`,
        ko: `Daybreak Labs에는 28명이 일합니다. 회사 자금은 8개월치만 남았습니다.

계획:
- 4명이 떠나야 합니다
- 각자에게 2개월치 급여를 지급합니다
- 새 일자리를 찾도록 돕습니다

오늘 민호를 만납니다. 그는 2년간 일했고 성실하지만, 조직 개편 후 그의 역할은 더 이상 필요하지 않습니다.

과제는 3가지입니다:
1. 민호에게 친절하고 명확하게 소식 전하기
2. 같은 날 팀에게 알리기
3. 어려운 질문에 답하기`
      },
      intermediate: {
        en: `Daybreak Labs raised a seed round 18 months ago. Growth has been slower than planned, and the board has approved a plan to extend runway from 8 to 14 months.

The numbers:
- Headcount: 28 → 24 (4 roles eliminated: 2 operations, 2 marketing)
- Each affected person is offered 2 months of severance-equivalent pay, extended insurance support, and job placement help
- Korean practice: this is structured as a mutual-agreement resignation, not a unilateral dismissal

Minho (2 years at the company, operations coordinator) is meeting you at 10:00. The team all-hands is at 14:00 the same day. Your lead investor expects an update this week.

Key risks:
- Minho is well-liked; a bad conversation will spread through the team within hours
- Two senior engineers are already nervous about the company's direction
- A vague team announcement will start rumors of more cuts`,
        ko: `Daybreak Labs는 18개월 전 시드 투자를 받았습니다. 성장은 계획보다 느렸고, 이사회는 런웨이를 8개월에서 14개월로 늘리는 안을 승인했습니다.

숫자:
- 인원: 28 → 24 (4개 역할 폐지: 오퍼레이션 2, 마케팅 2)
- 대상자에게 2개월치 위로금, 보험 지원 연장, 전직 지원 제공
- 한국 실무: 일방적 해고가 아닌 권고사직(상호 합의) 형태로 진행

민호(근속 2년, 오퍼레이션 담당)와 10시에 면담합니다. 같은 날 14시에 전체 미팅이 있습니다. 리드 투자자는 이번 주 업데이트를 기다립니다.

핵심 리스크:
- 민호는 팀의 신망이 두터움 — 면담이 잘못되면 몇 시간 안에 팀 전체에 퍼짐
- 시니어 엔지니어 2명이 이미 회사 방향에 불안해함
- 모호한 전체 공지는 추가 감원 소문을 낳음`
      },
      advanced: {
        en: `Daybreak Labs (seed, $2.1M raised, 8 months runway, pre-PMF) is executing a 30% burn reduction paired with a strategic pivot.

Structure of the action:
- 4 of 28 roles eliminated (2 ops, 2 marketing) — the functions being automated or deprioritized under the pivot
- Package: 2 months of pay, 3 months of insurance support, outplacement assistance, and an agreed reference letter
- Legal frame: mutual-agreement separation under Korean employment norms; all documents pre-reviewed by a labor attorney
- Selection rationale documented against role redundancy, not performance

Communication sequence (one day):
09:30 leadership sync → 10:00-12:00 individual conversations → 14:00 all-hands with written FAQ → 16:00 investor email

Complications you must navigate:
- Minho was employee #3; the emotional weight of the conversation is real for both sides
- One affected marketer may argue the selection was performance-based and unfair
- Your all-hands message must simultaneously convey "this was necessary and it is done" — no rolling layoffs — while being honest about the pivot's risks
- The investor update must show discipline without triggering doubts about the bridge round you may need in 12 months`,
        ko: `Daybreak Labs(시드, 누적 $2.1M, 런웨이 8개월, PMF 이전)는 전략 피벗과 함께 번레이트 30% 절감을 실행합니다.

실행 구조:
- 28개 중 4개 역할 폐지 (오퍼레이션 2, 마케팅 2) — 피벗으로 자동화되거나 우선순위가 낮아지는 기능
- 조건: 2개월치 위로금, 3개월 보험 지원, 전직 지원, 합의된 추천서
- 법적 프레임: 한국 고용 관행에 따른 권고사직(상호 합의), 모든 문서는 노무사 사전 검토 완료
- 선정 근거는 성과가 아닌 '역할 중복성' 기준으로 문서화

커뮤니케이션 순서 (하루 안에):
09:30 리더십 싱크 → 10:00-12:00 개별 면담 → 14:00 전체 미팅 + 서면 FAQ → 16:00 투자자 이메일

풀어야 할 난제:
- 민호는 3번째 입사자 — 양쪽 모두에게 감정적으로 무거운 대화
- 마케팅 대상자 한 명은 '성과 기반의 불공정한 선정'이라고 반박할 수 있음
- 전체 미팅 메시지는 '필요했고, 이것으로 끝'(추가 감원 없음)을 전하면서 피벗의 리스크에도 정직해야 함
- 투자자 업데이트는 절제된 경영을 보여주되, 12개월 후 필요할 수 있는 브리지 라운드에 대한 의심을 자극하지 않아야 함`
      }
    },

    questions: {
      beginner: [
        {
          q: "How do you start the conversation with Minho? Say the first three sentences.",
          modelAnswer: "Minho, thank you for coming. I have difficult news, and I want to be direct with you. The company is changing, and your role will not continue. This decision is final, and it is not about your work. You did good work here.",
          tips: [
            "Be direct in the first two sentences — do not make small talk",
            "Say clearly: the decision is final",
            "Separate the decision from his performance: it is not about your work"
          ]
        },
        {
          q: "Minho asks: \"Why me?\" What do you say?",
          modelAnswer: "That is a fair question. The company is changing direction, and we no longer need this role. It is about the role, not about you. Your work was always good. I will write a strong reference letter for you, and we will help you find your next job.",
          tips: [
            "Acknowledge the question: that is a fair question",
            "Explain: the role, not the person",
            "Offer concrete help: reference letter, job support"
          ]
        },
        {
          q: "What do you tell the whole team on the same day?",
          modelAnswer: "Today, four of our colleagues are leaving the company. This was my decision, and it was necessary to keep the company healthy. We gave them fair support. There are no more changes planned. Now our job is to focus on our goal, and to say a warm goodbye to our colleagues.",
          tips: [
            "Take responsibility: this was my decision",
            "Stop the fear: no more changes planned",
            "End with direction: focus on our goal"
          ]
        }
      ],
      intermediate: [
        {
          q: "Deliver the first 60 seconds of the conversation with Minho — the decision, the reason, and the fact that it is final.",
          modelAnswer: "Minho, thanks for making time. I need to share a difficult decision, and I owe it to you to be direct. As part of restructuring to extend our runway, we are eliminating the operations coordinator role, which means your employment with Daybreak will end. I want to be clear: this decision is final, and it is about the role, not your performance. You've been with us since the first year, and your work has been consistently reliable. Let me walk you through the support we've prepared, and then I'll answer any questions you have.",
          tips: [
            "Deliver the decision within the first three sentences — delay increases anxiety",
            "Name the business reason in one line (extend our runway), not a long justification",
            "Signal the structure of the meeting: decision → support → questions"
          ]
        },
        {
          q: "Minho says: \"I gave this company two years. I turned down another offer last spring to stay.\" Respond.",
          modelAnswer: "I know, and I don't take that lightly. You chose to stay when you had options, and that loyalty is part of what built this company. That's exactly why this conversation is so hard for me. The decision doesn't erase what you contributed — and it's my responsibility, not yours. What I can do now is make the landing as soft as possible: two months of pay, insurance support for three months, and I will personally reach out to my network for your next role. I'd also like to write your reference letter myself.",
          tips: [
            "Validate the sacrifice specifically — do not rush past it",
            "Own the decision: it is my responsibility, not yours",
            "Move to concrete support only after acknowledging the emotion"
          ]
        },
        {
          q: "At the 14:00 all-hands, one engineer asks: \"Is this the first round of many?\" Answer in a way that is honest but stops the rumor cycle.",
          modelAnswer: "It's the right question to ask, so let me be as clear as I can. This action extends our runway to 14 months, and the plan we committed to with the board is built on the team we have today. I am not planning further reductions. What I can't promise is that the market will cooperate — no honest CEO can. What I can promise is this: if our situation ever changes materially, you will hear it from me directly and early, not through rumors. Now our best protection is hitting the next milestone together.",
          tips: [
            "Give the concrete fact first: runway is now 14 months, plan is built on current team",
            "Distinguish what you can and cannot promise — false certainty destroys credibility later",
            "Commit to a communication contract: you will hear it from me first"
          ]
        },
        {
          q: "Write the short update paragraph to your lead investor about this action.",
          modelAnswer: "Hi Rachel — a quick update before our monthly call. We've completed a targeted reduction of 4 roles in ops and marketing, extending runway from 8 to 14 months at our current plan. The team was treated well — two months of pay, insurance continuation, and outplacement support — and the internal response has been steady. This gives us the room to reach the workflow-product milestone we discussed without raising under pressure. Happy to walk through the numbers on Thursday.",
          tips: [
            "Lead with the outcome: runway 8 → 14 months",
            "One line on treating people well — investors read it as execution quality",
            "Frame it as discipline creating optionality, not distress"
          ]
        }
      ],
      advanced: [
        {
          q: "Minho goes quiet for a long moment, then says: \"I was employee number three. I thought that meant something.\" Navigate this moment.",
          modelAnswer: "It does mean something — and I understand why this feels like a contradiction of that. You bet on this company before there was much to bet on, and pieces of how we operate today are things you built. I want to be honest rather than comforting: the pivot eliminates the role, and no version of the plan I could defend kept all four positions. But being employee number three is exactly why I'm handling this conversation myself, why the package goes beyond standard, and why my door — and my network — stay open to you well past your last day here. I don't expect that to feel sufficient today. I'd rather earn it over time than oversell it now.",
          tips: [
            "Do not argue with the feeling or rush to fix it — acknowledge the contradiction he is naming",
            "Honest framing beats comfort: no defensible plan kept all four roles",
            "Convert history into concrete commitments (package, network, ongoing door) rather than sentiment"
          ]
        },
        {
          q: "The affected marketer challenges the selection: \"Marketing missed targets as a team. Why am I on the list and not others? This looks like a performance call dressed up as restructuring.\" Respond with the documented rationale.",
          modelAnswer: "I hear the concern, and it deserves a straight answer. The selection was made on role redundancy under the new plan, and it was documented before any names were attached. Under the pivot, we're consolidating brand and lifecycle marketing into a single product-marketing function — the two roles being eliminated are the ones that don't exist in that structure. It was not a ranking of people, and your performance record stands on its own; I'm glad to reflect that in the reference and in how we describe the separation. If you'd like, we can go through the documented rationale together, and you're welcome to have it reviewed. What I won't do is pretend the structure decision was about individuals — because it wasn't.",
          tips: [
            "State the selection principle (role redundancy) and that it was documented before names",
            "Offer transparency: reviewing the rationale together signals confidence, not defensiveness",
            "Explicitly protect their professional record — it lowers the temperature and legal risk"
          ]
        },
        {
          q: "Draft your 14:00 all-hands opening — 90 seconds that must land 'necessary, done, and honest about risk' without corporate emptiness.",
          modelAnswer: "This morning I said goodbye to four colleagues, including someone who was here almost from day one. I want to tell you exactly what happened and why. Our runway was eight months, and our growth didn't earn the burn rate we were carrying. I made the decision to reduce four roles and refocus us on the workflow product — that takes us to fourteen months of runway and one clear shot at product-market fit. Each person leaving was treated with respect: real severance, insurance, and active help finding their next role. I want to say two things plainly. First: this action is complete — I am not running a rolling layoff. Second: the pivot is a bet, and I won't pretend otherwise. It's a bet I believe in enough to make it with my own name on it. From tomorrow, my calendar is open to every one of you — questions, doubts, ideas. Today, let's send four good people off the way they deserve.",
          tips: [
            "Name the emotional reality first (said goodbye), then the numbers — order matters",
            "Kill the rumor explicitly: this action is complete, no rolling layoffs",
            "Model honest risk-taking: call the pivot a bet you personally stand behind"
          ]
        },
        {
          q: "Your lead investor replies: \"Good discipline. One question — should we be thinking about a bridge now instead of in 12 months?\" This is both an opportunity and a trap. Respond.",
          modelAnswer: "It's the right question, and I've pressure-tested it with our board. My answer is: not yet, and here's the logic. Raising a bridge today prices the round on our weakest narrative — pre-pivot metrics and a fresh restructuring. The reduction buys us fourteen months, and the workflow product hits its first external milestone in five. If the early signal is strong, we raise in month six or seven on evidence, not on runway anxiety — better terms, better syndicate. If the signal is weak, we'll know early enough to have an honest conversation about options, and I'll bring that to you first. What I'd welcome now is intros to two or three funds who lead at that stage, so the relationships are warm before we need them.",
          tips: [
            "Answer the timing question with a thesis, not a deflection: raise on evidence, not anxiety",
            "Show you've defined the failure branch too — investors trust founders who plan both paths",
            "End with a concrete ask (warm intros) that converts the concern into help"
          ]
        }
      ]
    },

    glossary: {
      "runway": { en: "The number of months a company can operate before running out of money.", ko: "회사가 자금 소진 전까지 운영 가능한 개월 수 (런웨이)" },
      "burn rate": { en: "The rate at which a company spends its cash reserves.", ko: "현금 소진 속도 (번레이트)" },
      "severance": { en: "Money and benefits given to an employee who is leaving the company.", ko: "퇴직 위로금" },
      "mutual agreement": { en: "A decision both sides accept; in Korean practice, resignation by mutual consent.", ko: "상호 합의 (권고사직의 법적 성격)" },
      "outplacement": { en: "Support that helps departing employees find their next job.", ko: "전직 지원 서비스" },
      "role redundancy": { en: "When a role is no longer needed in the new structure.", ko: "역할 중복/폐지 (조직 개편으로 역할이 불필요해짐)" },
      "pivot": { en: "A significant change in a startup's product or business direction.", ko: "피벗 (사업 방향 전환)" },
      "all-hands": { en: "A meeting for every employee in the company.", ko: "전 직원 회의" },
      "rolling layoff": { en: "Repeated small rounds of job cuts over time, which damage trust.", ko: "순차적 감원 (신뢰를 크게 훼손하는 방식)" },
      "bridge round": { en: "A smaller interim investment round to extend runway until a bigger raise.", ko: "브리지 라운드 (다음 본 라운드까지 버티기 위한 중간 투자 유치)" },
      "reference letter": { en: "A written recommendation for a departing employee.", ko: "추천서" },
      "product-market fit": { en: "The point where a product satisfies strong market demand.", ko: "제품-시장 적합성 (PMF)" }
    }
  },

  {
    id: 'restructuring-01',
    advisorNote: {
      target: "스타트업 대표 · 초기 HR (30~150인)",
      points: [
        "한국에서 정리해고(경영상 이유에 의한 해고)는 요건이 매우 엄격합니다. 실무에서는 대부분 권고사직(합의 퇴직) 방식으로 진행되며, 이 케이스의 영어 표현들은 글로벌 팀·투자자 커뮤니케이션에 그대로 쓸 수 있습니다.",
        "위로금은 국내 스타트업 관행상 근속·상황에 따라 1~3개월치가 많습니다. 금액보다 '기준의 일관성'이 분쟁을 줄입니다.",
        "발표 순서가 실행의 절반입니다: 리더 그룹 → 대상자 개별 면담 → 전체 공지를 하루 안에 끝내야 소문으로 인한 신뢰 붕괴를 막습니다.",
        "남는 구성원 케어(서바이버 케어)를 계획에 반드시 포함하세요. 감축 후 3개월간 자발적 이탈이 가장 많이 발생합니다."
      ],
      checklist: [
        "노무사 사전 검토 (합의서·위로금 기준·절차)",
        "대상자 선정 기준 문서화",
        "면담 스크립트와 Q&A 준비, 면담자 리허설",
        "당일 타임라인 (리더 → 개별 면담 → 전체 공지)",
        "잔류 구성원 대상 후속 커뮤니케이션 플랜"
      ]
    },
    title: 'The Restructuring Conversation',
    titleKo: '구조조정 협의 회의',
    category: 'Change Management & Communication',
    estimatedMinutes: 20,

    briefing: {
      beginner: {
        en: `You are an HR Business Partner at a tech company. The company needs to cut some jobs. The CEO wants to talk with you about how to do it.`,
        ko: `당신은 기술 회사의 HR Business Partner(HRBP)입니다. 회사는 일부 직원을 감축해야 합니다. CEO가 이 일을 어떻게 진행할지 당신과 이야기하고 싶어합니다.`
      },
      intermediate: {
        en: `You are Jamie Park, HR Business Partner for Northstar Technologies, a 450-person SaaS company. After two slow quarters, the executive team has decided to restructure, eliminating 54 positions (12% of headcount). The heaviest impact will be on Marketing and Customer Success. CEO Sarah Chen has called a 30-minute meeting with you to align on execution.`,
        ko: `당신은 450명 규모 SaaS 회사 Northstar Technologies의 HRBP인 Jamie Park입니다. 두 분기 연속 성장 둔화 후, 경영진은 구조조정을 결정했고 54개 포지션(전체의 12%)을 감축합니다. 마케팅과 Customer Success 팀에 가장 큰 영향이 갑니다. CEO Sarah Chen이 실행 방향을 맞추기 위해 당신과 30분 회의를 잡았습니다.`
      },
      advanced: {
        en: `You are Jamie Park, HRBP at Northstar Technologies (450 FTEs, Series C SaaS, $52M ARR). The executive team has approved a 12% reduction-in-force concentrated in Marketing and Customer Success, with the dual objectives of reducing OpEx by 18% within one quarter and reallocating spend toward AI-driven product investments. You have been involved in scenario modeling but not in final selection. CEO Sarah Chen has scheduled a strategic alignment session to validate the execution approach across communications, severance design, retention of critical talent, legal exposure, and external positioning.`,
        ko: `당신은 Northstar Technologies(450 FTE, 시리즈 C SaaS, ARR $52M)의 HRBP인 Jamie Park입니다. 경영진은 마케팅 및 Customer Success에 집중된 12% 인력 감축(RIF)을 승인했으며, 1분기 내 OpEx 18% 절감 및 AI 기반 제품 투자로의 재배분이 두 가지 목표입니다. 당신은 시나리오 모델링에 참여했지만 최종 선정에는 관여하지 않았습니다. CEO Sarah Chen이 커뮤니케이션, 위로금 설계, 핵심 인재 유지, 법적 리스크, 외부 포지셔닝 전반의 실행 접근법을 검증하기 위해 전략 정렬 세션을 잡았습니다.`
      }
    },

    caseStudy: {
      beginner: {
        en: `Northstar Technologies has 450 employees. It is a software company.

The company has problems:
- Sales are slow
- Customers are not staying
- The company needs to save money

The leaders decided to cut 54 jobs. This is 12% of all employees. Most cuts will be in Marketing and Customer Success teams.

You will meet the CEO in one hour. You need to plan how to do this in a good way.`,
        ko: `Northstar Technologies는 직원 450명의 소프트웨어 회사입니다.

문제:
- 매출 둔화
- 고객 이탈
- 비용 절감 필요

경영진은 54개 일자리 감축을 결정했고, 이는 전체의 12%입니다. 대부분은 마케팅과 Customer Success 팀에서 발생합니다.

한 시간 후 CEO를 만납니다. 어떻게 잘 진행할지 계획해야 합니다.`
      },
      intermediate: {
        en: `Northstar Technologies, founded in 2017, has grown from 12 to 450 employees while building HR analytics software for enterprise customers. The past two quarters have brought new challenges:

- Two well-funded competitors launched similar products at lower price points
- Win rates dropped from 38% to 24% year-over-year
- Net revenue retention fell below 100% for the first time
- The Board approved a restructuring plan last week

The restructuring will affect 54 positions:
- Marketing: 15 positions (35% of department)
- Customer Success: 22 positions (28% of department)
- Engineering, Sales, G&A: 17 positions combined

The CEO's stated goals are: reduce OpEx by 18% within one quarter, preserve the engineering roadmap, and emerge as a leaner, faster company.

You have one hour before the meeting to prepare your recommendations.`,
        ko: `Northstar Technologies는 2017년 설립, 12명에서 450명으로 성장하며 엔터프라이즈 고객 대상 HR 분석 SaaS를 제공합니다.

지난 두 분기의 도전:
- 자금력 있는 경쟁사 두 곳이 더 낮은 가격에 유사 제품 출시
- 수주율이 전년 동기 대비 38% → 24%로 하락
- 순매출 유지율(NRR)이 처음으로 100% 미만
- 이사회는 지난주 구조조정 계획 승인

영향 받는 54개 포지션:
- 마케팅: 15개 (부서의 35%)
- Customer Success: 22개 (부서의 28%)
- 엔지니어링, 영업, G&A: 합계 17개

CEO 목표: 1분기 내 OpEx 18% 절감, 엔지니어링 로드맵 유지, 더 슬림한 회사로 거듭나기.

회의까지 한 시간 — 권고안을 준비해야 합니다.`
      },
      advanced: {
        en: `Northstar Technologies (Delaware C-corp, founded 2017) operates an enterprise HR analytics SaaS platform with $52M ARR, 800+ enterprise customers, and 450 full-time employees distributed across San Francisco, New York, Austin, and remote.

The macro environment has shifted materially. Two well-capitalized entrants — backed by tier-1 venture capital — have introduced functionally comparable products at 30–40% lower price points, leveraging modern AI architectures to reduce their cost of goods sold. Sales win rates have compressed from 38% to 24% YoY, sales cycle length has extended by 22%, and net revenue retention has dropped to 96% — the first sub-100 reading in company history.

The approved restructuring calls for a 12% reduction-in-force (54 FTEs), with disproportionate impact on Marketing (-35%) and Customer Success (-28%), reflecting both cost concentration in these functions and a strategic pivot toward product-led growth. Engineering will see modest reductions (4 positions) while preserving the AI/ML roadmap, identified by the Board as the primary path to recapturing competitive differentiation.

Secondary objectives: maintaining engagement of high-potential retained employees, avoiding adverse-impact disparities across protected categories, minimizing employer-brand erosion on platforms such as Glassdoor and LinkedIn, and managing optics with key customers and investors during the sensitive 8-week window.`,
        ko: `(고급 — 영문 위주로 학습하세요)

Northstar Technologies는 ARR $52M, 엔터프라이즈 고객 800곳, FTE 450명. 자금력 있는 경쟁사가 30~40% 낮은 가격대로 유사 제품을 출시했고 NRR이 사상 처음 100% 미만(96%)으로 하락. 12% RIF가 마케팅(-35%), Customer Success(-28%)에 비대칭 집중되며 엔지니어링은 4명 감축에 그쳐 AI/ML 로드맵을 보존. 부차 목표: 잔류 핵심인재 몰입, adverse-impact 방지, Glassdoor/LinkedIn 고용 브랜드 보호, 8주 민감 기간 동안 고객·투자자 관리.`
      }
    },

    questions: {
      beginner: [
        {
          q: "When should we tell the employees about the changes?",
          modelAnswer: "I think we should tell the managers first. They need time to prepare. Then we can have a meeting with all employees the next day. After that, we should meet with the people who are losing their jobs. We need to be clear and kind.",
          tips: [
            "Use simple sequence words: first, then, after that",
            "Show empathy: be clear and kind",
            "Think about different groups: managers, all employees, affected employees"
          ]
        },
        {
          q: "How much money should we give people who lose their jobs?",
          modelAnswer: "I recommend two weeks of pay for every year they worked here. For people who worked less than two years, we should give at least four weeks of pay. We should also pay for their health insurance for 60 days. This is fair and helps them find a new job.",
          tips: [
            "Use specific numbers (two weeks, 60 days)",
            "Mention health insurance — an important benefit",
            "Show your reasoning: this is fair and helps them"
          ]
        },
        {
          q: "What about the employees who stay? How do we help them feel okay?",
          modelAnswer: "The remaining employees will worry too. We should be honest with them about the future of the company. I suggest a team meeting one week after the announcement to share the plan. We can also give small bonuses to top performers to show we value them. And we should listen to their feedback every month for three months.",
          tips: [
            "Address the emotional aspect (they will worry)",
            "Suggest concrete actions (meeting, bonuses, listening)",
            "Mention a clear timeline (one week, three months)"
          ]
        }
      ],
      intermediate: [
        {
          q: "I want to announce this on Tuesday morning. Walk me through how you'd structure the communication cascade.",
          modelAnswer: "I'd recommend a three-layer cascade starting Monday evening. First, we brief the executive team and people managers Monday at 5pm with a comprehensive playbook — they need clarity on talking points and how to support their teams. Tuesday morning at 8am, we hold a brief all-hands where you announce the restructuring with empathy and transparency. Immediately after, affected employees meet with their managers and HR for one-on-one conversations using a prepared script. Unaffected employees get a follow-up message by noon confirming their status and outlining what's next. The sequencing matters — we want to avoid the rumor mill, but we also need to ensure managers are prepared before they're asked to deliver hard news.",
          tips: [
            "Show structured thinking with specific times",
            "Address all stakeholders: managers, affected, unaffected",
            "Use phrases: 'I'd recommend', 'the sequencing matters', 'cascade'",
            "Mention manager preparation — they're the front line"
          ]
        },
        {
          q: "What's a fair severance package? I want to be generous but not reckless with cash.",
          modelAnswer: "For a workforce of this size, I'd suggest a tiered approach. Standard severance of two weeks per year of service, with a minimum of four weeks for anyone under two years. Add 60 days of continued health coverage through COBRA at company cost. Include accrued PTO payout and a prorated bonus if we're past midyear. For senior individual contributors and managers, consider an additional four weeks as recognition of their tenure and to reduce the likelihood of disputes. The total cash impact for 54 employees would be roughly $1.8 million, which is meaningful but compares favorably to industry norms and protects our employer brand for future hiring.",
          tips: [
            "Be specific with numbers (two weeks, 60 days, $1.8M)",
            "Show tiered thinking — not one-size-fits-all",
            "Mention employer brand — long-term consequence",
            "Key phrases: 'tiered approach', 'industry norms', 'employer brand'"
          ]
        },
        {
          q: "I'm worried about the team after this. How do we keep the remaining employees engaged?",
          modelAnswer: "Survivor syndrome is real, and we need to address it intentionally. Three priorities. First, transparency: a week after the announcement, you should host an all-hands focused on the path forward — what changes, what stays the same, and the leadership team's commitment. Second, immediate recognition: people will be doing more with less, so we should accelerate any pending promotions, refresh equity grants for high performers, and authorize managers to give spot bonuses. Third, listening: I'd suggest pulse surveys at 30, 60, and 90 days post-announcement, with skip-level meetings for any teams that show distress. The first 90 days will determine whether we lose another wave to voluntary attrition.",
          tips: [
            "Use the term 'survivor syndrome' — shows HR expertise",
            "Structure with numbered priorities (first, second, third)",
            "Quantify the risk (90 days, voluntary attrition)",
            "Suggest both leadership actions (all-hands) and tactics (pulse surveys)"
          ]
        },
        {
          q: "What legal risks should I worry about?",
          modelAnswer: "Three main areas. First, adverse impact analysis: before we finalize the list, we need to run statistical analysis on the selection criteria across protected categories — age, race, gender, disability, and any other applicable factors. If we see disparities, we need to be able to defend our criteria as job-related and business-necessary. Second, WARN Act compliance: while we're below the federal threshold of 50 employees at a single site, we have to check state-level mini-WARN requirements, especially in California and New York. Third, severance agreements: every affected employee should sign a release in exchange for their package, but we need to give the legally required consideration period — 21 days for employees over 40, with a 7-day revocation window. I'll work with employment counsel this week to finalize the documents.",
          tips: [
            "Mention specific legal frameworks (WARN, adverse impact)",
            "Show methodical thinking — three main areas",
            "Demonstrate awareness of state-level nuances",
            "End with a concrete next step (work with counsel)"
          ]
        },
        {
          q: "Should we hire an outplacement firm? Is it worth the cost?",
          modelAnswer: "Yes, I'd recommend it for two reasons. From a humanitarian standpoint, providing professional career transition support — resume coaching, interview prep, job search platforms, and access to a counselor — meaningfully shortens the time to next employment for affected employees, often by 30 to 50%. From a business standpoint, it reduces legal risk because employees who feel supported are significantly less likely to file claims or post negative reviews. Cost is typically $1,500 to $3,000 per employee for a three-to-six month engagement, so for 54 people we'd be looking at $80,000 to $160,000. Compared to potential litigation or Glassdoor damage, it's a strong ROI. I've worked with reputable outplacement firms before and can get quotes from two or three this week.",
          tips: [
            "Present both human and business cases",
            "Quantify both the cost AND the benefit",
            "Use ROI framing — speaks CEO language",
            "End with a concrete next step"
          ]
        }
      ],
      advanced: [
        {
          q: "Walk me through the communication architecture for Tuesday. I want to understand the rationale at each touchpoint.",
          modelAnswer: "The architecture is sequenced for three objectives: information control, manager readiness, and dignified delivery. Monday at 5pm, we convene the executive team and all people managers — roughly 65 people — for a 90-minute briefing. The deck has three components: the strategic rationale we want them to internalize, the operational playbook for the next 48 hours, and FAQs covering the seventy or so questions we anticipate. We require all attendees to sign a confidentiality acknowledgment. Tuesday at 8am Pacific, you address the full company in a 15-minute all-hands. Open with the strategic context, name the impact directly — no euphemisms — and describe the manager-led conversations that will follow. Avoid live questions; instead, commit to a follow-up Q&A by Friday once people have processed. From 8:15 to 11am, managers conduct individual conversations with affected employees using a tightly scripted but humane template, with HR partners on standby. By noon, every unaffected employee receives a personalized email from their manager confirming their status. By 5pm, we publish an external statement and brief our top twenty customers and key investors. The critical risk is information leakage between Monday's manager briefing and Tuesday's announcement. We mitigate through staggered notifications, clear consequences for breach, and a dedicated leak-response protocol.",
          tips: [
            "Show architectural thinking with named objectives",
            "Quantify everything (65 managers, 70 FAQs, 15 minutes)",
            "Address risks proactively (leakage, dignified delivery)",
            "Use precise verbs: 'convene', 'commit to', 'mitigate'",
            "Demonstrate stakeholder mapping (employees, customers, investors)"
          ]
        },
        {
          q: "How do we design the severance to be defensible, generous within reason, and aligned with the message we want to send to retained talent?",
          modelAnswer: "I'd anchor the design on four principles: legal defensibility, market competitiveness, signal value to retained employees, and predictable cost. The core formula would be two weeks per year of service with a four-week floor and a sixteen-week cap, indexed to base salary. Layer in a tenure premium for employees with five-plus years — an additional two weeks per year beyond five — to honor institutional contribution and reduce age-discrimination optics. Continue medical benefits through COBRA at company cost for ninety days. Accelerate vesting on equity grants scheduled to vest within the next 180 days, with appropriate tax counsel involvement. For leadership-level departures, we should consider a separate executive severance framework with mutual non-disparagement clauses negotiated by counsel. Projected aggregate cost is approximately $1.9 to $2.1 million plus benefits continuation. Compared to a market benchmark of $35,000 per affected employee, we're at the seventy-fifth percentile, which I believe is the right positioning. The signal to retained talent is equally important. When people see their departing colleagues treated with genuine generosity, it materially reinforces psychological safety and reduces voluntary attrition risk over the following two quarters.",
          tips: [
            "Lead with named principles before tactics",
            "Use precise financial terms (cap, floor, indexed, percentile)",
            "Address legal nuance (age discrimination, executive separation)",
            "Connect to second-order effects (signal to retained talent)",
            "Quantify confidently ($1.9-2.1M, 75th percentile)"
          ]
        },
        {
          q: "What's your point of view on the long-term cultural ramifications, particularly regarding our employer brand and our ability to attract A-players post-restructuring?",
          modelAnswer: "My honest assessment is that the cultural impact will be more determinative than the financial one, and we have a narrow window to shape the narrative. In the short term, expect Glassdoor reviews to take a hit regardless of how well we execute. The half-life of negative reviews is roughly eighteen to twenty-four months. We can mitigate by ensuring departing employees have a dignified experience — generous severance, outplacement, personal outreach from leadership — but we should not attempt to suppress legitimate criticism, which always backfires. In the medium term, the employer brand recovers in proportion to two signals: how we treat the people who stay, and what we ship next. If retained employees experience accelerated promotion paths, meaningful equity refreshes, and visible investment in the AI roadmap they're being asked to deliver, they become organic advocates. For A-player recruitment specifically, the most powerful counter-signal is product velocity. Top engineers and product leaders watch what we ship, not what we say. A high-impact product release within ninety days post-restructuring would do more for recruitment than any messaging investment. My recommendation is that we treat the restructuring not as an event to be communicated, but as the opening act of a coherent eighteen-month narrative: lean, focused, AI-native, customer-obsessed.",
          tips: [
            "Open with a strong, honest POV — don't hedge",
            "Distinguish short-term, medium-term, long-term horizons",
            "Use precise concepts: 'half-life of negative reviews', 'organic advocates'",
            "Connect HR strategy to product strategy",
            "Conclude with a reframing that elevates the conversation"
          ]
        }
      ]
    },

    glossary: {
      "restructuring": "구조조정",
      "RIF": "Reduction in Force, 인력 감축",
      "headcount": "인원수, 인력 규모",
      "severance": "퇴직금, 위로금",
      "outplacement": "전직 지원 서비스",
      "morale": "사기, 직원 의욕",
      "cascade": "(정보 전달의) 단계적 흐름",
      "all-hands": "전사 미팅",
      "WARN Act": "(미국) 근로자 사전 통지법",
      "adverse impact": "차별적 영향 (특정 보호 집단에 불리하게 작용)",
      "COBRA": "퇴직 후 건강보험 연장 제도 (미국)",
      "PTO": "Paid Time Off, 유급휴가",
      "survivor syndrome": "구조조정 후 잔류 직원이 겪는 심리적 동요",
      "pulse survey": "주기적 단기 직원 설문",
      "skip-level meeting": "한 단계 건너뛴 상위 리더와의 미팅",
      "attrition": "(자연) 감소, 이직",
      "net revenue retention": "순매출 유지율 (NRR)",
      "win rate": "수주율",
      "OpEx": "운영비용 (Operating Expenses)",
      "ARR": "연간 반복 매출 (Annual Recurring Revenue)",
      "FTE": "전일 근무 직원 환산 (Full-Time Equivalent)",
      "tier-1 venture capital": "최상위 벤처캐피털",
      "employer brand": "고용 브랜드 (지원자가 보는 회사 이미지)",
      "Glassdoor": "기업 리뷰 플랫폼",
      "playbook": "실행 매뉴얼",
      "cap": "(보상의) 상한",
      "floor": "(보상의) 하한",
      "non-disparagement clause": "비방 금지 조항",
      "vesting": "(스톡옵션 등의) 권리 확정",
      "equity grant": "지분 부여 (스톡옵션/RSU)",
      "stakeholder": "이해관계자",
      "consideration period": "(법적) 숙고 기간",
      "revocation window": "철회 가능 기간"
    }
  },
  {
    id: 'performance-management-01',
    advisorNote: {
      target: "스타트업 대표 · HR 리드 (20~100인)",
      points: [
        "30인 미만이라면 무거운 평가 제도보다 분기 단위 체크인(1:1) + 심플한 목표 정렬이 효과적입니다. 제도는 조직이 커진 다음에 정교화해도 늦지 않습니다.",
        "OKR을 도입한다면 첫 2~3분기는 '보상과 완전 분리'해서 학습 기간으로 운영하세요. 도입 즉시 보상과 연결하면 목표 하향 설정이 시작됩니다.",
        "성과 기준을 만들 때 대표의 언어를 그대로 문서화하는 것이 가장 빠릅니다. '우리 회사에서 잘한다는 것'의 예시 3개를 대표가 직접 쓰게 하세요."
      ],
      checklist: [
        "분기 1:1 체크인 운영 여부 결정",
        "OKR-보상 분리 원칙 합의",
        "성과 기준 예시 3개 문서화",
        "평가 도입 시점 로드맵 (인원 규모 기준)"
      ]
    },
    title: 'Building a Continuous Performance Management System',
    titleKo: '성과관리 체계 구축',
    category: 'Performance Management',
    estimatedMinutes: 20,

    briefing: {
      beginner: {
        en: `You are an HR Business Partner at a software company with 300 people. Workers do not like the yearly review. The CEO wants a new system with regular feedback and clear goals.`,
        ko: `당신은 300명 규모 소프트웨어 회사의 HRBP입니다. 직원들은 연 1회 평가를 싫어합니다. CEO는 정기적인 피드백과 명확한 목표가 있는 새 체계를 원합니다.`
      },
      intermediate: {
        en: `You are Alex Han, HRBP at TechBridge Solutions, a 300-person SaaS company. Annual performance reviews are universally disliked: managers procrastinate, ratings are inflated, and difficult conversations get postponed indefinitely. CEO Maya Lin wants to redesign the system around continuous performance management — OKRs, regular 1:1s, and meaningful differentiation. She's asked you for a 30-minute working session to align on the design.`,
        ko: `당신은 300명 규모 SaaS 회사 TechBridge Solutions의 HRBP인 Alex Han입니다. 연간 성과 리뷰는 모두에게 비호감입니다: 매니저는 미루고, 평가는 인플레이션되며, 어려운 대화는 무기한 연기됩니다. CEO Maya Lin은 OKR, 정기 1:1, 의미 있는 차별화를 중심으로 한 지속적 성과관리 체계로의 재설계를 원합니다. 설계 정렬을 위한 30분 워킹 세션을 요청했습니다.`
      },
      advanced: {
        en: `You are Alex Han, HRBP at TechBridge Solutions (300 FTEs, Series C SaaS, ~$60M ARR). The legacy annual review process is creating measurable damage: only 34% of employees view reviews as useful, manager completion runs at 71% even after three deadline extensions, and last cycle's distribution showed 78% of employees rated "Exceeds Expectations" or higher — clear inflation. Voluntary attrition among high performers ticked up to 14% TTM, with exit interviews citing "lack of meaningful feedback" and "no real differentiation." CEO Maya Lin has commissioned a redesign anchored on three pillars: an OKR-based goal system, structured monthly 1:1s with documented outcomes, and a calibration model that produces genuine differentiation without forced distribution. She wants your strategic point of view on architecture, sequencing, manager enablement, and the cultural change required to make it stick.`,
        ko: `당신은 TechBridge Solutions(300 FTE, 시리즈 C SaaS, ARR 약 $60M)의 HRBP인 Alex Han입니다. 기존 연간 리뷰가 측정 가능한 손상을 야기 중: 리뷰가 유용하다고 답한 직원은 34%에 불과, 매니저 완료율은 마감 3차 연장 후에도 71%, 지난 사이클 분포는 78%가 "기대 초과" 이상으로 명백한 인플레이션. 고성과자 자발적 이직률이 TTM 14%까지 상승, 퇴직 인터뷰에서 "의미 있는 피드백 부재", "실질적 차별화 없음"이 자주 언급. CEO Maya Lin이 OKR 기반 목표 체계, 결과 문서화가 포함된 월간 1:1, 강제 분포 없이도 실질적 차별화를 만들어내는 캘리브레이션 모델 — 세 기둥에 기반한 재설계를 지시. 아키텍처, 시퀀싱, 매니저 역량 강화, 그리고 정착을 위한 문화 변화에 대한 당신의 전략적 관점이 필요합니다.`
      }
    },

    caseStudy: {
      beginner: {
        en: `TechBridge Solutions has 300 employees. They make software for other companies.

The current problem:
- One big review per year
- Managers wait until the last minute
- Almost everyone gets a high rating
- Top employees are leaving

The CEO wants a new system:
- Clear goals (OKRs) every quarter
- A short meeting between manager and employee every month
- Honest feedback and real differences in ratings

You have one hour to prepare for the meeting with the CEO.`,
        ko: `TechBridge Solutions는 직원 300명의 B2B 소프트웨어 회사입니다.

현재 문제:
- 연 1회만 큰 평가
- 매니저는 마지막까지 미룸
- 거의 모두 높은 등급을 받음
- 우수 직원이 떠남

CEO가 원하는 새 체계:
- 분기마다 명확한 목표(OKR)
- 매월 매니저-직원 짧은 미팅
- 솔직한 피드백과 실질적 등급 차이

CEO 미팅까지 한 시간 — 준비해야 합니다.`
      },
      intermediate: {
        en: `TechBridge Solutions, founded in 2015, has grown to 300 employees serving mid-market B2B customers. The current performance management process has three steps: goals set in January, mid-year check-in, and year-end review with a five-point rating. The system is failing in measurable ways:

- Only 34% of employees say reviews help them grow
- Manager completion is 71% even after three deadline extensions
- 78% of employees were rated "Exceeds Expectations" or above last cycle
- High performers cite "no real feedback" in exit interviews
- Voluntary attrition among top performers is 14% trailing twelve months

CEO Maya Lin has read about continuous performance management at high-performing tech companies and wants to redesign around three pillars:
- OKRs reviewed quarterly with public visibility
- Documented monthly 1:1s between manager and direct report
- Calibration that produces real differentiation without a forced curve

You have one hour to prepare your recommendation on architecture, rollout sequence, and how to bring 60 people managers along.`,
        ko: `TechBridge Solutions는 2015년 설립, 300명 규모로 성장한 중견 B2B SaaS입니다. 현 성과관리 프로세스는 3단계: 1월 목표 설정, 중간 점검, 연말 5점 척도 평가. 측정 가능한 실패 지표:

- 리뷰가 성장에 도움이 된다고 답한 직원 34%
- 마감 3차 연장 후에도 매니저 완료율 71%
- 지난 사이클 78%가 "기대 초과" 이상
- 고성과자 퇴직 인터뷰에서 "실질 피드백 없음" 빈번
- 고성과자 자발적 이직률 TTM 14%

CEO Maya Lin은 고성과 테크 기업의 지속적 성과관리에 영감을 받아 세 기둥으로 재설계를 원함:
- 분기별 검토 및 공개 가시성을 가진 OKR
- 매니저-직속 부하 간 문서화된 월 1:1
- 강제 분포 없이 실질 차별화를 만드는 캘리브레이션

한 시간 — 아키텍처, 롤아웃 시퀀스, 60명 피플 매니저를 어떻게 끌고 갈지 권고안을 준비해야 합니다.`
      },
      advanced: {
        en: `TechBridge Solutions (Delaware C-corp, founded 2015) is a 300-FTE SaaS company at approximately $60M ARR, serving mid-market B2B customers with workflow automation software. The current performance management instrument is a legacy artifact of the company's first HR build-out in 2018: January goal setting in a homegrown form, a mid-year check-in template that 40% of managers skip, and a year-end review with a five-point rating and a free-text narrative.

Diagnostic data is unambiguous. The most recent engagement survey showed only 34% of employees agreeing that "performance reviews help me grow," placing the company in the bottom quartile of the benchmark cohort. Manager completion ran at 71% even after three deadline extensions, and rating distribution showed 78% in the top two bands — clear central tendency bias combined with leniency. Calibration sessions, intended to surface disagreements, became performative exercises with managers defending pre-decided ratings. Most damaging, exit interview data over the past three quarters shows a recurring theme among departing top performers: "I have no idea what my manager really thinks of my work," and "There's no real difference between how A-players and B-players are recognized here." High-performer attrition has reached 14% TTM against a target of 8%.

CEO Maya Lin has committed to a redesign anchored on three pillars: OKRs reviewed quarterly with public visibility across the company, documented monthly 1:1s between every manager and direct report with structured agendas, and a calibration model that produces genuine differentiation without imposing a forced distribution curve. She is open on tactics but firm on outcomes: by the next planning cycle, performance management must be a competitive advantage, not a liability. The redesign will affect 60 people managers and 300 employees; rollout sequencing, manager enablement, technology selection, and the cultural narrative all need your point of view.`,
        ko: `(고급 — 영문 위주 학습)

TechBridge Solutions(시리즈 C, 300 FTE, ARR 약 $60M)는 중견 B2B 워크플로 자동화 SaaS. 현 성과관리는 2018년 HR 초기 구축의 레거시: 자체 폼 기반 1월 목표, 매니저 40%가 건너뛰는 중간 점검, 5점 척도 + 자유서술 연말 리뷰. 진단 데이터는 명확함 — 리뷰가 성장에 도움된다 응답 34%(벤치마크 하위 4분위), 매니저 완료율 71%(3차 마감 연장 후), 평정 분포 78%가 상위 2단계로 중심화 + 관대화 편향. 캘리브레이션 세션은 사전 결정된 평정을 방어하는 형식적 행사로 변질. 퇴직 고성과자 인터뷰에서 "매니저가 내 일을 어떻게 평가하는지 모르겠다", "A 플레이어와 B 플레이어 사이에 실질적 차이가 없다"가 반복. 고성과자 이직률 TTM 14%(목표 8% 대비). CEO Maya Lin의 세 기둥: 전사 공개되는 분기별 OKR, 구조화된 어젠다의 월간 1:1, 강제 분포 없는 실질 차별화 캘리브레이션. 60명 매니저, 300명 직원에 영향 — 롤아웃 시퀀싱, 매니저 역량 강화, 도구 선정, 문화 내러티브에 대한 관점이 필요.`
      }
    },

    questions: {
      beginner: [
        {
          q: "How often should managers and employees meet?",
          modelAnswer: "I recommend a meeting every month. The meeting should be 30 minutes. The manager and employee should talk about goals, progress, and problems. They should write down what they decide. This helps both sides remember and feel responsible. Once a month is not too much work but it is often enough to fix small problems before they become big.",
          tips: [
            "Give a clear number (every month, 30 minutes)",
            "List what they talk about: goals, progress, problems",
            "Explain the reason (not too much work, but often enough)"
          ]
        },
        {
          q: "How do we help managers give honest feedback?",
          modelAnswer: "Many managers are afraid to give honest feedback because they do not want conflict. We can help them in three ways. First, we can train them with simple scripts and role-play. Second, we can give them a template that asks for one strength and one area to improve. Third, we should reward managers who give honest feedback, not just nice feedback. Honest is kind in the long run.",
          tips: [
            "Show empathy for the manager's fear",
            "Use 'first, second, third' for structure",
            "End with a memorable line ('honest is kind in the long run')"
          ]
        },
        {
          q: "How do we know if the new system is working?",
          modelAnswer: "We should measure three things every quarter. First, manager completion: are 1:1s actually happening? Second, employee opinion: do they feel their feedback is useful? We can ask in a short survey. Third, business results: are our top employees staying with the company? We should look at these numbers every three months. If something is not working, we can change it quickly. We should not wait one year to see if the new system is good.",
          tips: [
            "Quantify with three measures",
            "Mix process metrics and outcome metrics",
            "Show iteration mindset (change quickly, do not wait)"
          ]
        }
      ],
      intermediate: [
        {
          q: "Walk me through the architecture you have in mind. What are the moving parts?",
          modelAnswer: "I'd recommend a four-component architecture. First, OKRs at company, team, and individual levels — set quarterly, scored at the end of the quarter, with public visibility so people can see how their work connects to the company's goals. Second, monthly 1:1s with a light structured agenda: recent wins, current priorities, blockers, and one development topic. Both parties capture notes in a shared tool. Third, a twice-yearly performance summary — not a rating, but a written narrative that captures impact, growth, and forward focus. Fourth, calibration sessions twice a year where leaders discuss top and bottom performers using consistent criteria. The point is to separate three things the old system mashed together: goal-setting, ongoing coaching, and performance differentiation. Each works better as its own loop.",
          tips: [
            "Use the word 'architecture' and number the components",
            "Explain the reasoning (separating goal-setting from coaching from differentiation)",
            "Mention specific cadence: quarterly OKRs, monthly 1:1s, twice-yearly summaries",
            "Key phrases: 'separate three things', 'its own loop'"
          ]
        },
        {
          q: "What's your rollout sequence? I don't want a big-bang launch that everyone resents.",
          modelAnswer: "Agreed — a phased rollout reduces risk and builds belief. I'd suggest a four-phase plan over six months. Phase one, weeks one to four: design finalization with input from a manager advisory group of eight to ten people across functions. Phase two, weeks five to eight: pilot with two willing teams of roughly 40 people total, including detailed feedback loops. Phase three, weeks nine to sixteen: company-wide rollout with intensive manager training — half-day workshops by function, plus office hours. Phase four, weeks seventeen to twenty-six: stabilization with monthly health checks and quarterly retrospectives. The pilot is the most important step. It surfaces friction before we scale, and it gives us internal champions who can speak to peer managers from experience rather than from a deck.",
          tips: [
            "Number the phases with specific week ranges",
            "Emphasize the pilot — credibility from peers",
            "Use precise verbs: 'surfaces friction', 'speak from experience'",
            "Show realistic time horizons (six months, not six weeks)"
          ]
        },
        {
          q: "Most of our managers are first-time managers. How do we enable them to actually do this well?",
          modelAnswer: "Manager capability is the binding constraint, and we need to invest heavily here or the redesign won't stick. I'd recommend a four-part enablement program. First, a foundational workshop on giving feedback, running 1:1s, and writing performance narratives — half a day per manager, run by an external coach. Second, role-play sessions in small cohorts where managers practice hard conversations with each other and get feedback. Third, a shared library of templates and example narratives so they're not starting from a blank page. Fourth, ongoing support through a monthly manager forum where people can bring real cases and get peer input. The goal is to shift from 'managers fill out forms' to 'managers coach humans.' That's a capability change, not a process change, and it takes structured practice.",
          tips: [
            "Lead with the principle ('manager capability is the binding constraint')",
            "Four-part program with specific formats",
            "End with a reframing: 'capability change, not process change'",
            "Mention external coach — shows willingness to invest"
          ]
        },
        {
          q: "How do we get real differentiation without going back to a forced curve? People hate forced ranking.",
          modelAnswer: "I share your view that forced distribution is a blunt instrument with serious downsides — it pits teammates against each other and rewards politics. But you're right that we need genuine differentiation, or the new system will inflate just like the old one. My recommendation is calibration guided by criteria, not quotas. We define what 'exceeds,' 'meets,' and 'needs improvement' look like at each level with concrete behavioral anchors. Leaders meet twice a year in cross-functional groups to calibrate ratings against these standards, with HR facilitating. We also publish guardrails — for example, no team should have more than 30% in the top band — but these are conversation starters, not hard caps. The cultural message is clear: we expect leaders to make hard calls and back them up with evidence. Over two cycles, calibration becomes the muscle that produces real differentiation without the toxicity of a curve.",
          tips: [
            "Acknowledge the concern about forced ranking before answering",
            "Distinguish 'criteria' from 'quotas' — sophisticated framing",
            "Use the term 'behavioral anchors' — HR expertise",
            "Mention timeline ('over two cycles') — calibration is a muscle"
          ]
        },
        {
          q: "What's the technology piece? Do we need to buy something or can we use what we have?",
          modelAnswer: "I'd recommend a lightweight investment, not a major HRIS overhaul. Our current HRIS handles core workforce data well, but it's not built for continuous performance management. There are three solid options in the $40 to $80 per employee per year range — Lattice, 15Five, and Culture Amp are the most relevant for our size and stage. They handle OKR tracking, 1:1 templates, performance summaries, and basic analytics out of the box. Total annual cost would be roughly $15,000 to $25,000, which is a fraction of what we'd spend trying to build this in our existing tools. I'd suggest a two-month evaluation with the pilot teams, focusing on user experience and integration with Slack and our HRIS. The tool matters, but it's a tier-two decision. Process and manager capability are tier one.",
          tips: [
            "Name specific vendors — shows market knowledge",
            "Quantify cost ($15-25K, $40-80 per employee)",
            "Pre-empt overbuying ('not a major HRIS overhaul')",
            "End with prioritization: tool is tier two, not tier one"
          ]
        }
      ],
      advanced: [
        {
          q: "Lay out the design philosophy and architecture for me. I want to understand the why behind each component, not just the what.",
          modelAnswer: "The design philosophy rests on three convictions. First, the old system failed because it conflated three distinct organizational needs — direction-setting, coaching, and differentiation — into a single annual artifact, and asked one process to do all three poorly. Second, behavior change is driven by cadence and repetition, not by event-based interventions. Third, performance management is fundamentally a leadership practice, not an HR process; our job is to design scaffolding that makes good leadership easier and bad leadership visible. The architecture follows from these convictions. The OKR layer creates strategic alignment and visibility — what we're trying to accomplish and how individual work ladders up. It runs on a quarterly cadence because annual goals are obsolete by month four in a SaaS environment. The 1:1 layer creates the coaching loop — monthly conversations with documented outcomes that build trust over time. The performance summary layer, twice yearly, creates the narrative artifact that captures growth and forward focus. The calibration layer creates differentiation — leaders convene to apply criteria consistently across the organization. Crucially, these layers are loosely coupled. OKRs inform 1:1s but don't determine them. Performance summaries draw on the year's evidence but don't reduce to OKR scores. Calibration creates differentiation but doesn't dictate compensation in a mechanical way. This loose coupling is intentional — it forces leaders to exercise judgment rather than hide behind a formula, which is exactly the muscle we want to build.",
          tips: [
            "Open with named convictions, not tactics",
            "Use precise abstract language: 'conflated', 'loosely coupled', 'scaffolding'",
            "Connect each component to its purpose",
            "Conclude with why the design is the way it is, not just what it is"
          ]
        },
        {
          q: "What's your view on how to handle compensation linkage? People will want to know how this changes their bonus and merit cycle.",
          modelAnswer: "Compensation linkage is the single most consequential design decision because it shapes the cultural meaning of the entire system. My recommendation is a deliberate loose coupling rather than a tight algorithmic link. Concretely, the twice-yearly performance summary informs annual merit and bonus decisions, but doesn't translate mechanically. Managers receive a recommended range based on the summary's signal — strong, solid, developing — and have discretion within calibrated bands. The reason for loose coupling is that the moment performance management becomes synonymous with comp, two pathologies emerge. Managers inflate ratings to protect comp for their people, hollowing out the developmental purpose. Employees treat 1:1s as performance theater rather than honest dialogue. By contrast, when comp is downstream and discretionary rather than upstream and formulaic, the performance system can do its actual job — helping people grow and producing real differentiation — while comp decisions remain a leadership accountability. Practically, I'd communicate this as 'performance management informs comp; it doesn't determine it.' We should also use equity refreshes and discretionary spot bonuses as flexible tools for recognizing exceptional contribution outside the annual cycle. The risk of this design is that it requires more leadership judgment, which means more potential for inconsistency. We mitigate through calibration discipline and post-cycle audits of comp outcomes against performance signals.",
          tips: [
            "Open by naming the stakes ('most consequential design decision')",
            "Use the framing 'loose coupling' vs 'tight algorithmic link'",
            "Name the failure modes ('two pathologies emerge')",
            "Show second-order thinking — how design shapes behavior",
            "Acknowledge the risk and how you mitigate it"
          ]
        },
        {
          q: "What's the cultural narrative you'd want me to tell — internally to the company and externally if asked about it?",
          modelAnswer: "The internal narrative should be sharp and honest, not corporate. I'd want you to say something like this. 'For years, our performance management has tried to be many things at once and ended up being none of them well. We're changing that. From this year, we're separating three things that need to be done well and done differently. We'll set clear quarterly objectives and let everyone see how their work connects. We'll have real monthly conversations between every manager and team member — not performative, not skippable. Twice a year, we'll step back and assess growth honestly. And we'll calibrate as leaders to make sure we're recognizing real impact, not playing favorites. This is harder than what we did before. It asks more of every manager. It asks more of every employee. We're doing it because the people who are best at this — the companies producing breakthrough work — treat performance management as a leadership discipline, not an HR ritual. We want to be that kind of company.' Externally, if a candidate or journalist asks, the framing is simpler: we believe high performance comes from real conversations, clear goals, and honest differentiation — not annual rituals. The reason narrative matters this much is that performance management is one of the few processes every employee experiences directly. The story you tell about why it's changing becomes part of the story they tell about working here. Get the narrative right and the rollout has tailwind. Get it wrong and even a well-designed system meets resistance.",
          tips: [
            "Write the actual words you'd want the CEO to say — bold move",
            "Distinguish internal and external framing",
            "Explain why the narrative matters strategically",
            "Use rhythm and contrast ('not performative, not skippable')",
            "Close with a memorable principle: narrative as tailwind or headwind"
          ]
        }
      ]
    },

    glossary: {
      "performance management": "성과관리",
      "continuous performance management": "지속적 성과관리 (수시 피드백 기반)",
      "annual review": "연간 평가",
      "OKR": "Objectives and Key Results, 목표와 핵심결과",
      "1:1": "1대1 정기 미팅",
      "calibration": "평가 캘리브레이션 (조직 간 평정 보정)",
      "forced distribution": "강제 분포 (예: 상위 10%, 하위 10%)",
      "forced ranking": "강제 순위 평가",
      "behavioral anchor": "행동 기준 (평정 기준의 구체 행동 기술)",
      "rating inflation": "평정 인플레이션 (등급 상향 편향)",
      "central tendency bias": "중심화 경향 편향",
      "leniency bias": "관대화 편향",
      "performance summary": "성과 요약 (서술형 평가 결과물)",
      "merit cycle": "연봉 인상 사이클",
      "discretionary bonus": "재량 보너스",
      "spot bonus": "즉시 지급 보너스 (특별 기여 인정)",
      "equity refresh": "스톡옵션 추가 부여 (리프레시 그랜트)",
      "manager enablement": "매니저 역량 강화",
      "skip-level": "한 단계 건너뛴 상위 리더와의 소통",
      "engagement survey": "직원 몰입 설문",
      "exit interview": "퇴직 면담",
      "TTM": "Trailing Twelve Months, 직전 12개월",
      "binding constraint": "핵심 제약 (가장 결정적인 한계)",
      "loose coupling": "느슨한 연결 (시스템 간 약한 종속)",
      "pilot": "파일럿 (소규모 시범 운영)",
      "rollout": "전사 도입/전개",
      "performance theater": "성과 연극 (보여주기식 평가 행위)",
      "high performer": "고성과자",
      "differentiation": "차별화 (성과 등급의 의미 있는 구분)",
      "HRIS": "Human Resources Information System, 인사 정보 시스템"
    }
  },
  {
    id: 'talent-density-01',
    advisorNote: {
      target: "스타트업 대표 · 채용 담당 (10~50인)",
      points: [
        "초기 10명이 이후 100명의 문화를 결정합니다. 급하다고 채용 바를 낮추는 순간, 그 기준이 새로운 기준이 됩니다.",
        "레퍼런스 체크는 형식이 아니라 최고의 검증 도구입니다. '다시 함께 일하시겠습니까?'라는 질문 하나가 면접 세 번보다 정확할 때가 많습니다.",
        "스타트업의 채용 경쟁력은 연봉이 아니라 '일의 밀도와 성장 속도'입니다. JD에 무엇을 배우게 되는지를 쓰세요.",
        "채용 실수 비용은 연봉의 2~3배입니다. 수습 기간을 실질적인 상호 평가 기간으로 운영하세요."
      ],
      checklist: [
        "채용 바 (필수 기준) 문서화 — 타협 불가 항목 3개",
        "레퍼런스 체크 질문 세트 준비",
        "수습 기간 평가 기준과 면담 일정",
        "채용 결정에 반대할 수 있는 사람 지정 (bar raiser)"
      ]
    },
    title: 'Hiring for Talent Density',
    titleKo: '인재밀도 향상을 위한 채용 전략',
    category: 'Talent Acquisition',
    estimatedMinutes: 20,

    briefing: {
      beginner: {
        en: `You are an HR Business Partner at a growth-stage startup. The CEO read about Netflix and wants only top-quality people. The company will pay more but hire fewer people.`,
        ko: `당신은 성장기 스타트업의 HRBP입니다. CEO는 Netflix 사례를 읽고 최고 수준의 인재만 원합니다. 회사는 더 많이 지급하되 적게 채용할 것입니다.`
      },
      intermediate: {
        en: `You are Priya Shah, HRBP at Atlas Digital, a 220-person growth-stage startup. CEO Daniel Reyes recently read about Netflix's talent density philosophy and wants to apply it here — fewer but exceptional hires, top-of-market compensation, and a much higher bar for who joins. He's also concerned about current employees who are competent but not exceptional. He's asked you to design the framework and present it next week.`,
        ko: `당신은 220명 규모 성장기 스타트업 Atlas Digital의 HRBP인 Priya Shah입니다. CEO Daniel Reyes는 최근 Netflix의 인재밀도 철학을 읽고 — 더 적지만 탁월한 인재, 시장 최상위 보상, 훨씬 높은 채용 기준을 적용하고자 합니다. 또한 유능하지만 탁월하지는 않은 현재 직원들에 대해 우려 중. 다음 주 발표용 프레임워크 설계를 요청했습니다.`
      },
      advanced: {
        en: `You are Priya Shah, HRBP at Atlas Digital (220 FTEs, Series B, $28M ARR, growing 90% YoY). CEO Daniel Reyes — a former product leader at a hyperscaler — has become convinced that the company's primary constraint to outsized outcomes is talent density: the proportion of A-players to total headcount. His mental model is shaped by Netflix's "keeper test" and the dream-team philosophy. He wants to formally adopt a talent density operating model: significantly higher hiring bar, top-decile compensation, structured exit of consistent B-performers via a generous severance program, and elimination of perks and policies that exist to retain mediocrity. The implications are non-trivial — current attrition is healthy at 11%, engagement scores are above industry median, and the leadership team is divided on whether this philosophy is right for a company at this stage. He wants your strategic point of view on framework design, ethical guardrails, manager calibration, and the cultural narrative before he commits publicly.`,
        ko: `당신은 Atlas Digital(220 FTE, 시리즈 B, ARR $28M, YoY 90% 성장)의 HRBP인 Priya Shah입니다. CEO Daniel Reyes — 하이퍼스케일러 출신 프로덕트 리더 — 는 회사의 비범한 성과를 막는 1차 제약이 인재밀도(A 플레이어 / 전체 인원 비율)라고 확신. 그의 멘탈 모델은 Netflix의 "keeper test"와 드림팀 철학에서 형성. 인재밀도 운영 모델을 공식 채택하고자 함: 채용 기준 대폭 상향, 시장 상위 10%대 보상, 일관된 B 성과자의 관대한 위로금 기반 이탈, 평범함을 보호하는 복리후생/정책 제거. 영향은 결코 작지 않음 — 현 이직률 11%로 건전, 몰입 점수도 업계 중위 이상, 리더십 팀은 현 단계 회사에 이 철학이 맞는지 분열. 공개 약속 전, 프레임워크 설계, 윤리적 가드레일, 매니저 캘리브레이션, 문화 내러티브에 대한 전략적 관점이 필요.`
      }
    },

    caseStudy: {
      beginner: {
        en: `Atlas Digital is a young company with 220 employees. The business is growing fast.

The CEO believes:
- Hire fewer people, but only the best
- Pay more than other companies
- Say goodbye to people who are just okay, with kind support
- Remove rules that protect average performers

The CEO wants your plan next week. You need to think about how to do this in a fair and clear way.`,
        ko: `Atlas Digital은 직원 220명의 빠르게 성장 중인 스타트업입니다.

CEO의 신념:
- 적게 뽑되, 최고만 뽑는다
- 다른 회사보다 더 많이 지급한다
- '그저 그런' 직원에게는 좋은 위로금과 함께 작별한다
- 평범한 직원을 보호하는 규정은 없앤다

CEO가 다음 주 당신의 계획을 원합니다. 공정하고 명확하게 어떻게 할지 고민해야 합니다.`
      },
      intermediate: {
        en: `Atlas Digital is a 220-person Series B startup growing 90% year over year. CEO Daniel Reyes wants to formally adopt a talent density operating model inspired by Netflix.

The four pillars he has in mind:
- A much higher hiring bar, with multi-round structured interviews
- Top-decile compensation — base, equity, and bonus
- A "keeper test" for current employees: if a manager wouldn't fight to keep someone, that person gets a generous severance
- Removal of policies and perks that exist mostly to retain average performers

The complication: Atlas is currently healthy. Attrition is 11%, engagement scores are above industry median, and the leadership team is divided. Some leaders worry this philosophy will create fear and damage the culture. Others believe it's necessary to compete with bigger tech companies for top talent.

You have one week to design the framework, including ethical guardrails, manager training, and the rollout sequence. Daniel wants your honest view on whether this is right for Atlas at this stage.`,
        ko: `Atlas Digital은 YoY 90% 성장 중인 220명 규모 시리즈 B 스타트업. CEO Daniel Reyes는 Netflix에서 영감을 받은 인재밀도 운영 모델을 공식 도입하고자 함.

네 기둥:
- 다단계 구조화 인터뷰로 채용 기준 대폭 상향
- 시장 상위 10%대 보상(베이스/지분/보너스)
- 현 직원 "keeper test": 매니저가 붙잡고 싶지 않으면 관대한 위로금과 함께 이탈
- 평범함 보호용 정책/복리후생 제거

복잡성: Atlas는 현재 건강함. 이직률 11%, 몰입 점수도 업계 중위 이상, 리더십 팀은 분열. 일부는 이 철학이 두려움을 만들고 문화를 훼손할 것을 우려, 일부는 빅테크와 인재 경쟁을 위해 필요하다고 주장.

일주일 — 윤리적 가드레일, 매니저 교육, 롤아웃 시퀀스 포함 프레임워크를 설계해야 함. Daniel은 현 단계 Atlas에 이것이 맞는지 솔직한 견해를 원함.`
      },
      advanced: {
        en: `Atlas Digital (Delaware C-corp, founded 2020) is a 220-FTE Series B startup with $28M ARR, growing 90% YoY in a competitive vertical SaaS category. CEO Daniel Reyes — formerly a director of product at a hyperscaler — has become increasingly vocal in leadership meetings about a single conviction: the company's primary constraint to a billion-dollar outcome is not capital, not market, but talent density. His mental model draws explicitly from Netflix's "keeper test" framework and Reed Hastings's dream-team philosophy: a workplace functions best when every person is someone you would fight to keep, and tolerating consistent B-performance corrodes the entire system because A-players don't want to work with B-players.

He is proposing a formal operating-model shift built on four pillars. First, hiring bar elevation: structured multi-round interviews, calibrated interviewer pools, and explicit "would I fight to keep this person in two years" decision criteria. Second, compensation strategy: top-decile cash and equity targeted at the 90th percentile of the relevant competitive set, with the expectation that this is funded partly by hiring fewer people. Third, performance assessment: regular keeper-test reviews where managers identify direct reports they would not re-hire today; those identified receive a generous severance package — typically four to six months — to transition to better-fit roles elsewhere. Fourth, perk and policy rationalization: removing benefits whose primary function is retaining average performers (overly generous PTO accruals, lenient remote work flexibility for underperformers, retention bonuses for non-critical roles).

The complicating context is that Atlas is currently healthy by conventional metrics. Voluntary attrition runs at 11% — below industry benchmark — engagement scores are above the median for venture-backed SaaS at this stage, and the most recent values survey showed strong manager-employee trust. The leadership team is genuinely split: the CTO and head of product favor the shift; the head of customer success and head of operations worry it will create a fear-based culture and damage the long-cycle relationship work their teams depend on. Daniel wants your strategic point of view — not advocacy or opposition, but a serious assessment of fit, design, risks, and execution requirements — before he commits to this publicly.`,
        ko: `(고급 — 영문 위주)

Atlas Digital(시리즈 B, 220 FTE, ARR $28M, YoY 90% 성장)의 버티컬 SaaS. CEO Daniel Reyes(하이퍼스케일러 출신 프로덕트 디렉터)는 한 가지 확신을 점점 강하게 표명 — 빌리언 달러 결과를 막는 1차 제약은 자본도 시장도 아닌 인재밀도. 멘탈 모델은 Netflix "keeper test"와 Reed Hastings의 드림팀 철학에서 직접 차용. 네 기둥: (1) 채용 기준 상향(구조화 다단계 인터뷰, 인터뷰어 캘리브레이션, "2년 후에도 붙잡고 싶은가" 의사결정 기준), (2) 상위 10%대 보상(적게 뽑아 절감분으로 일부 충당), (3) 정기 keeper-test 리뷰(매니저가 오늘 다시 채용하지 않을 직속 부하 식별 → 4~6개월 관대한 위로금으로 이탈), (4) 평범함 보호 정책/복리후생 제거. 복잡한 맥락: Atlas는 통상 지표상 건강 — 자발적 이직률 11%(업계 벤치 하회), 몰입 점수 SaaS 중위 이상, 매니저-직원 신뢰 강함. 리더십 팀 분열: CTO/프로덕트 헤드 찬성, CS 헤드/오퍼레이션 헤드 우려(공포 문화, 장기 관계 업무 훼손). Daniel은 옹호도 반대도 아닌 — 적합성, 설계, 리스크, 실행 요구사항에 대한 진지한 평가를 원함.`
      }
    },

    questions: {
      beginner: [
        {
          q: "Is this a good idea for our company?",
          modelAnswer: "I think the idea has good points and risks. The good point is that great people make better products. The risk is that fear can hurt the team. My recommendation is to start small. We can use the higher hiring bar for new people first. For current employees, we should give them clear feedback and time to improve. We should not move too fast. A careful start protects our culture.",
          tips: [
            "Show balance: good points and risks",
            "Suggest a careful, step-by-step approach",
            "Use 'my recommendation is' and 'we should'"
          ]
        },
        {
          q: "How do we pay top-of-market money? It will cost a lot.",
          modelAnswer: "The math can work if we hire fewer people. For example, if we hire 10 senior engineers at $200,000 instead of 15 engineers at $140,000, the total cost is similar. But the work output can be higher. We should benchmark salaries with reliable data — like Radford or Pave. We pay more for senior roles where one great person makes a big difference. We do not need to pay top-of-market for every job.",
          tips: [
            "Use a simple math example",
            "Mention benchmarking sources (Radford, Pave)",
            "Show selective thinking — not every role gets top pay"
          ]
        },
        {
          q: "How do we say goodbye to employees in a kind way?",
          modelAnswer: "First, the employee should not be surprised. The manager must give honest feedback for many months before any decision. Second, we offer a generous severance — at least four months of salary and three months of health coverage. Third, we provide career support to help them find a new job. Fourth, we say thank you publicly when they leave. If we do this with respect, the people who stay will trust us more, not less.",
          tips: [
            "Show the steps clearly (first, second, third, fourth)",
            "Be specific about numbers (four months, three months)",
            "Connect to the bigger picture (trust of remaining employees)"
          ]
        }
      ],
      intermediate: [
        {
          q: "Before we commit, give me your honest view: is talent density the right philosophy for Atlas at this stage?",
          modelAnswer: "My honest view is that the philosophy has real merit, but the timing and version we adopt matters enormously. The case for it is strong: at 220 people growing 90%, the cost of a B-player is much higher than at a mature company because each hire shapes the next ten. The case for caution is that we don't have Netflix's brand, balance sheet, or content moat to absorb the volatility this creates. I'd recommend a modified version. Adopt the elevated hiring bar and top-decile compensation now — those are unambiguous wins. Be more selective about the keeper test mechanism: apply it in engineering and product where individual leverage is highest, but go slower in customer success and operations where relationships and tenure compound differently. The all-or-nothing version risks losing institutional knowledge we'd struggle to replace. A staged approach gets us 80% of the benefit with 30% of the risk.",
          tips: [
            "Lead with an honest, non-binary view",
            "Distinguish what to adopt now vs go slower on",
            "Use ratio framing ('80% of benefit, 30% of risk')",
            "Show function-by-function thinking — not one-size-fits-all"
          ]
        },
        {
          q: "Walk me through how we elevate the hiring bar without slowing down to a crawl.",
          modelAnswer: "I'd recommend a four-component upgrade to our hiring process. First, structured interviews with consistent rubrics — every interviewer scores the same competencies using the same scale, which reduces noise and bias. Second, a calibrated interviewer pool: only people who've been trained and shown consistent scoring can be loop interviewers. Third, a bar-raiser model — borrowed from Amazon — where one independent interviewer in every loop has veto power and is not part of the hiring team. Fourth, a clear 'would I fight to keep this person in two years' decision criterion at the hiring committee. The risk you're raising is real: more rigor can mean slower time-to-fill. We mitigate by investing in sourcing — better top-of-funnel means we can afford to be more selective without extending cycles. Target time-to-hire stays at four to six weeks for IC roles; for senior leadership we accept eight to twelve weeks because the cost of a wrong hire is higher.",
          tips: [
            "Numbered components with concrete mechanisms",
            "Reference real frameworks (Amazon bar-raiser)",
            "Address the CEO's actual concern (speed)",
            "Differentiate by role level"
          ]
        },
        {
          q: "The keeper test feels risky. How do we apply it without creating a culture of fear?",
          modelAnswer: "You're right to be concerned — implemented badly, the keeper test becomes a quarterly threat that drives short-term behavior and erodes trust. The way to avoid that is to make it manager-side discipline, not a public verdict on each employee. Concretely, three principles. First, the keeper question is asked by leaders about their teams in calibration sessions — not announced to employees. Second, it triggers a coaching conversation and a clear development path before it triggers any exit consideration. Employees who land in the 'not keep' bucket get explicit feedback and at least one quarter to demonstrate growth. Third, when exit is the right outcome, it's handled with genuine generosity — four to six months severance, outplacement, public thanks. The cultural signal is: we hold a high bar, and we treat people with dignity at every step. The opposite of fear isn't tolerance of mediocrity; it's clarity plus respect.",
          tips: [
            "Acknowledge the concern directly",
            "Numbered principles with mechanisms",
            "End with a memorable framing ('opposite of fear isn't tolerance')",
            "Show distinction between calibration and public verdict"
          ]
        },
        {
          q: "What's your view on the perks and policies question? Daniel wants to strip things back.",
          modelAnswer: "I'd be careful here. Some of what Daniel is identifying as 'protection for mediocrity' is actually load-bearing for everyone, including A-players. Generous PTO, flexible remote work, and good parental leave aren't drags on talent density — they're table stakes for senior talent with options. The right move isn't to remove these broadly; it's to remove specific patterns that genuinely reward non-performance. Examples: retention bonuses that aren't tied to outcomes, fixed promotion cycles that advance people on tenure rather than impact, paid sabbaticals for tenure rather than excellence. I'd recommend an audit of every policy with two questions: does this attract or retain A-players, and does it inadvertently reward non-performance? Keep the first category, eliminate the second. The frame to give Daniel is that high-talent-density companies invest in adult-treatment policies; they don't strip them away.",
          tips: [
            "Push back thoughtfully on the CEO's framing",
            "Distinguish 'protection for mediocrity' from 'table stakes for A-players'",
            "Use specific examples in both buckets",
            "Reframe with a principle the CEO can use"
          ]
        },
        {
          q: "How do we measure whether talent density is actually improving over time?",
          modelAnswer: "Measuring talent density rigorously is harder than the concept makes it sound. I'd recommend a five-metric dashboard reviewed quarterly. First, calibrated performance distribution: what percentage of employees are in the top two performance bands using consistent calibrated definitions. Second, regretted attrition rate: of people who leave, how many would we have fought to keep. The goal is to keep this very low — under 3%. Third, internal mobility into critical roles: are we promoting from within for the hardest jobs, which signals real depth. Fourth, engineering and product velocity metrics: shipping cadence, defect rates, customer-impact-per-headcount. Fifth, employee NPS specifically among top performers: are our best people happy and recommending Atlas. Headline 'A-player percentage' numbers are tempting but easy to game; the dashboard above triangulates better and creates accountability.",
          tips: [
            "Acknowledge measurement is hard",
            "Numbered metrics with specific targets",
            "Distinguish gameable single metrics from triangulated dashboards",
            "Use precise terms: 'regretted attrition', 'employee NPS'"
          ]
        }
      ],
      advanced: [
        {
          q: "Give me your strategic point of view: is this philosophy right for Atlas at this stage, in this market, with this leadership team?",
          modelAnswer: "My strategic view is that talent density is the right destination but the wrong starting point if framed as a sweeping operating-model shift. Three reasons. First, organizational physics: Netflix adopted this philosophy with a strong brand, a content business with extreme outlier dynamics, and a CEO with the credibility to absorb attrition shocks. We have none of those buffers yet. At 220 people growing 90%, our system has less slack to absorb the volatility this creates if we implement it crudely. Second, market context: in our vertical SaaS category, customer relationships and institutional knowledge in customer success and operations compound over years. Aggressive turnover in those functions would damage NRR more than it would improve velocity. Third, leadership alignment: a divided leadership team cannot execute a high-conviction operating-model shift. If we push forward with the CTO and head of product visibly in favor and the head of customer success visibly skeptical, we get the worst of both worlds — inconsistent application that creates exactly the fear-without-clarity dynamic you want to avoid. My recommendation is to adopt the philosophy as a direction of travel over twelve to eighteen months, not a step change in one quarter. Concretely: implement the elevated hiring bar and top-decile compensation immediately — those are unambiguous wins regardless of where we land. Pilot the keeper test mechanism in engineering and product, where the leaders genuinely believe in it and the work has the outlier dynamics that justify it. Hold off in customer success and operations until we have either leadership conviction or evidence from the pilot. Use the next two quarters to build the management muscle this requires — calibrated assessment, hard conversations, generous exits. Re-evaluate at the twelve-month mark. The risk of this approach is that it looks like compromise. The benefit is that it actually gets implemented well rather than aspirationally announced and badly executed.",
          tips: [
            "Lead with a clear non-binary view, then defend it",
            "Use 'organizational physics' framing — sophisticated",
            "Address each of the three named factors (stage, market, leadership)",
            "Conclude with specific staged actions, not abstractions",
            "Acknowledge the criticism of your own recommendation"
          ]
        },
        {
          q: "Talk to me about the ethics and the second-order effects. What are you most worried about in five years?",
          modelAnswer: "My five-year worry isn't about talent quality; it's about what kind of company we become and what kind of leaders we develop. Three specific concerns. First, the talent density philosophy, taken to its extreme, treats people as instruments of company performance rather than as humans whose contribution matters. Done well, that's a productive tension that drives excellence. Done badly, it produces a culture where people feel they're constantly being evaluated for disposal, which corrodes psychological safety, kills the long-horizon risk-taking that produces breakthrough work, and selects for a particular personality type that thrives under that pressure. We end up with a homogeneous workforce — typically young, untethered, with options elsewhere — and lose the diversity of perspective and life experience that compounds into real product judgment. Second, manager development: when the operating model says 'exit B-performers,' managers learn to evaluate and remove rather than to develop and grow. Over five years, we end up with a leadership bench that has never built someone up from B-player to A-player, which is the highest-leverage thing a great manager does. We become great at hiring, mediocre at developing. Third, external reputation: the talent density narrative plays well in Silicon Valley press but can become toxic in adjacent ecosystems. If we want to recruit senior leaders from companies that don't share this philosophy — and we will, because that's where the most senior talent often sits — we'll find the door closing. The mitigation across all three: be deliberate about which Netflix practices we adopt and which we modify. Adopt the hiring bar and the compensation discipline. Reject the framing that average performance is corrosive — instead frame it as 'we invest deeply in growth, and when fit isn't right we part with generosity.' That's almost as crisp and far more sustainable.",
          tips: [
            "Reframe the question from quality to identity",
            "Three specific named concerns with mechanisms",
            "Use precise concepts: 'psychological safety', 'long-horizon risk-taking', 'homogeneous workforce'",
            "Address the manager development second-order effect",
            "End with a constructive reframing that preserves the value while changing the message"
          ]
        },
        {
          q: "Assume we go forward with the modified version you recommended. What's your six-month execution plan?",
          modelAnswer: "I'd structure execution in three workstreams running in parallel over six months. Workstream one, hiring system upgrade, completes in months one through three. We redesign interview loops with structured rubrics by job family, train a calibrated pool of about thirty interviewers, implement a bar-raiser model in engineering and product first, then expand. Success metric: time-to-hire holds at four to six weeks while hire quality — measured by ninety-day and six-month performance — improves by a measurable margin. Workstream two, compensation repositioning, starts in month one with a benchmarking refresh against the relevant competitive set, completes design by month three, and rolls out in the merit cycle in month four. We move all critical roles to the eightieth to ninetieth percentile of base and equity, with a clear comp philosophy document published internally. The signal: we pay for excellence, and we expect it. Workstream three, performance and exits, is the slowest and most carefully sequenced. Months one through two: manager enablement on calibrated assessment and hard conversations — workshops, coaching, role-plays. Month three: first calibration cycle in engineering and product with the keeper test as a discussion frame, not a mechanical filter. Months four through six: the small number of well-supported exits that result from that calibration, executed with the generous severance template and personal leadership involvement. Across all three, we run a monthly leadership review with a four-metric dashboard: hire quality, regretted attrition, employee NPS among top performers, and manager confidence in handling hard conversations. At month six, we review and decide whether to expand the performance workstream beyond engineering and product. The hardest part of this plan is not the design — it's the discipline to stage it rather than do it all at once. That discipline is what determines whether we end up with talent density as a real capability or as another initiative that got loudly announced and quietly diluted.",
          tips: [
            "Three parallel workstreams with sequencing and metrics",
            "Concrete dates and specific actions",
            "Acknowledge the slowest workstream and why",
            "Include the leadership review mechanism",
            "Close with the binding constraint (execution discipline, not design)"
          ]
        }
      ]
    },

    glossary: {
      "talent density": "인재밀도 (조직 내 A 플레이어 비율)",
      "keeper test": "Netflix의 '붙잡고 싶은가' 테스트",
      "A-player": "최고 수준의 성과를 내는 인재",
      "B-player": "평균적 성과의 인재",
      "dream team": "드림팀 (전원이 최상위 인재로 구성된 팀)",
      "hiring bar": "채용 기준선",
      "bar-raiser": "(Amazon식) 채용 기준 수호자 인터뷰어",
      "structured interview": "구조화 인터뷰",
      "interviewer calibration": "인터뷰어 평가 보정 (점수 일관성 확보)",
      "top decile": "상위 10%",
      "90th percentile": "90 백분위 (상위 10%)",
      "compensation philosophy": "보상 철학 (회사의 보상 원칙)",
      "merit cycle": "연봉 인상 사이클",
      "equity": "지분 (스톡옵션/RSU)",
      "regretted attrition": "후회되는 이직 (떠나면 안 되는 사람의 이탈)",
      "voluntary attrition": "자발적 이직",
      "time-to-hire": "채용 소요 기간",
      "time-to-fill": "포지션 충원 소요 기간",
      "top of funnel": "채용 퍼널 상단 (지원자 풀)",
      "NRR": "Net Revenue Retention, 순매출 유지율",
      "outplacement": "전직 지원 서비스",
      "severance package": "위로금 패키지",
      "psychological safety": "심리적 안전감",
      "calibration session": "캘리브레이션 세션 (평정 보정 회의)",
      "internal mobility": "사내 이동/내부 인사",
      "employee NPS": "직원 추천 지수 (Net Promoter Score)",
      "hyperscaler": "하이퍼스케일러 (대형 클라우드/플랫폼 기업)",
      "vertical SaaS": "특정 산업 특화 SaaS",
      "operating model": "운영 모델 (조직 운영 체계)",
      "organizational physics": "조직 물리학 (조직 작동의 구조적 제약)"
    }
  },
  {
    id: 'ai-transformation-01',
    advisorNote: {
      target: "스타트업 대표 · 운영/HR 리드",
      points: [
        "전사 선언보다 작은 팀 파일럿이 빠릅니다. 2주 파일럿 → 사례 공유 → 확산이 스타트업 규모에서 가장 성공률이 높습니다.",
        "보안 가이드라인을 먼저 만드세요. 고객 데이터·개인정보를 외부 AI 툴에 넣을 수 있는지에 대한 기준 없이 확산하면 사고가 납니다.",
        "'AI로 대체'가 아니라 'AI로 1인당 처리량 확대'로 프레이밍해야 구성원 저항이 줄고 실험 참여가 늘어납니다."
      ],
      checklist: [
        "AI 툴 사용 보안 가이드라인 1페이지",
        "파일럿 팀 선정과 2주 목표",
        "사례 공유 채널 (주간 데모 등)",
        "툴 구독 비용·계정 관리 기준"
      ]
    },
    title: 'Leading AI Transformation Across the Workforce',
    titleKo: '전 조직 AI 전환을 통한 임팩트 창출',
    category: 'Future of Work & AI',
    estimatedMinutes: 25,

    briefing: {
      beginner: {
        en: `You are an HR Business Partner at a traditional marketing company with 500 employees. The CEO wants every worker — not only engineers — to use AI tools. But most employees have never tried ChatGPT. You need a plan.`,
        ko: `당신은 직원 500명의 전통적 마케팅 회사의 HRBP입니다. CEO는 엔지니어뿐 아니라 모든 직원이 AI 도구를 사용하기를 원합니다. 그러나 대부분 직원은 ChatGPT를 한 번도 써본 적이 없습니다. 계획이 필요합니다.`
      },
      intermediate: {
        en: `You are Marcus Lee, HRBP at Meridian Group, a 500-person marketing and media services company. CEO Helena Voss wants every employee — from designers to account managers to finance staff — using AI tools to do significantly higher-impact work within twelve months. The challenge: most employees haven't even tried ChatGPT, mid-level managers are quietly resistant, and some senior creatives openly fear job displacement. Helena wants you to lead the change-management, training, role-redesign, and culture work. You have a one-hour session today to align on the approach.`,
        ko: `당신은 500명 규모 마케팅/미디어 서비스 회사 Meridian Group의 HRBP인 Marcus Lee입니다. CEO Helena Voss는 디자이너부터 어카운트 매니저, 재무 스태프까지 — 모든 직원이 12개월 내 AI 도구로 훨씬 높은 임팩트 업무를 수행하기를 원함. 도전: 대부분 직원이 ChatGPT를 시도조차 해본 적이 없고, 중간 매니저는 조용히 저항하며, 일부 시니어 크리에이티브는 일자리 상실을 공개적으로 두려워함. Helena는 변화관리, 교육, 역할 재설계, 문화 작업을 당신이 주도하기를 원함. 오늘 한 시간 — 접근 방식 정렬 세션.`
      },
      advanced: {
        en: `You are Marcus Lee, HRBP at Meridian Group (500 FTEs, privately held, marketing and media services), a 40-year-old company serving Fortune 1000 clients across brand strategy, creative production, digital media, and analytics. CEO Helena Voss has set a board-level commitment: within twelve months, AI fluency becomes a baseline expectation for every employee, and the company demonstrates measurable productivity and quality gains across the major business lines. Current baseline is sobering — an internal survey shows only 18% of non-engineering employees have used a generative AI tool in their work, manager attitudes split roughly into thirds (enthusiastic, neutral, quietly resistant), and three senior creative directors have raised concerns about role displacement that have leaked to the broader creative organization. The transformation must address change management, training infrastructure, role redesign across functions where AI changes the work shape, talent strategy (what new roles, what existing roles evolve, what may shrink), culture and narrative, and measurement of impact. Helena wants your strategic point of view on architecture, sequencing, where the real friction will be, and how to navigate the human dimensions of an existential category shift.`,
        ko: `당신은 Meridian Group(500 FTE, 비상장 마케팅/미디어 서비스, 40년 역사, Fortune 1000 고객 대상 브랜드 전략/크리에이티브 제작/디지털 미디어/애널리틱스)의 HRBP인 Marcus Lee입니다. CEO Helena Voss의 이사회급 약속: 12개월 내 AI 유창성을 전 직원의 기본 기대치로 만들고, 주요 사업 라인 전반에 측정 가능한 생산성·품질 향상을 시연. 현 기준선은 우려스러움 — 사내 설문 결과 비엔지니어 직원의 18%만 생성형 AI 도구를 업무에 사용해 봄, 매니저 태도는 3분할(열성/중립/조용한 저항), 시니어 크리에이티브 디렉터 3명이 역할 대체에 대한 우려를 제기해 크리에이티브 조직 전반으로 확산. 변화관리, 교육 인프라, 업무 형태가 변하는 기능의 역할 재설계, 인재 전략(신규 역할, 진화 역할, 축소 가능 역할), 문화 및 내러티브, 임팩트 측정을 다뤄야 함. Helena는 아키텍처, 시퀀싱, 실제 마찰이 어디서 발생할지, 카테고리 차원의 실존적 전환의 인간적 측면을 어떻게 항해할지에 대한 전략적 관점이 필요.`
      }
    },

    caseStudy: {
      beginner: {
        en: `Meridian Group is a marketing and media company. It has 500 employees and has been around for 40 years.

The situation:
- Only 18% of non-engineering employees have tried AI tools
- Some managers do not want to change
- Some creative people are worried they will lose their jobs
- The CEO wants all 500 employees using AI within one year

You must plan training, role changes, and a clear message to keep people calm and motivated.

You have one hour to prepare for the meeting with the CEO.`,
        ko: `Meridian Group은 마케팅·미디어 회사로 직원 500명, 업력 40년입니다.

상황:
- 비엔지니어 직원 중 AI 도구를 써본 사람은 18%뿐
- 일부 매니저는 변화를 원하지 않음
- 일부 크리에이티브 직원은 일자리 상실을 우려
- CEO는 1년 내 500명 모두 AI를 쓰기를 원함

교육, 역할 변화, 직원을 안정시키고 동기 부여할 명확한 메시지를 계획해야 합니다.

CEO 미팅까지 한 시간 — 준비해야 합니다.`
      },
      intermediate: {
        en: `Meridian Group, founded in 1985, has grown into a 500-person marketing and media services company serving Fortune 1000 clients. The work spans brand strategy, creative production, digital media, and analytics.

CEO Helena Voss has made a board-level commitment: within twelve months, AI fluency is a baseline expectation for every employee, and the company shows measurable productivity and quality gains.

Current state:
- 18% of non-engineering employees have used a generative AI tool at work
- Manager attitudes split roughly: one-third enthusiastic, one-third neutral, one-third quietly resistant
- Three senior creative directors have raised concerns about job displacement, and the worry has spread
- No formal AI training infrastructure exists; no clear policy on which tools are approved

The transformation has five dimensions that need your point of view: change management strategy, training infrastructure for non-technical staff, role redesign where AI changes the work shape, talent strategy (new roles, evolving roles, shrinking roles), and a culture narrative that addresses fear honestly without minimizing it.

You have one hour to prepare your recommendation.`,
        ko: `Meridian Group은 1985년 설립, 500명 규모로 성장한 마케팅·미디어 서비스 회사로 Fortune 1000 고객을 대상으로 브랜드 전략, 크리에이티브 제작, 디지털 미디어, 애널리틱스 업무를 수행.

CEO Helena Voss의 이사회급 약속: 12개월 내 AI 유창성을 전 직원 기본 기대치로 만들고, 측정 가능한 생산성·품질 향상 시연.

현 상태:
- 비엔지니어 직원의 18%만 업무에 생성형 AI 사용 경험
- 매니저 태도 3분할: 열성 1/3, 중립 1/3, 조용한 저항 1/3
- 시니어 크리에이티브 디렉터 3명이 일자리 대체 우려 제기 → 조직 전반 확산
- 공식 AI 교육 인프라 없음, 승인된 도구 정책 없음

다섯 차원에 대한 관점이 필요: 변화관리 전략, 비기술 직원용 교육 인프라, 업무 형태가 변하는 영역의 역할 재설계, 인재 전략(신규/진화/축소 역할), 두려움을 솔직히 다루되 축소하지 않는 문화 내러티브.

한 시간 — 권고안 준비.`
      },
      advanced: {
        en: `Meridian Group (privately held, founded 1985) operates a 500-FTE marketing and media services platform serving Fortune 1000 clients across four interconnected business lines: brand strategy and consulting, creative production (design, copy, video), digital media planning and buying, and marketing analytics. Annual revenue is approximately $180M with high-single-digit organic growth and meaningful margin pressure from in-housing trends and AI-native competitors.

CEO Helena Voss, fifteen months into her tenure after joining from a tech-services firm, has made a board-level commitment that defines the next chapter of the company: within twelve months, AI fluency is a baseline expectation for every employee, and the company demonstrates measurable productivity and quality gains across all four business lines. The strategic rationale is dual — defense against AI-native competitors winning on price and speed, and offense by repositioning Meridian as the agency that combines human creative judgment with machine scale.

The current state is more fragile than leadership talking points suggest. An internal survey conducted six weeks ago revealed that 18% of non-engineering employees had used a generative AI tool in their work in the prior thirty days; usage was concentrated in younger employees and in a few self-organized pockets. Manager attitudes broke down into rough thirds: enthusiastic adopters experimenting on their own, neutral pragmatists waiting for direction, and quietly resistant managers whose teams have not been exposed to AI in any structured way. Three senior creative directors — collectively responsible for two of the firm's largest client relationships — have raised concerns in leadership meetings about displacement risk in creative roles, and these concerns have leaked into the broader creative organization, where Slack discussions and informal conversations have grown anxious.

There is no formal training infrastructure, no approved-tools policy, no governance on data handling with external AI providers, and no clear narrative from leadership about what AI means for the company's people. The transformation must operate simultaneously on six fronts: change management and narrative, training infrastructure for a non-technical workforce, role redesign across functions where AI fundamentally changes the work shape, talent strategy covering new roles to create and existing roles to evolve or sunset, tooling and governance, and measurement of business impact. Helena wants your strategic point of view on architecture, sequencing, the locations of real friction, and the human dimensions of leading a workforce through what is fundamentally an existential category transition.`,
        ko: `(고급 — 영문 위주)

Meridian Group(비상장, 1985년 설립, 500 FTE) — 브랜드 전략/컨설팅, 크리에이티브 제작(디자인/카피/영상), 디지털 미디어 플래닝·바잉, 마케팅 애널리틱스 4개 사업 라인, 연매출 약 $180M, 한 자릿수 후반 유기 성장, 인하우스화와 AI 네이티브 경쟁사로부터의 마진 압박. CEO Helena Voss(테크 서비스 출신, 부임 15개월)의 이사회급 약속: 12개월 내 AI 유창성을 전 직원 기본 기대치로 만들고 측정 가능한 생산성·품질 향상을 4개 사업 라인 전반에 시연. 전략 근거 이중 — AI 네이티브 경쟁사 방어 + 인간의 창의적 판단과 기계의 스케일을 결합한 에이전시로 재포지셔닝. 실상은 리더십 토킹 포인트보다 취약 — 6주 전 사내 설문상 비엔지니어 직원의 18%만 지난 30일 내 생성형 AI 도구 업무 사용(주로 젊은 층과 일부 자생 그룹에 집중). 매니저 태도 3분할(자발적 시도/중립 대기/조용한 저항). 시니어 크리에이티브 디렉터 3명(2대 고객 관계 책임)이 크리에이티브 역할 대체 리스크 우려 제기 → 슬랙·비공식 대화로 확산. 공식 교육 인프라 없음, 승인 도구 정책 없음, 외부 AI 제공자와의 데이터 거버넌스 없음, 리더십의 명확한 내러티브 없음. 여섯 전선 동시 진행 필요: 변화관리/내러티브, 비기술 인력 교육 인프라, 업무 형태가 근본적으로 변하는 기능의 역할 재설계, 신규/진화/축소 역할 인재 전략, 도구/거버넌스, 사업 임팩트 측정.`
      }
    },

    questions: {
      beginner: [
        {
          q: "How do we start when most employees have never used AI?",
          modelAnswer: "We should start very small and very simple. First, we pick three or four basic AI tools and approve them officially. Second, we give every employee a one-hour live class with simple examples — like writing emails, summarizing documents, and creating first drafts. Third, we ask each team to find one task they do every week and try AI on it. Small wins build confidence. We should not push hard at the start. We should help people feel curious, not afraid.",
          tips: [
            "Start with 'small and simple'",
            "Use 'first, second, third' for structure",
            "Show empathy ('curious, not afraid')"
          ]
        },
        {
          q: "Some employees are afraid AI will take their jobs. What do we say?",
          modelAnswer: "Their fear is real and we should not say it is wrong. We should be honest. Some tasks will change. Some jobs will look different in two years. But we are not planning layoffs because of AI. We are planning to help every person learn new skills. The company that uses AI well will grow, and growing companies hire more people, not fewer. We will support every employee with training and time to learn. If someone's role changes a lot, we will help them move to a new role.",
          tips: [
            "Validate the fear before answering",
            "Be honest — do not over-promise",
            "Offer concrete support (training, time, role transition)"
          ]
        },
        {
          q: "How do we know if our AI plan is working?",
          modelAnswer: "We should look at three simple measures. First, how many employees are using AI tools each week. We can check this from the tool dashboards. Second, how much faster or better our work is — for example, how many hours we save on a typical project. Third, how employees feel about AI. We can ask in a short monthly survey. We should look at these every month for the first six months. If something is not working, we change it fast.",
          tips: [
            "Three simple measures",
            "Mix usage, output, and feeling",
            "Show iteration mindset"
          ]
        }
      ],
      intermediate: [
        {
          q: "Walk me through the change management strategy. Where do we start?",
          modelAnswer: "I'd anchor change management on three sequenced moves over the first ninety days. First, leadership alignment and narrative: you and the executive team commit to a shared message — what AI means for Meridian, what we're asking of every employee, and what we promise in return. We rehearse this so we're consistent across town halls and one-on-ones. Second, lighthouse pilots: we pick three or four teams across different functions where leaders are genuinely enthusiastic, give them dedicated tooling and coaching, and create case studies of measurable impact in sixty days. These become the proof points that travel. Third, manager capability: we run mandatory workshops for all sixty people managers on how to lead AI adoption in their teams — not how to use AI, but how to coach, set expectations, and address fear honestly. The order matters. Without narrative, the pilots feel arbitrary. Without pilots, the narrative is empty. Without manager capability, neither one scales beyond the pilot teams.",
          tips: [
            "Three sequenced moves with rationale for order",
            "Use lighthouse pilot framing — concrete and scalable",
            "Distinguish 'using AI' from 'leading AI adoption' for managers",
            "Close with the sequencing rationale"
          ]
        },
        {
          q: "What does training look like for 500 non-technical employees? Workshops won't be enough.",
          modelAnswer: "You're right — one-shot workshops produce one-week behavior change. I'd recommend a three-layer training architecture. Layer one, foundational fluency: every employee completes a four-hour self-paced course in the first six weeks covering what generative AI is, what it's good and bad at, our approved tools, and our data policies. Layer two, applied workflows: function-specific modules — eight hours over four weeks — where employees learn AI patterns for their actual work. Copywriters get prompts and review patterns for ideation and drafting; analysts get patterns for synthesizing research and structuring analysis; account managers get patterns for meeting prep and client communication. Layer three, ongoing practice: weekly thirty-minute team sessions where members share what they tried, what worked, and what didn't. The first two layers are infrastructure; the third is what actually produces behavior change. Total cost is roughly $200,000 in build and licensing, plus the time investment, which is significant. Without layer three, the first two are wasted.",
          tips: [
            "Acknowledge the limitation of workshops",
            "Three-layer architecture with specific duration and content",
            "Function-specific examples — shows you understand the work",
            "Close with which layer matters most and why"
          ]
        },
        {
          q: "How do we redesign roles where AI fundamentally changes the work? Take copywriting as an example.",
          modelAnswer: "Copywriting is a good case because the work shape is changing fast. The old role: take a brief, generate ideas, draft copy, iterate with creative director, finalize. The new role: take a brief, generate twenty draft directions with AI in an hour, curate the strongest three based on judgment and brand voice, then write the final version with AI as collaborator, focusing human effort on the moments that demand taste and originality. The work doesn't get smaller; it gets denser and more judgment-heavy. Three implications for role design. First, we update the job description to reflect AI-assisted output expectations — both volume and quality. Second, we elevate the skill profile we hire for: judgment, brand voice, editorial taste become more important than raw output speed. Third, we restructure the team — fewer junior writers doing first drafts, more mid-level writers doing curation and refinement. This is a real change in career path and we have to be honest about it. Some people who were great at the old role will struggle with the new one. We should invest heavily in upskilling and be willing to support transitions for people for whom the new shape isn't a fit.",
          tips: [
            "Walk through old vs new shape concretely",
            "Three implications for role design",
            "Acknowledge honestly that not everyone will fit the new role",
            "Use precise language: 'denser and more judgment-heavy', 'curation and refinement'"
          ]
        },
        {
          q: "The senior creative directors are openly worried. How do you handle that specifically?",
          modelAnswer: "Their concern is the highest-stakes issue we have, and we can't resolve it by sending a memo. I'd recommend three actions in the next two weeks. First, you personally meet with each of the three directors individually — not a group meeting, not delegated. You acknowledge that their worry is legitimate, share what you know and don't know about how this will play out, and ask what would help them lead through this change. Second, we co-design the AI strategy for the creative organization with them, not for them. Their judgment about what AI can and can't do in creative work is more accurate than anyone's, and putting them in the architect role transforms them from skeptics into co-owners. Third, we commit publicly that no role reductions in the creative organization will happen in the next twelve months as a direct result of AI — that's the window we need to learn together. We'll review honestly after that. The risk of not doing this is that three senior leaders quietly become organizational obstacles, and the rest of the creative org takes their cue from them. The investment in addressing this directly is small. The cost of not addressing it is potentially catastrophic.",
          tips: [
            "Acknowledge the stakes upfront",
            "Three concrete actions with specific people and timing",
            "Reframe skeptics as co-owners — shift the dynamic",
            "Quantify cost of inaction",
            "Use 'co-design with them, not for them' — precise framing"
          ]
        },
        {
          q: "How do we measure impact in a way that holds us accountable without being naive about second-order effects?",
          modelAnswer: "Measurement is harder than it looks because the easy metrics — tool usage, hours saved — don't capture business impact, and the right metrics take time to manifest. I'd recommend a balanced scorecard with four categories reviewed quarterly. First, adoption metrics: weekly active usage of approved tools by function, completion of training milestones, and the percentage of teams running regular AI practice sessions. These are leading indicators. Second, productivity metrics: project cycle times, output volume per FTE, and time spent on high-judgment versus mechanical work. We need a baseline before we change anything to make comparisons valid. Third, quality and client outcomes: client satisfaction scores, win rates on new business, and quality assessments by senior leaders on a sample of work. These are the metrics that actually matter to the business. Fourth, employee experience: confidence in using AI, perceived impact on their work, and concerns about job security — measured quarterly. Tracking the fourth category honestly is what keeps us from celebrating productivity gains while morale collapses. We should commit to publishing the full scorecard internally — transparency is what makes the measurement system credible.",
          tips: [
            "Acknowledge the measurement challenge upfront",
            "Four-category balanced scorecard with named purpose for each",
            "Distinguish leading and lagging indicators",
            "Include the employee experience metric — sophisticated",
            "Commit to transparency — what gives the system credibility"
          ]
        }
      ],
      advanced: [
        {
          q: "Give me your strategic point of view on how to architect this transformation. What's the design that maximizes our odds of succeeding?",
          modelAnswer: "My strategic view is that this is fundamentally a leadership and culture transformation that happens to involve technology, not a technology rollout that requires change management. The architecture I'd recommend has four interlocking layers, sequenced deliberately. The foundation layer is leadership alignment and narrative — without it, every other layer collapses into mixed messages and quiet resistance. This means you, your executive team, and your top thirty leaders commit to a shared, honest narrative about what AI means for Meridian, what we're asking of every person, and what we promise. The narrative cannot be 'AI is exciting, embrace the future' — it must address displacement fear directly and credibly. The second layer is lighthouse pilots — three or four teams across functions where leaders are genuinely enthusiastic and we invest disproportionate coaching, tooling, and visibility. These produce the credible case studies that travel internally and externally. The third layer is infrastructure: training, governance, tools, role design templates, and manager capability. This is the unglamorous work that makes the transformation scale beyond pilots. The fourth layer is talent strategy — explicit decisions about which roles we'll grow into, which we'll evolve, which will shrink — and the upskilling and transition programs that match. We sequence layers one and two first in months one through three, layer three in months two through nine, and layer four explicitly only after layers one through three are in motion, because the credibility to make hard talent calls comes from the leadership and trust built by the earlier work. The biggest risk in this architecture is layer four leakage upward — if you start talking about role reductions in month two before the trust foundation exists, the entire transformation poisons. The biggest opportunity is layer two execution — if the lighthouse pilots produce visible, undeniable productivity and quality gains, internal demand for adoption accelerates dramatically and the rest of the work becomes pull rather than push.",
          tips: [
            "Reframe as leadership/culture transformation, not technology",
            "Four interlocking layers with explicit sequencing rationale",
            "Name the biggest risk and biggest opportunity",
            "Use precise framing: 'pull rather than push'",
            "Address the displacement narrative directly"
          ]
        },
        {
          q: "Talk to me about the talent strategy in detail. Which roles do we grow, which evolve, which shrink — and how do we handle it humanely?",
          modelAnswer: "The talent strategy needs to operate honestly on three planes simultaneously, because pretending otherwise destroys trust and credibility. Plane one, roles we grow: AI fluency raises the value of roles centered on judgment, taste, client relationships, and orchestration of AI-augmented work. Creative direction, senior strategy, account leadership, and analytics leadership all become more valuable, not less. We should signal this clearly through compensation, promotion velocity, and hiring focus. Plane two, roles that evolve: most production roles — junior copywriters, designers, analysts, media planners — see their work shape change substantially. The work doesn't disappear but it becomes denser, more judgment-heavy, and requires AI fluency as table stakes. We commit to investing heavily in upskilling: dedicated training time, paired learning, and clear new role expectations. We commit publicly to no AI-driven layoffs in these categories for at least twelve months while people have a fair chance to evolve. Plane three, roles that shrink: some pockets of mechanical production work will need fewer people in eighteen to thirty-six months — high-volume basic copywriting, first-pass design production, routine media operations. We should be honest about this internally, not pretend it isn't happening. The humane execution is to slow hiring in these categories now, support voluntary transitions into evolving roles through retraining, and where role reductions become necessary later, do them with generous severance, dedicated outplacement, and personal leadership involvement. The principle to guide all three planes is honesty over comfort. Employees can tell when leadership is dodging the hard parts, and the dodge destroys trust faster than the hard truth. The trade-off is that being honest about plane three creates short-term anxiety that we have to manage actively. The alternative — leaving plane three unsaid until it becomes a layoff event in month eighteen — produces vastly more damage. We do this with care and we do it now.",
          tips: [
            "Three planes with explicit honesty about the third",
            "Concrete examples in each plane",
            "Name the principle ('honesty over comfort')",
            "Acknowledge the trade-off and choose it deliberately",
            "Address the humane execution mechanics for plane three"
          ]
        },
        {
          q: "What's the cultural narrative you want me telling, and how do we hold it when things get hard in month six?",
          modelAnswer: "The narrative needs three properties to hold up over a difficult twelve months: it has to be true, it has to be specific, and it has to acknowledge fear honestly. The version I'd build for you sounds like this. 'We are forty years into building a company that helps the world's most demanding brands tell stories that work. The tools we use to do that work are changing more in the next three years than they have in the last thirty. We have a choice. We can resist that change, watch AI-native competitors take share on price and speed, and slowly lose relevance. Or we can be the company that combines the human judgment and craft that took us forty years to build with the scale and speed that AI now makes possible. We are choosing the second path. What that means for every one of us: AI fluency becomes part of how we work, not a side project. We are investing significantly in training, in time to learn, and in evolving how our roles work. Some of our work will change shape — in many cases, become more judgment-heavy and more creative, not less. Some pockets of our work will eventually need fewer people; we are being honest about that now and will support transitions when the time comes, with the same generosity that has always defined how we treat people. What we promise: leadership is in this with you. We are learning alongside you. We will be honest about what we know and what we don't. And we will not let the people who built this company become collateral damage in our adaptation to the future.' Now — the hard part is holding this in month six when a lighthouse pilot has underperformed, when a creative director has resigned in frustration, and when the broader organization is asking whether the transformation is working. The discipline is to update tactics openly while holding the narrative steady. Show what's working, acknowledge what isn't, share what we're changing, and keep returning to the through-line: we're building the version of Meridian that wins in the new category, with the people who've made it great. The leaders who succeed at this kind of transition are the ones who can stay in the discomfort of partial progress without flipping to false confidence or fatalistic retreat. That's what your team needs from you in month six.",
          tips: [
            "Write the actual narrative — model the words for the CEO",
            "Three properties: true, specific, honest about fear",
            "Address the month-six failure mode explicitly",
            "Use precise framing: 'update tactics while holding the narrative steady'",
            "Close with what leadership demands of the CEO emotionally"
          ]
        }
      ]
    },

    glossary: {
      "AI fluency": "AI 활용 능숙도",
      "generative AI": "생성형 AI",
      "AI adoption": "AI 도입/채택",
      "AI transformation": "AI 전환",
      "AI-native competitor": "AI 네이티브 경쟁사",
      "in-housing": "인하우스화 (외주 → 내재화)",
      "change management": "변화관리",
      "lighthouse pilot": "등대 파일럿 (전사 확산용 시범 사례)",
      "manager enablement": "매니저 역량 강화",
      "role redesign": "역할 재설계",
      "upskilling": "스킬 향상 (현재 역할 강화)",
      "reskilling": "재교육 (다른 역할로 전환)",
      "displacement risk": "(일자리) 대체 리스크",
      "voluntary transition": "자발적 직무 전환",
      "approved tools policy": "승인된 도구 정책",
      "data governance": "데이터 거버넌스",
      "self-paced course": "자기 주도 학습 과정",
      "applied workflow": "실무 적용 워크플로",
      "balanced scorecard": "균형 성과표",
      "leading indicator": "선행 지표",
      "lagging indicator": "후행 지표",
      "weekly active usage": "주간 활성 사용 (WAU)",
      "FTE": "Full-Time Equivalent, 정규직 환산",
      "town hall": "전사 미팅 (타운홀)",
      "talent strategy": "인재 전략",
      "career path": "커리어 경로",
      "judgment-heavy": "판단력 비중이 높은",
      "table stakes": "기본 요건 (참가 자격)",
      "through-line": "관통 주제, 일관된 메시지",
      "psychological safety": "심리적 안전감"
    }
  },
  {
    id: 'performance-review-01',
    advisorNote: {
      target: "스타트업 HR 리드 (50인 전후)",
      points: [
        "등급제를 도입하는 순간 등급이 대화를 대체합니다. 50인 전후라면 서술형 평가 + 캘리브레이션 세션 조합을 먼저 시도해 보세요.",
        "캘리브레이션(리더들이 모여 평가 눈높이를 맞추는 세션)은 평가 공정성의 핵심 장치입니다. 첫 회는 HR이 퍼실리테이션 스크립트를 준비해야 산으로 가지 않습니다.",
        "평가 결과 통보 면담은 리더 역량이 가장 크게 드러나는 순간입니다. 통보 전 리더 대상 30분 트레이닝만으로도 분쟁이 크게 줄어듭니다."
      ],
      checklist: [
        "평가 목적 합의 (보상 결정 vs 성장 지원)",
        "캘리브레이션 세션 설계와 퍼실리테이터 지정",
        "리더 대상 평가 면담 가이드 배포",
        "평가 후 이의 제기 절차 마련"
      ]
    },
    title: 'Redesigning the Performance Review System',
    titleKo: '성과평가 제도 재설계',
    category: 'Performance Evaluation',
    estimatedMinutes: 20,

    briefing: {
      beginner: {
        en: `You are an HR Business Partner at an enterprise software company with 380 employees. The current performance review uses 1 to 5 ratings with a fixed distribution. The CEO wants to change it because it causes problems and many people leave after each review cycle.`,
        ko: `당신은 380명 규모 엔터프라이즈 소프트웨어 회사의 HRBP입니다. 현재 평가는 1~5점 척도에 고정 분포를 사용합니다. 문제를 일으키고 평가 사이클마다 많은 사람이 떠나기 때문에 CEO는 변화를 원합니다.`
      },
      intermediate: {
        en: `You are Ji-won Park, HRBP at Helix Systems, a 380-person enterprise software company. The current performance review uses a 1-to-5 rating with a forced distribution: 10% bottom, 20% below average, 40% meets, 20% exceeds, 10% top. The system is causing serious problems — political gaming, calibration takes four weeks, and attrition spikes 40% in the eight weeks after each cycle. CEO David Roh wants reform and has asked you to present options with a recommendation in next Monday's leadership meeting.`,
        ko: `당신은 380명 규모 엔터프라이즈 소프트웨어 회사 Helix Systems의 HRBP인 Ji-won Park입니다. 현 평가는 1~5점 척도에 강제 분포(하위 10%, 기준 미달 20%, 충족 40%, 기대 초과 20%, 최고 10%)를 사용. 시스템이 심각한 문제를 야기 — 정치적 게이밍, 4주 걸리는 캘리브레이션, 매 사이클 후 8주간 이직률 40% 급증. CEO David Roh가 개혁을 원하며 다음 주 월요일 리더십 미팅에서 권고안과 함께 옵션을 발표하라고 지시.`
      },
      advanced: {
        en: `You are Ji-won Park, HRBP at Helix Systems (380 FTEs, Series D enterprise software, ~$95M ARR). The legacy performance review architecture is producing measurable institutional damage. The 1-to-5 rating with mandated 10/20/40/20/10 distribution was adopted in 2018 to drive accountability and differentiation; in execution it has become a quarterly source of political gaming, manager exhaustion, and post-cycle attrition spikes. Calibration consumes four weeks of leadership time across two rounds. Bottom-band ratings — capped at the mandated 10% — frequently land on competent employees whose teams happened to be strong, generating perceived unfairness and triggering voluntary departures. Attrition in the eight-week post-cycle window runs 40% above baseline, disproportionately concentrated in mid-level engineering and product, including a meaningful share of regretted losses. CEO David Roh has commissioned a full redesign and wants three viable options presented with a recommendation: pure ratings-free (developmental conversations only), simplified scale (three bands without forced distribution), and frequency change (move from annual to twice-yearly with lighter touch). The leadership team is divided — finance and operations want preserved differentiation for compensation defensibility; engineering and product want abolition. You have one week to prepare the strategic case.`,
        ko: `당신은 Helix Systems(380 FTE, 시리즈 D 엔터프라이즈 소프트웨어, ARR 약 $95M)의 HRBP인 Ji-won Park입니다. 레거시 성과평가 아키텍처가 측정 가능한 제도적 손상을 야기 중. 2018년 책임성과 차별화 도모를 위해 도입된 1~5점 척도 + 강제 분포(10/20/40/20/10)가 실행상 분기별 정치적 게이밍, 매니저 소진, 사이클 후 이직 급증의 원천이 됨. 캘리브레이션은 2라운드에 걸쳐 리더십 시간 4주 소모. 강제 10% 상한으로 하위 등급이 강한 팀의 유능한 직원에게 자주 부여 → 불공정 인식 → 자발적 이탈. 사이클 후 8주 이직률이 기준선 대비 40% 상승, 특히 중간급 엔지니어링·프로덕트에 집중되며 후회되는 손실 비중도 의미 있음. CEO David Roh가 전면 재설계를 지시하며 세 가지 실행 가능 옵션을 권고와 함께 발표하라고 요청: 순수 무평정(개발 대화만), 단순화 척도(강제 분포 없는 3단계), 빈도 변경(연 1회 → 반기 가벼운 터치). 리더십 팀 분열 — 재무·오퍼레이션은 보상 방어를 위한 차별화 유지 원함, 엔지니어링·프로덕트는 폐지 원함. 일주일 — 전략적 케이스 준비.`
      }
    },

    caseStudy: {
      beginner: {
        en: `Helix Systems is an enterprise software company with 380 employees.

The current performance review:
- Score from 1 to 5 (5 is the best)
- Fixed distribution: 10% must be lowest, 10% must be top
- One big review every year
- Calibration meetings take 4 weeks

The problems:
- Managers play politics to protect their team
- Many fights about who gets each rating
- After the review, ~40% more employees leave
- Top engineers feel unfairly judged

The CEO wants three options for a new system and your honest recommendation.`,
        ko: `Helix Systems는 직원 380명의 엔터프라이즈 소프트웨어 회사입니다.

현 성과 평가:
- 1~5점 (5점이 최고)
- 강제 분포: 10%는 최하위, 10%는 최상위
- 연 1회 큰 평가
- 캘리브레이션 회의 4주 소요

문제:
- 매니저가 자기 팀을 지키려고 정치를 함
- 누가 어떤 점수를 받을지 많은 싸움
- 평가 후 이직률 약 40% 증가
- 우수 엔지니어가 부당함을 느낌

CEO는 새 시스템 세 가지 옵션과 당신의 솔직한 권고를 원합니다.`
      },
      intermediate: {
        en: `Helix Systems, founded in 2014, has grown to 380 employees building enterprise software for financial services clients. The current performance review system was put in place in 2018:

- 1-to-5 rating scale
- Forced distribution: 10% / 20% / 40% / 20% / 10%
- Annual cycle with calibration sessions across leadership
- Direct linkage to merit increases and bonus

The problems are now severe:
- Calibration takes 4 weeks every cycle
- Political gaming: managers protect favorites, push others to the bottom
- The 10% bottom band frequently lands on competent people whose teams happened to be strong
- Attrition in the 8 weeks post-cycle runs 40% above baseline
- A meaningful share of those exits are regretted losses
- Manager satisfaction with the process is at 22% in the most recent survey

CEO David Roh wants you to present three options at next Monday's leadership meeting:
1. Ratings-free: developmental conversations only, no formal scores
2. Simplified scale: three bands without forced distribution
3. Frequency change: twice-yearly cycles with lighter weight

The leadership team is split: finance and operations want to keep differentiation for comp; engineering and product want abolition. You need a recommendation that holds up under cross-functional pushback.`,
        ko: `Helix Systems는 2014년 설립, 380명 규모로 성장한 금융 서비스 고객 대상 엔터프라이즈 소프트웨어 회사. 현 평가 시스템은 2018년 도입:

- 1~5점 척도
- 강제 분포: 10% / 20% / 40% / 20% / 10%
- 연간 사이클 + 리더십 캘리브레이션 세션
- 연봉 인상 및 보너스 직결

현 문제 심각:
- 사이클마다 캘리브레이션 4주 소요
- 정치적 게이밍: 매니저가 측근 보호, 타인을 하위로 밀어냄
- 강한 팀의 유능한 직원이 자주 하위 10%로 분류
- 사이클 후 8주간 이직률 기준선 대비 40% 상승
- 그중 의미 있는 비중이 후회되는 손실
- 최근 설문상 매니저의 프로세스 만족도 22%

CEO David Roh가 다음 주 월요일 리더십 미팅에 세 옵션 발표를 요청:
1. 무평정: 개발 대화만, 공식 점수 없음
2. 단순화 척도: 강제 분포 없는 3단계
3. 빈도 변경: 반기 사이클, 가벼운 비중

리더십 분열: 재무·오퍼레이션은 보상용 차별화 유지 희망, 엔지니어링·프로덕트는 폐지 희망. 부서 간 반론에도 견딜 권고가 필요.`
      },
      advanced: {
        en: `Helix Systems (Delaware C-corp, founded 2014) is a 380-FTE Series D enterprise software company at approximately $95M ARR, serving financial services clients with workflow automation and compliance software. The 1-to-5 rating instrument with mandated 10/20/40/20/10 forced distribution was adopted in 2018 by the prior HR leader to drive accountability and create defensible differentiation for compensation decisions. Six years later, the institutional damage is measurable and accelerating.

Process cost is significant: each cycle consumes approximately four weeks of leadership calendar time across two calibration rounds, plus an estimated 1,200 manager hours in preparation and conversation. Political gaming has become endemic — managers learn to overrate their entire team in round one knowing that calibration will compress everything, build coalitions in advance, and trade ratings across teams. Bottom-band assignment is the most damaged mechanic: with the mandated 10% floor, strong teams must surface a bottom rating that frequently lands on a genuinely competent contributor whose only failing was working alongside even higher performers. Voluntary attrition in the eight-week post-cycle window runs at 40% above baseline, concentrated in mid-level engineering and product where individual leverage is highest. Exit interview data over the past two cycles shows roughly 35% of these departures qualify as regretted losses by current management judgment. Manager satisfaction with the instrument sits at 22%; the same survey shows 71% of managers believing the system produces unfair outcomes for at least one person on their team annually.

CEO David Roh has commissioned a full redesign. He wants three substantive options presented with a recommendation. Option one: pure ratings-free model — managers and reports conduct twice-yearly developmental conversations using a structured template, with no formal scores produced; compensation decisions rely on manager judgment within calibrated bands. Option two: simplified three-band scale (strong, solid, developing) without forced distribution; annual cycle with lighter-weight calibration focused on top and bottom outliers only. Option three: frequency change to twice-yearly cycles with a four-band scale, no forced distribution, and calibration limited to bands one and four.

The leadership team is materially divided. Finance and operations argue that some preserved differentiation is necessary for compensation defensibility, audit trails, and the perception of fairness across the organization. Engineering and product argue that any rating system produces gaming and that the only honest approach is to eliminate scores entirely. You have one week to prepare a recommendation that you can defend under sustained cross-functional pushback at Monday's meeting.`,
        ko: `(고급 — 영문 위주)

Helix Systems(시리즈 D, 380 FTE, ARR 약 $95M, 금융 서비스 대상 워크플로/컴플라이언스 소프트웨어). 1~5 척도 + 강제 분포 10/20/40/20/10은 2018년 전임 HR 리더가 책임성 강화와 보상 의사결정의 방어 가능한 차별화 도모를 위해 도입. 6년 후 제도적 손상이 측정 가능하고 가속 중. 프로세스 비용 막대: 사이클당 2라운드 캘리브레이션에 리더십 캘린더 약 4주, 매니저 준비·대화에 약 1,200시간. 정치적 게이밍 만연 — 매니저는 1라운드에서 전 팀을 과대평가(캘리브레이션이 압축할 것 예상), 사전 연합 구축, 팀 간 점수 거래. 하위 등급 부여가 가장 손상된 메커니즘 — 강제 10% 하한으로 강한 팀이 진짜 유능한 기여자(주변이 더 뛰어났을 뿐)에게 하위 등급을 부여해야 함. 사이클 후 8주 자발적 이직률 기준선 대비 40% 상승, 개인 레버리지가 큰 중간급 엔지니어링/프로덕트에 집중. 퇴직 인터뷰 분석상 지난 두 사이클의 약 35%가 후회되는 손실. 매니저의 도구 만족도 22%, 같은 설문상 71%가 시스템이 매년 최소 1명에게 불공정한 결과를 만든다 응답. CEO David Roh가 전면 재설계 지시, 세 옵션을 권고와 함께 요구: (1) 순수 무평정 — 구조화 템플릿 기반 반기 개발 대화, 공식 점수 없음, 캘리브레이션 밴드 내 매니저 판단으로 보상 결정. (2) 단순화 3밴드(강함/견고/성장 중), 강제 분포 없음, 연간, 상하위 아웃라이어만 가벼운 캘리브레이션. (3) 빈도 변경 — 반기, 4밴드, 강제 분포 없음, 밴드 1·4만 캘리브레이션. 리더십 실질적 분열: 재무·오퍼레이션은 보상 방어, 감사 추적, 조직 전반 공정성 인식을 위한 차별화 유지 주장. 엔지니어링·프로덕트는 어떤 평정 시스템도 게이밍을 낳으니 점수를 완전히 제거하는 것이 유일한 정직한 접근이라 주장. 일주일 — 월요일 미팅에서 지속적 부서간 반론에도 방어 가능한 권고를 준비해야 함.`
      }
    },

    questions: {
      beginner: [
        {
          q: "Which of the three options do you recommend?",
          modelAnswer: "I recommend the second option: a simplified three-band scale without forced distribution. The first option is too big a jump for our company right now — we still need some structure for pay decisions. The third option keeps too much of the current pain. The second option removes the worst part — the forced distribution that creates fake unfairness — but still gives managers and HR clear categories for compensation and feedback. It is a real change but not a scary change.",
          tips: [
            "State the recommendation clearly first",
            "Briefly explain why the other options are weaker",
            "Use balanced language: 'real change but not a scary change'"
          ]
        },
        {
          q: "Will compensation still work without strict ratings?",
          modelAnswer: "Yes, but we need to be careful. Without a forced distribution, we should give managers a clear budget for raises and bonuses. We also need rules — for example, a top performer can get up to 15% raise and a bottom performer can get 0%. We use calibration meetings to check that managers are fair. The system can be simple but still serious. Most companies that removed forced ranking still have good compensation decisions.",
          tips: [
            "Confirm 'yes' with a clear 'but'",
            "Mention concrete tools (budget, rules, calibration)",
            "Reference outside examples (most companies)"
          ]
        },
        {
          q: "How do we tell the employees about this change?",
          modelAnswer: "I suggest a clear three-step plan. First, the CEO sends an email explaining why we are changing — focus on fairness and growth, not just process. Second, all managers attend a 90-minute training to learn the new system and how to talk to their team. Third, every manager has a one-on-one with each team member to explain what is changing for them personally. The whole plan takes about three weeks. Employees should not learn about the change from a memo only — they should hear it from their manager.",
          tips: [
            "Three clear steps with order",
            "Mention specific time (90 minutes, three weeks)",
            "Show empathy ('not from a memo only')"
          ]
        }
      ],
      intermediate: [
        {
          q: "Walk me through the three options. Which one do you recommend and why?",
          modelAnswer: "I'd recommend Option Two — the simplified three-band scale without forced distribution — with one important addition: continuous lightweight check-ins through the year. Let me walk through the trade-offs. Option One, ratings-free, sounds appealing but creates two problems. It removes the artifact compensation decisions need to defend, which lands the entire weight on manager judgment with insufficient calibration. And in our context, where finance and operations need defensible differentiation for audit and equity, this option won't survive cross-functional support. Option Three, frequency change, keeps the same fundamental mechanics that are causing damage; it just spreads them across more cycles. The political gaming and calibration burden actually increase. Option Two solves the root cause — the forced distribution — while preserving the categorical signal needed for compensation. The three bands carry real meaning: strong performance, solid performance, and developing performance. Calibration focuses only on top and bottom outliers, cutting leadership time by roughly 70%. The addition I'd make is a quarterly developmental check-in, structured and documented, so we don't lose the cadence advantage that Option Three was trying to capture. Net result: less gaming, less time burned, real differentiation for comp, better feedback cadence.",
          tips: [
            "State the recommendation up front, then justify",
            "Walk through trade-offs of all three options",
            "Add a hybrid element — shows synthesis",
            "Quantify the win ('70% less leadership time')",
            "Use precise phrases: 'categorical signal', 'root cause'"
          ]
        },
        {
          q: "Finance is going to push hard on losing the defensible differentiation. How do you answer them?",
          modelAnswer: "Finance's concern is legitimate and I'd address it directly rather than minimize it. The defensibility we need has two components: consistent application of criteria, and clear documentation of judgments. Forced distribution gave us the appearance of both, but actually delivered neither — managers gamed the distribution and documentation became checkbox compliance. The simplified three-band system can deliver real defensibility if we invest in three mechanisms. First, calibrated criteria: written behavioral anchors for each band, reviewed and refreshed annually with finance and operations input. Second, calibration sessions focused on outliers with documented rationale — fewer ratings to defend, but each one properly examined. Third, comp band logic that translates performance bands to merit and bonus ranges, so we have a clear audit trail. The net effect for finance is stronger defensibility, not weaker — because the documentation actually reflects substantive judgment instead of distribution gaming. I'd happily co-design these mechanisms with the finance team to make sure their needs are met before we present to the broader org.",
          tips: [
            "Validate the concern before answering",
            "Distinguish 'appearance' from 'actual' defensibility",
            "Three concrete mechanisms with named purpose",
            "Offer co-design — shows partnership orientation",
            "Use precise terms: 'behavioral anchors', 'checkbox compliance'"
          ]
        },
        {
          q: "What's the rollout plan and timeline?",
          modelAnswer: "I'd structure a six-month rollout in four phases. Phase one, weeks one through four: design finalization with cross-functional input — finance, engineering, product, and a manager advisory group of about ten people. Outputs are the band criteria, calibration protocol, comp band linkage, and communication materials. Phase two, weeks five through eight: manager enablement — half-day workshops by function, plus role-play sessions on giving developmental feedback without numerical ratings. Phase three, weeks nine through sixteen: first cycle execution under the new system, with HR business partners embedded in every calibration session and an outlier review by the executive team. Phase four, weeks seventeen through twenty-six: retrospective, refinement, and the second cycle launch with adjustments based on cycle-one learnings. Critical milestones: communications strategy approved by week three, first manager workshop by week six, first calibration sessions by week twelve, and a six-month review with measurable outcomes by week twenty-six. The biggest risk is rushing manager enablement to start the new cycle on the legacy timeline. We should be willing to delay the first cycle by four weeks if managers aren't ready — a poorly executed first cycle would damage the system's credibility permanently.",
          tips: [
            "Four phases with specific week ranges",
            "Outputs and milestones at each phase",
            "Identify the biggest risk and the trade-off response",
            "Show willingness to delay for quality"
          ]
        },
        {
          q: "How do we handle compensation linkage so this doesn't quietly become forced distribution by another name?",
          modelAnswer: "This is the most important design decision, because if we get it wrong the new system inherits the pathology of the old. The principle I'd anchor on is loose coupling: performance bands inform compensation decisions but don't determine them mechanically. Concretely, three design choices. First, each band has a comp range, not a comp number — strong might map to 5-15% merit, solid to 2-7%, developing to 0-3%. Within those ranges, manager judgment based on specific contribution shapes the actual number. Second, the bonus pool is allocated to teams as a budget; managers distribute within their team based on contribution, with HR reviewing distributions for sanity but not enforcing a curve. Third, equity refresh decisions are explicitly decoupled from the annual band — they're driven by retention risk, scope of role, and forward potential, reviewed twice yearly. The reason loose coupling matters is that the moment people experience comp as fully determined by band, the band becomes the only thing that matters and we recreate the gaming dynamics. By preserving meaningful manager discretion, we keep the developmental conversation honest and the comp decision substantive.",
          tips: [
            "Name the principle ('loose coupling') early",
            "Three concrete design choices",
            "Use comp ranges not numbers — sophisticated",
            "Explain why loose coupling matters mechanically",
            "End with the behavioral consequence of getting it right"
          ]
        },
        {
          q: "What metrics do we use to know whether the redesign is working?",
          modelAnswer: "I'd recommend a five-metric dashboard reviewed quarterly. First, post-cycle attrition: voluntary departures in the eight weeks after the cycle, compared to baseline and to current-state 40% spike. Target is to bring this back to baseline within two cycles. Second, regretted loss rate: of departures, how many would we have fought to keep — measured by direct manager judgment. Target is below 25%. Third, manager satisfaction with the process — current 22%, target above 60% within two cycles. Fourth, calibration time consumed — current four weeks of leadership time, target under one week. Fifth, perceived fairness: an employee survey question on whether their performance assessment was fair and useful, with baseline established pre-launch and target of meaningful improvement by cycle two. I'd also commit to a qualitative review by the executive team after each cycle — what worked, what didn't, what needs adjustment. The dashboard is for accountability; the qualitative review is for learning. Both matter.",
          tips: [
            "Five-metric dashboard with current state and target",
            "Mix quantitative and qualitative measurement",
            "Specific timeframe for improvement ('within two cycles')",
            "Distinguish accountability from learning"
          ]
        }
      ],
      advanced: [
        {
          q: "Give me your full strategic recommendation. Defend it against the strongest version of the objections from finance and from engineering.",
          modelAnswer: "My recommendation is Option Two — the simplified three-band scale without forced distribution, augmented with quarterly developmental check-ins — and I'd defend it against both flank attacks as follows. Finance's strongest objection is that without preserved differentiation we lose the defensible structure needed for compensation, equity allocation, and audit posture. The deepest version of this objection isn't about compliance — it's about cultural perception of fairness. If managers across the org distribute comp differently based on idiosyncratic judgment, perceived inequity rises and the system breaks. My response is that what we currently have is not defensible differentiation; it's enforced differentiation that managers and employees both know is theater. The three-band system with calibrated behavioral anchors, focused outlier calibration, and comp bands with manager discretion within them produces substantively stronger defensibility. The audit trail reflects real judgment rather than distribution gaming. The perceived fairness improves because the bottom band stops landing on competent people whose only sin was being on a strong team. I'd offer finance a co-design role on the band criteria and comp band logic. Engineering's strongest objection is that any rating system, no matter how lightweight, produces gaming and undermines the developmental conversation. The deepest version of this is that rating and development are fundamentally incompatible activities — when an employee knows their conversation will produce a label, they optimize for the label and the conversation loses honesty. My response acknowledges this is partially true. The way we manage it is structural separation: developmental check-ins quarterly with explicit no-rating norms, and the annual band assignment as a separate calibrated artifact that draws on the year's evidence but isn't produced in conversation. The quarterly conversations stay developmental because nothing labeled comes out of them. The annual band gets enough weight to drive compensation but isn't the focus of ongoing feedback. This won't fully satisfy the engineering critique, and I'd be honest about that — but full ratings-free creates worse problems than it solves at our size and stage. The recommendation, in short: simplified three-band scale, calibrated behavioral anchors, outlier-only calibration, quarterly developmental conversations that produce no scores, comp bands with manager discretion. The trade-off space is finite and this is the design that captures the most value while creating the least new damage.",
          tips: [
            "State the recommendation, then steelman both objections",
            "Use 'the deepest version of this objection' framing — sophisticated",
            "Acknowledge what each critique gets right",
            "Show structural design that addresses concerns",
            "Be honest about what your recommendation doesn't fully solve"
          ]
        },
        {
          q: "Talk to me about the change management. The leadership team is genuinely split and the org has been burned before. How do we land this?",
          modelAnswer: "Change management has to operate on two parallel tracks because we have two different audiences with different concerns. Track one is leadership consensus. Without alignment at the top, the rollout produces inconsistent messages, side conversations, and quiet sabotage by leaders who didn't get their way. I'd recommend a structured leadership working session of about four hours, facilitated, where we get the full debate on the table — finance and operations make their case, engineering and product make theirs, we work through trade-offs together, and we land on a single recommendation that everyone can defend. The output isn't unanimity — it's commitment to common execution despite residual disagreement. We document the decision and the dissent, and the executive team agrees to one voice externally. Track two is organization-wide narrative. The org has been burned by previous changes and will assume this is more of the same unless we earn credibility actively. I'd build the narrative on three commitments. First, honesty about why the current system is broken — specifically calling out the regretted losses and the gaming, not just bland process language. Second, transparency about what's changing and what isn't — we are not eliminating performance differentiation, we are eliminating forced distribution. Third, a public commitment that if cycle one doesn't show measurable improvement on the metrics we publish in advance, we revisit the design openly rather than defending it reflexively. The trust we earn from being willing to be measured against our own claims is what makes this change durable. The sequencing across tracks matters. Leadership alignment in weeks one through three, narrative launch in week four, then sustained communication through the first cycle. The visible test is whether everyone on the executive team — including the dissenters — actively defends the new system in their function. If they do, the change holds. If even one leader is visibly half-hearted, the people in their function will read that signal accurately and resist.",
          tips: [
            "Two parallel tracks named explicitly",
            "Distinguish unanimity from committed execution",
            "Three concrete narrative commitments",
            "Public commitment to revisit — earns credibility",
            "Close with the diagnostic ('visible test')"
          ]
        },
        {
          q: "What do you think about the deeper question — whether formal performance ratings should exist at all in modern knowledge work? Where do you actually land?",
          modelAnswer: "My honest view is that the question is being asked at the wrong level of abstraction, and the abolitionist framing — common in tech circles — is overconfident about the alternatives. The case for eliminating ratings has real merit: ratings reduce rich judgment to a number, they encourage gaming, they undermine developmental conversations, and they create perceived unfairness that ratings-based systems can never fully resolve. All of that is true. But the implicit alternative — that without ratings, manager judgment will be honest, calibrated, and equitably applied — is not supported by evidence. In companies that have gone fully ratings-free, two pathologies tend to emerge over time. Comp decisions become more opaque rather than more honest, and patterns of demographic inequity often increase because there's no calibrated signal to check manager judgment against. The deepest leaders I've seen think about this distinguish between the artifact of a rating and the practice of differentiated judgment. The artifact has real costs — gaming, reductive labels, performance theater. The practice is irreducibly necessary in any organization that wants to reward excellent contribution differently from average contribution. Where I land is that we should design for the smallest, lightest, most loosely coupled rating artifact that supports the practice of differentiated judgment, and we should invest disproportionately in the practice itself. That's calibrated criteria, manager capability, honest feedback culture, and structural separation between developmental and evaluative conversations. The three-band system I'm recommending isn't ideal in the abstract; it's the design that fits our organizational stage, leadership dynamic, and trust level. In five years, with a more mature manager bench and stronger feedback culture, we might reduce the artifact further. But starting there now would expose pathologies we're not ready to manage. The frame I'd offer is that ratings reform is a journey, not a single decision, and we should make the move that creates the most learning and the least damage at our current capability.",
          tips: [
            "Reframe the question — show you can see beyond the binary",
            "Steelman the abolitionist case before disagreeing",
            "Distinguish artifact from practice — central insight",
            "Connect philosophy to our specific organizational stage",
            "Close with a journey framing — sophisticated and humble"
          ]
        }
      ]
    },

    glossary: {
      "performance review": "성과 평가",
      "performance evaluation": "성과 평정",
      "performance rating": "성과 평정 점수",
      "forced distribution": "강제 분포 (예: 10/20/40/20/10)",
      "forced ranking": "강제 순위 평가",
      "rating scale": "평정 척도",
      "ratings-free": "무평정 (점수 없음)",
      "behavioral anchor": "행동 기준 (등급별 구체 행동 기술)",
      "calibration": "캘리브레이션 (평정 보정 회의)",
      "calibration session": "캘리브레이션 세션",
      "outlier review": "아웃라이어(상하위) 검토",
      "merit increase": "성과 기반 연봉 인상",
      "merit cycle": "연봉 인상 사이클",
      "comp band": "보상 밴드 (성과 등급별 보상 구간)",
      "loose coupling": "느슨한 연결 (성과-보상 간 약한 직접 종속)",
      "equity refresh": "스톡옵션 추가 부여",
      "regretted loss": "후회되는 손실 (떠나면 안 되는 사람의 이탈)",
      "voluntary attrition": "자발적 이직",
      "post-cycle attrition": "사이클 후 이직 (평가 직후 이탈)",
      "political gaming": "정치적 게이밍 (평가 시스템 악용)",
      "developmental conversation": "개발 대화 (성장 중심 피드백)",
      "audit trail": "감사 추적 (의사결정 기록)",
      "defensible differentiation": "방어 가능한 차별화 (감사·법적 방어가 가능한 평가 차이)",
      "manager enablement": "매니저 역량 강화",
      "manager advisory group": "매니저 자문 그룹",
      "manager discretion": "매니저 재량",
      "annual cycle": "연간 사이클",
      "twice-yearly": "반기 (연 2회)",
      "structural separation": "구조적 분리 (평가와 개발 대화 분리)",
      "steelman": "스틸맨 (반대 주장을 가장 강한 형태로 재구성)",
      "abolitionist": "(평정) 폐지론적"
    }
  },
  {
    id: 'compensation-strategy-01',
    advisorNote: {
      target: "스타트업 대표 · HR 리드",
      points: [
        "스타트업 보상의 본질은 현금 + 지분 믹스 설계입니다. 스톡옵션은 부여량보다 '이해시키는 커뮤니케이션'이 리텐션 효과를 좌우합니다 — 행사가, 베스팅, 예상 가치를 1페이지로 설명하세요.",
        "보상 밴드를 완전 공개할지, 범위만 공개할지는 조직 신뢰 수준에 따라 단계적으로 결정하세요. 공개 자체보다 '기준이 있다는 사실'이 중요합니다.",
        "핵심 인재 유지용 보상은 연봉 인상보다 리프레셔 스톡옵션(추가 부여)이 자금 효율이 높습니다."
      ],
      checklist: [
        "직군별 보상 밴드 초안 (시장 데이터 기반)",
        "스톡옵션 1페이지 설명 자료",
        "보상 공개 수준 로드맵",
        "핵심 인재 리텐션 보상 예산"
      ]
    },
    title: 'Redesigning Total Compensation for a High-Performance Culture',
    titleKo: '고성과 문화를 위한 보상 체계 재설계',
    category: 'Compensation & Rewards',
    estimatedMinutes: 25,

    briefing: {
      beginner: {
        en: `You are an HR Business Partner at a Series B startup with 180 employees. The company is losing top candidates because big tech offers higher pay and early startups offer more equity. Internal pay is also messy. The CEO wants a clear compensation plan.`,
        ko: `당신은 직원 180명의 시리즈 B 스타트업의 HRBP입니다. 회사는 빅테크의 높은 연봉과 초기 스타트업의 더 많은 지분 사이에 끼어 우수 후보를 놓치고 있습니다. 내부 보상도 정돈되지 않았습니다. CEO는 명확한 보상 계획을 원합니다.`
      },
      intermediate: {
        en: `You are Hannah Choi, HRBP at Vertex Labs, a 180-person Series B startup. You're losing offers two ways: big tech beats you on base salary by 20-30%, and early-stage startups beat you on equity upside. Internal pay equity is messy from years of band drift and inconsistent leveling. CEO Olivia Berg wants a coherent compensation philosophy and structure she can defend to the board, to candidates, and to current employees. She's asked you to lead the redesign and present a recommendation in three weeks.`,
        ko: `당신은 180명 규모 시리즈 B 스타트업 Vertex Labs의 HRBP인 Hannah Choi입니다. 양쪽으로 오퍼를 잃고 있음 — 빅테크는 베이스 연봉에서 20~30% 우위, 초기 스타트업은 지분 업사이드에서 우위. 내부 페이 이쿼티는 수년간의 밴드 드리프트와 일관성 없는 레벨링으로 엉망. CEO Olivia Berg는 이사회·후보자·현직원에게 방어 가능한 일관된 보상 철학과 구조를 원함. 3주 내 권고안 발표 요청.`
      },
      advanced: {
        en: `You are Hannah Choi, HRBP at Vertex Labs (180 FTEs, Series B, $22M ARR, 18 months from a likely Series C). Compensation has become a binding constraint on hiring quality and retention. Offer-acceptance data over the past two quarters shows you're losing 60% of senior engineering candidates and 45% of senior product candidates, with declines split roughly evenly between "cash compensation insufficient" and "equity opportunity insufficient." On the cash side, big tech and growth-stage scale-ups are pricing senior individual contributors at $230K-$280K base in your geographies; Vertex's current bands top out at $195K for the same levels. On the equity side, seed and Series A startups are offering 0.5%-1.5% post-Series-B-equivalent stakes to senior hires, while Vertex's standard grant for the same level is approximately 0.15%. Internal equity is also damaged: years of negotiation, off-cycle promotions, and counter-offers without disciplined band management have produced pay variance within the same level of up to 35%, creating fairness concerns that have surfaced in three exit interviews and one HR complaint. CEO Olivia Berg has commissioned a full redesign covering pay philosophy, market positioning, base-bonus-equity mix, refresh grant strategy, internal equity remediation, and pay transparency posture. You have three weeks to present a recommendation that holds up to board scrutiny.`,
        ko: `당신은 Vertex Labs(180 FTE, 시리즈 B, ARR $22M, 시리즈 C까지 약 18개월)의 HRBP인 Hannah Choi입니다. 보상이 채용 품질·리텐션의 결정적 제약이 됨. 지난 2분기 오퍼 수락 데이터상 시니어 엔지니어링 후보의 60%, 시니어 프로덕트 후보의 45%를 놓침. 거절 사유는 "현금 보상 부족"과 "지분 기회 부족"으로 대략 반반. 현금 측면 — 빅테크와 성장기 스케일업은 자사 지역 시니어 IC를 베이스 $230K~$280K로 책정, Vertex 현 밴드 상한 $195K. 지분 측면 — 시드/시리즈 A 스타트업은 시리즈 B 환산 0.5~1.5% 지분을 시니어 채용에 제시, Vertex 동급 표준 그랜트 약 0.15%. 내부 이쿼티도 손상 — 수년간 협상, 비정기 승진, 카운터 오퍼가 밴드 규율 없이 누적되어 동급 내 변동 최대 35%, 공정성 우려로 퇴직 인터뷰 3건·HR 컴플레인 1건 표출. CEO Olivia Berg가 전면 재설계 지시 — 보상 철학, 시장 포지셔닝, 베이스·보너스·지분 믹스, 리프레시 그랜트 전략, 내부 이쿼티 시정, 페이 투명성 자세. 3주 — 이사회 검토에 견딜 권고 준비.`
      }
    },

    caseStudy: {
      beginner: {
        en: `Vertex Labs is a Series B startup with 180 employees.

Hiring problems:
- Big tech companies pay 20-30% more for base salary
- Early startups offer more equity (more upside if it works)
- We are losing 60% of senior engineer offers

Internal problems:
- Same level employees can have very different pay (up to 35% gap)
- Some pay is too high because of past negotiations
- Some employees feel this is unfair
- A few have left because of it

The CEO wants:
- A clear compensation philosophy
- A simple pay structure
- A plan to fix unfair internal pay
- A decision on pay transparency

You have three weeks to prepare.`,
        ko: `Vertex Labs는 직원 180명의 시리즈 B 스타트업입니다.

채용 문제:
- 빅테크는 베이스 연봉 20~30% 더 지급
- 초기 스타트업은 더 많은 지분 제공 (성공 시 더 큰 업사이드)
- 시니어 엔지니어 오퍼의 60%를 놓침

내부 문제:
- 같은 레벨에 매우 다른 연봉 (최대 35% 격차)
- 과거 협상으로 일부 연봉이 너무 높음
- 일부 직원이 불공정하다고 느낌
- 몇몇은 이 때문에 떠남

CEO가 원하는 것:
- 명확한 보상 철학
- 단순한 보상 구조
- 불공정한 내부 보상 수정 계획
- 페이 투명성에 대한 결정

3주간 준비.`
      },
      intermediate: {
        en: `Vertex Labs, founded in 2021, is a 180-person Series B startup at $22M ARR, roughly 18 months from a likely Series C. Compensation has become the biggest constraint on hiring and retention.

Offer-acceptance data (past two quarters):
- Losing 60% of senior engineering candidates, 45% of senior product candidates
- Decline reasons split roughly evenly between "cash too low" and "equity too low"
- Big tech competitors paying $230K-$280K base for senior IC roles; Vertex bands top at $195K
- Seed and Series A startups offering 0.5-1.5% stakes to senior hires; Vertex standard at the same level is 0.15%

Internal pay equity is damaged:
- Years of negotiation and off-cycle promotions without disciplined band management
- Pay variance within the same level reaches 35%
- Three exit interviews and one HR complaint reference perceived pay unfairness

CEO Olivia Berg wants a full redesign covering six areas: compensation philosophy, market positioning, base-bonus-equity mix, refresh grant strategy, internal equity remediation, and pay transparency posture. The recommendation needs to be defensible to the board, to candidates, and to current employees.

You have three weeks.`,
        ko: `Vertex Labs는 2021년 설립, 180명 규모 시리즈 B 스타트업, ARR $22M, 시리즈 C까지 약 18개월. 보상이 채용·리텐션 최대 제약.

오퍼 수락 데이터(지난 2분기):
- 시니어 엔지니어링 60%, 시니어 프로덕트 45% 놓침
- 거절 사유: "현금 부족"과 "지분 부족"이 대략 반반
- 빅테크 경쟁사 시니어 IC 베이스 $230K~$280K, Vertex 밴드 상한 $195K
- 시드/시리즈 A 스타트업 시니어 채용에 0.5~1.5% 지분, Vertex 동급 표준 0.15%

내부 페이 이쿼티 손상:
- 수년간 협상·비정기 승진이 밴드 규율 없이 누적
- 동급 내 변동 최대 35%
- 퇴직 인터뷰 3건·HR 컴플레인 1건이 보상 불공정 언급

CEO Olivia Berg는 여섯 영역 전면 재설계를 원함: 보상 철학, 시장 포지셔닝, 베이스/보너스/지분 믹스, 리프레시 그랜트 전략, 내부 이쿼티 시정, 페이 투명성 자세. 이사회·후보자·현직원에게 방어 가능해야 함.

3주간 준비.`
      },
      advanced: {
        en: `Vertex Labs (Delaware C-corp, founded 2021) is a 180-FTE Series B startup at $22M ARR, growing 110% YoY, with a likely Series C raise approximately eighteen months out. Compensation has become a binding constraint on both quality of hire and retention of senior talent, and the diagnostic data forces an honest reckoning.

Offer-acceptance metrics from the past two quarters reveal a structural pricing problem. The company is losing 60% of senior engineering candidates and 45% of senior product candidates at offer stage, with decline rationale split roughly evenly between insufficient cash compensation and insufficient equity opportunity. On the cash dimension, big tech employers and growth-stage scale-ups are pricing senior individual contributor roles at $230K-$280K base in the relevant geographies, while Vertex's existing salary bands top out at $195K for the same level. On the equity dimension, the asymmetry runs the other direction: seed and Series A startups are offering senior hires post-Series-B-equivalent stakes in the 0.5%-1.5% range, while Vertex's standard grant for the same level is approximately 0.15%. Vertex sits in a pricing dead zone — too small to win on cash, too late-stage to win on equity upside.

Internal pay equity has deteriorated through years of accumulated decisions made without disciplined band management. Successful candidate negotiation, off-cycle promotions made to retain flight risks, and counter-offers granted under duress have produced pay variance within a single level reaching up to 35%. The pattern correlates loosely but visibly with tenure and negotiation behavior rather than with current performance. Three exit interviews in the past quarter referenced perceived pay unfairness as a contributing factor in the departure decision, and an HR complaint was filed two weeks ago alleging gender-correlated pay disparities within the product organization. The complaint is currently under review but the underlying data suggests it has merit at the within-level comparison.

CEO Olivia Berg has commissioned a full redesign with six explicit deliverables: a written compensation philosophy that anchors all subsequent decisions, market positioning across cash and equity by function and level, base-bonus-equity mix design, a refresh grant strategy that addresses retention and dilution simultaneously, an internal equity remediation plan to close unjustifiable gaps, and a pay transparency posture for the next eighteen months. The recommendation must be defensible to the board, executable within a budget Olivia is willing to defend, persuasive to candidates, and credible to current employees who have heard prior reform promises that quietly faded. You have three weeks to prepare.`,
        ko: `(고급 — 영문 위주)

Vertex Labs(시리즈 B, 180 FTE, ARR $22M, YoY 110% 성장, 시리즈 C까지 약 18개월). 보상이 채용 품질·시니어 리텐션의 결정적 제약. 진단 데이터 — 지난 2분기 오퍼 수락 지표상 시니어 엔지니어링 60%, 시니어 프로덕트 45% 거절, 사유는 "현금 부족"과 "지분 부족"이 반반. 현금 — 빅테크/성장기 스케일업이 시니어 IC를 베이스 $230K~$280K로 책정, Vertex 밴드 상한 $195K. 지분 — 시드/시리즈 A는 시리즈 B 환산 0.5~1.5%, Vertex 동급 표준 약 0.15%. Vertex는 가격 사각지대 — 현금에서 이기기엔 너무 작고, 지분 업사이드에서 이기기엔 너무 후기. 내부 이쿼티는 수년간 무규율 결정 누적으로 동급 내 최대 35% 변동, 패턴이 성과보다 재직 기간·협상 행태와 더 상관. 지난 분기 퇴직 인터뷰 3건이 보상 불공정 언급, 2주 전 프로덕트 조직 내 성별 상관 임금 격차 의혹 HR 컴플레인 접수(검토 중이나 동급 비교상 근거 존재). CEO Olivia Berg의 6개 명시적 산출물: 후속 결정의 기준이 될 서면 보상 철학, 기능·레벨별 현금·지분 시장 포지셔닝, 베이스·보너스·지분 믹스 설계, 리텐션과 희석을 동시에 다루는 리프레시 그랜트 전략, 정당화 불가 격차 해소를 위한 내부 이쿼티 시정 계획, 향후 18개월 페이 투명성 자세. 이사회 방어 가능, Olivia가 방어할 예산 내 실행 가능, 후보 설득력, 이전 개혁 약속이 조용히 사라지는 것을 본 현직원에게 신뢰성 — 3주 준비.`
      }
    },

    questions: {
      beginner: [
        {
          q: "What should our compensation philosophy be?",
          modelAnswer: "I recommend a simple philosophy with three parts. First, we pay for impact and skill, not for tenure or negotiation. Second, we aim for the 75th percentile in cash for important roles and competitive equity for everyone. Third, we will be fair across people doing similar work. This philosophy is easy to explain to candidates and to employees. It also gives us a clear standard to use in every pay decision. A philosophy is only useful if everyone in leadership uses it the same way.",
          tips: [
            "Three clear parts to the philosophy",
            "Mention specific positioning (75th percentile)",
            "End with how it gets used (everyone the same way)"
          ]
        },
        {
          q: "How do we compete with big tech on salary?",
          modelAnswer: "We cannot match big tech exactly, but we can be close enough to compete. For senior roles, I suggest moving our base salary bands up to about $230,000 — close to big tech but slightly lower. We tell candidates: we pay 90% of big tech in cash, plus meaningful equity, plus a chance to do more important work. Some candidates choose us for the work and the equity, even with slightly lower cash. We do not need to win every candidate. We need to win the right ones.",
          tips: [
            "Be honest about the limit ('cannot match exactly')",
            "Give a specific number ($230,000)",
            "Show value beyond cash (equity, work)",
            "End with selection: win the right ones"
          ]
        },
        {
          q: "Some employees are paid much more than others at the same level. How do we fix this?",
          modelAnswer: "First, we do a full pay analysis: look at every person at every level and see the gaps. Second, we create new bands based on market data. Third, we move people up to the band if they are below — usually 1.5% extra cost per person. We do not cut anyone's pay. Fourth, if someone is far above the band, we freeze their pay until the band catches up. The total cost is about $400,000 — not small, but the cost of unfairness and lawsuits is much bigger.",
          tips: [
            "Four-step plan",
            "Be specific (1.5%, $400K)",
            "Clear rule: do not cut anyone",
            "Frame cost against bigger cost"
          ]
        }
      ],
      intermediate: [
        {
          q: "Walk me through the compensation philosophy you'd anchor this on.",
          modelAnswer: "I'd recommend a four-pillar philosophy that we publish internally and reference in every comp decision. First pillar: pay for current impact and projected scope, not for tenure, negotiation skill, or counter-offer behavior. Second pillar: market positioning that's deliberately differentiated by role criticality — 75th percentile cash for senior engineering and product, 50th-65th percentile for most other functions, with equity weighted higher for roles where long-term ownership creates value. Third pillar: internal equity is non-negotiable — within a level, pay differences must reflect contribution differences, not historical accident. Fourth pillar: comp decisions are made by the compensation committee using calibrated criteria, not by managers in negotiation rooms. This last pillar is the unglamorous one that determines whether the others actually hold. Most comp philosophies fail not because the principles are wrong but because they get quietly violated in practice. The discipline of putting decisions through a committee with shared criteria is what makes the philosophy real.",
          tips: [
            "Four pillars with concrete content for each",
            "Differentiated positioning by role — sophisticated",
            "Identify the unglamorous pillar that determines success",
            "Explain why most philosophies fail",
            "Key phrases: 'calibrated criteria', 'historical accident'"
          ]
        },
        {
          q: "How do we close the cash gap with big tech without blowing up our cost structure?",
          modelAnswer: "We can't close the gap fully, and we shouldn't try. The right move is selective repositioning combined with sharper sourcing. Three components. First, raise senior IC bands in engineering and product to about $225K-$245K base — roughly 90% of big tech but with meaningful equity that big tech can't match for the same expected upside. Total budget impact is approximately $1.8M annually given current senior headcount. Second, reposition the value proposition in sourcing and recruiting: we target candidates who specifically want startup ownership, faster impact, and equity upside — those candidates exist and they self-select out of big tech for reasons of motivation, not just compensation. Third, be willing to lose candidates who optimize purely for cash. That's a win, not a loss — those candidates would have been retention risks. The discipline is to redefine the target candidate profile, not to chase every offer competitively. Most companies that try to match big tech on cash end up with a worse business and the same talent funnel.",
          tips: [
            "Be honest about what's not possible",
            "Three components with budget impact quantified",
            "Reframe candidate losses as wins when appropriate",
            "Close with the strategic principle"
          ]
        },
        {
          q: "Equity is where we're really losing to early-stage startups. How do we improve our equity story without diluting too aggressively?",
          modelAnswer: "Equity is genuinely hard at our stage — we don't have the upside of an early startup or the liquidity of a public company. The strategy I'd recommend is three-part. First, restructure the standard grant for senior roles: increase from approximately 0.15% to 0.30% for senior IC and 0.50% for senior leadership, with a four-year vest and a one-year cliff. Total incremental dilution over four years is approximately 0.8%, which is meaningful but defensible against the alternative of losing senior hires. Second, introduce a meaningful refresh grant program tied to performance and retention — typically 25-40% of the original grant every 18-24 months for strong performers. This addresses the slow-leak problem where equity quietly becomes worthless as the original grant vests. Third, sharpen the narrative around equity upside: candidates need to understand what their stake might be worth at realistic exit scenarios. We should publish a transparent equity worksheet showing low, expected, and high scenarios. The combination of stronger grants, predictable refresh, and credible narrative is what closes the gap with early-stage competitors at our stage.",
          tips: [
            "Acknowledge the genuine constraint",
            "Three parts with specific percentages and timing",
            "Quantify dilution honestly",
            "Identify the 'slow-leak problem' — shows expertise",
            "Connect to candidate decision-making (worksheet)"
          ]
        },
        {
          q: "How do we fix internal pay equity without causing chaos? People above the band, people below the band — how do we handle it?",
          modelAnswer: "The remediation strategy has to be principled, predictable, and well-communicated, or the cure becomes worse than the disease. Three actions in sequence. First, complete a comprehensive pay equity analysis comparing every employee to a market-data-defined band for their level and role, with statistical analysis across protected categories. This produces the diagnostic. Second, for employees below the band, we make targeted adjustments — typically a 5-15% increase to bring them into the appropriate band position based on tenure and performance. Total cost estimate is approximately $600K depending on what the analysis surfaces. Third, for employees above the band — typically because of past counter-offers or aggressive negotiation — we don't cut pay, but we freeze base increases until market movement brings the band up to their current level. We're transparent with these employees that they're above band and what that means. Communication matters enormously. We brief affected employees individually, explain the analysis and the decision, and provide a clear path forward. The risk of doing this badly is that it surfaces as favoritism or punishment. The risk of not doing it is continued attrition driven by perceived unfairness, plus potential legal exposure on the gender-correlated complaint we already have on file.",
          tips: [
            "Lead with the principles, then the actions",
            "Three actions in clear sequence",
            "Specific cost estimate ($600K)",
            "Distinguish what we do for below-band vs above-band",
            "Address communication risk directly",
            "Connect to the existing HR complaint"
          ]
        },
        {
          q: "How transparent should we be about pay? Some companies publish everything, some publish nothing.",
          modelAnswer: "The right answer for us is calibrated transparency, not full transparency or full opacity. Four specific commitments. First, publish the compensation philosophy in full — every employee should understand what we're trying to do and why. Second, publish the salary bands for every level and role internally — every employee should know the range they can earn at their current level and what the next level pays. Third, do not publish individual salaries — full individual transparency tends to produce more comparison anxiety than it solves and is mismatched with our cultural readiness. Fourth, commit to publishing aggregate pay equity data annually — by level, function, gender, and other relevant categories — with explicit accountability for closing identified gaps. This combination gives employees the information they need to evaluate fairness systemically, removes the asymmetric information advantage that hurts new hires and women in negotiation, and avoids the social dynamics that pure individual transparency creates. We can revisit greater transparency in eighteen months once the band discipline is established.",
          tips: [
            "Reject the binary framing — 'calibrated transparency'",
            "Four specific commitments with rationale",
            "Distinguish what we publish from what we don't",
            "Address asymmetric information advantage",
            "Commit to revisiting in the future"
          ]
        }
      ],
      advanced: [
        {
          q: "Lay out the full compensation strategy: philosophy, market positioning, mix, refresh, internal equity, and transparency. Make the case end-to-end.",
          modelAnswer: "The strategy rests on a core conviction: we are operating in a pricing dead zone for our stage, and trying to compete simultaneously on all dimensions is the path to a mediocre comp position with high cost. Instead, we make deliberate trade-offs and over-invest in the dimensions where we can actually win. Six components, end to end. Philosophy: pay for current impact and projected scope, with deliberately differentiated market positioning by role criticality, internal equity as a hard constraint, and decisions made through a comp committee using calibrated criteria. Market positioning: 75th percentile cash and 75th percentile equity for senior engineering and product where individual leverage is highest; 50th to 65th percentile cash with higher equity weighting for go-to-market roles where long-term ownership creates value; 50th percentile cash and standard equity for support functions where the marginal cost of paying above market exceeds the marginal value of attracting top decile candidates. This differentiation is not politically easy but it is economically correct. Mix design: base salary representing approximately 75-80% of cash compensation, bonus 20-25% tied to company performance with limited individual modifier, equity as a separate motivational layer rather than a substitute for cash. We avoid the pattern of using bonus to plug cash gaps because it dilutes the meaning of variable comp and creates volatility employees don't actually want at our stage. Refresh strategy: 25-40% of original grant for strong performers every 18-24 months, with vesting that addresses the cliff problem in the third and fourth year of tenure. Total annual dilution from refresh roughly 1.5%, which is significant but addresses the retention exposure we currently carry. Internal equity remediation: complete pay analysis in week one, individual adjustments for below-band cases in week three, freeze logic for above-band cases communicated transparently, and quarterly monitoring thereafter. Total cost approximately $600K. Transparency posture: publish philosophy, bands, and aggregate equity data; do not publish individual salaries; revisit in eighteen months. Total incremental annual cost across all components is approximately $3.2M, which is meaningful but funds itself through reduced regretted attrition, faster time-to-hire, and avoided legal exposure within twelve to eighteen months. The strategy is defensible to the board because the trade-offs are deliberate, the costs are quantified, and the alternative — continued offer losses and equity-driven attrition — is more expensive in slow-burn ways that don't show up in the comp line.",
          tips: [
            "Open with the strategic conviction",
            "Six components with concrete content for each",
            "Quantify everything (cost, dilution, time horizon)",
            "Explain the trade-off logic (pricing dead zone)",
            "Close with the funding argument vs alternative cost"
          ]
        },
        {
          q: "The board will push on cost. Walk me through how this funds itself — and what you'd cut if we have to fit a tighter envelope.",
          modelAnswer: "The funding case has three components and a contingency plan. Component one, reduced regretted attrition: at our current pace, regretted senior departures cost approximately $400K each in replacement and ramp time, and we're losing roughly one per month attributable to comp factors. Closing that gap saves $4-5M annually in fully-loaded terms. Component two, faster and higher-quality hiring: our current offer-to-acceptance rate is 35% in senior roles, and each declined offer costs roughly $40K in re-search time. Improving acceptance to 60% saves approximately $1.5M annually plus the much larger but harder-to-quantify benefit of hire quality. Component three, avoided legal exposure: the pay equity complaint currently under review carries potential exposure of $500K-$2M depending on outcome, plus reputational damage. Proactive remediation reduces both the probability and severity of similar exposure ongoing. Against these benefits, the $3.2M annual cost funds itself within twelve months even on conservative assumptions. If the board requires a tighter envelope, here's the prioritization. Cannot cut: internal equity remediation and pay analysis — the legal and trust risk is too high. Should not cut: senior IC band repositioning — this is the largest hiring constraint. Can phase: refresh grant program could be introduced for top performers only in year one, expanded in year two — saves approximately $800K in year-one dilution. Can defer: transparency posture changes can be sequenced over eighteen months with no immediate cost. The minimum viable envelope is approximately $2.2M annually, which still addresses the most damaging gaps. Below that, we're choosing which problems get worse.",
          tips: [
            "Three components of funding case with numbers",
            "Quantify each benefit category",
            "Contingency plan with explicit prioritization",
            "Distinguish 'cannot cut' from 'can phase'",
            "End with what's below the line"
          ]
        },
        {
          q: "Walk me through the change management. People who are above band, people who are below band, candidates, and current employees who hear about reform — how do we land all of this?",
          modelAnswer: "Change management has to operate across four distinct audiences with calibrated messages, sequenced to manage trust and avoid the information vacuums where rumor metastasizes. Audience one, employees below band: these are the easy conversations — individual manager-led discussions explaining the analysis, the adjustment they're receiving, and the reason. The tone is corrective and respectful: we should have done this sooner, here's what we're doing now, and here's how the system prevents recurrence. The risk is small and the goodwill is large. Audience two, employees above band: these are the hard conversations. Individual sessions, manager-led with HR present, explaining that they are paid above the calibrated band for their level — typically because of past negotiation or counter-offer — and that base increases will pause until market movement brings the band up. We do not cut pay. We explain that this is part of a broader system reform that protects internal equity, and that their continued contribution is valued. The communication needs to acknowledge that this can feel arbitrary, while explaining why it is necessary. Approximately 12 employees fall into this category based on preliminary analysis. Audience three, candidates: a refreshed offer presentation that leads with the new philosophy, shows them where their offer sits within band, explains the refresh program, and tells the equity story credibly with the worksheet. The candidate experience should feel substantively different from six months ago — competitive, transparent, and confident. Audience four, the broader employee base: a town hall from you announcing the philosophy, the bands at a high level, the remediation work, and the transparency commitments. This audience has heard reform promises before and is justifiably skeptical. The credibility move is to publish the philosophy document, the band ranges, and a commitment to a six-month review with shared metrics — not to over-promise on what changes and by when. Sequencing matters across all four: leadership alignment in week one, individual conversations with above-band and below-band employees in week two, refreshed candidate materials live in week two, town hall in week three. The risk of slow sequencing is that rumor fills the gaps; the risk of fast sequencing is that managers aren't prepared to handle individual conversations. We resolve by investing heavily in manager preparation before any conversation happens. The single biggest failure mode is the above-band conversations going poorly. If those land badly, the perception across the company becomes 'reform meant some people got penalized,' which kills the change. We brief, role-play, and support those conversations as if they're the highest-stakes meetings we run this quarter, because they are.",
          tips: [
            "Four distinct audiences with calibrated messages",
            "Distinguish easy conversations from hard ones",
            "Quantify the affected populations",
            "Acknowledge skepticism honestly",
            "Identify the single biggest failure mode and over-invest there"
          ]
        }
      ]
    },

    glossary: {
      "compensation philosophy": "보상 철학",
      "total compensation": "총 보상 (현금 + 지분 + 복리후생)",
      "base salary": "기본급",
      "bonus": "보너스 (성과급)",
      "variable comp": "변동 보상",
      "equity": "지분 (스톡옵션, RSU)",
      "equity grant": "지분 부여",
      "refresh grant": "리프레시 그랜트 (추가 지분 부여)",
      "vesting": "권리 확정 (베스팅)",
      "cliff": "클리프 (첫 베스팅까지의 유예 기간)",
      "salary band": "급여 밴드 (레벨별 연봉 구간)",
      "leveling": "레벨링 (직무 등급 부여)",
      "market positioning": "시장 포지셔닝 (백분위 기준 보상 위치)",
      "75th percentile": "75 백분위 (상위 25% 수준)",
      "pay equity": "페이 이쿼티 (보상 공정성)",
      "internal equity": "내부 공정성 (조직 내 보상 일관성)",
      "pay variance": "보상 변동 (동일 직급 내 격차)",
      "band drift": "밴드 드리프트 (밴드를 벗어난 보상 누적)",
      "off-cycle promotion": "비정기 승진",
      "counter-offer": "카운터 오퍼 (이직 시 잔류 제안)",
      "comp committee": "보상 위원회",
      "calibrated criteria": "보정된 기준 (일관된 의사결정 기준)",
      "dilution": "(지분) 희석",
      "regretted attrition": "후회되는 이직",
      "offer-acceptance rate": "오퍼 수락률",
      "time-to-hire": "채용 소요 기간",
      "pay transparency": "페이 투명성",
      "pricing dead zone": "가격 사각지대 (어느 쪽도 이기지 못하는 위치)",
      "fully-loaded cost": "총 비용 (인건비 + 부대 비용)",
      "ramp time": "신규 인력 적응 기간"
    }
  },
  {
    id: 'retention-strategy-01',
    advisorNote: {
      target: "스타트업 대표 · HR (전 규모)",
      points: [
        "카운터오퍼(역제안)의 성공률은 낮습니다. 연봉으로 잡은 사람의 상당수가 1년 내 결국 떠난다는 것이 통설입니다 — 돈이 아니라 떠나려던 이유를 해결해야 합니다.",
        "이탈 시그널은 퇴사 통보 3개월 전부터 나타납니다: 회의 발언 감소, 채용 사이트 활동, 갑작스러운 연차 사용 패턴. 리더가 시그널을 아는 것만으로 절반은 예방됩니다.",
        "퇴사 인터뷰(exit interview)보다 스테이 인터뷰(stay interview)가 훨씬 쌉니다. '무엇이 당신을 머물게 하나요, 무엇이 떠나고 싶게 하나요' 두 질문이면 됩니다.",
        "핵심 인재가 떠나는 진짜 이유 1위는 보상이 아니라 '성장 정체감'입니다. 6개월마다 다음 도전 과제를 명시적으로 논의하세요."
      ],
      checklist: [
        "핵심 인재 리스트와 이탈 리스크 등급",
        "분기별 스테이 인터뷰 운영",
        "카운터오퍼 원칙 사전 결정 (하는가, 어디까지)",
        "핵심 인재별 성장 로드맵 문서화"
      ]
    },
    title: 'Preventing the Departure of Key Talent',
    titleKo: '핵심인재 이탈 방지 전략',
    category: 'Talent Retention',
    estimatedMinutes: 25,

    briefing: {
      beginner: {
        en: `You are an HR Business Partner at a fast-growing tech company with 350 employees. In the last 6 weeks, 3 senior engineers and 2 team leads have left. The CEO is worried and wants both a quick plan and a long-term plan.`,
        ko: `당신은 직원 350명의 빠르게 성장하는 테크 회사의 HRBP입니다. 지난 6주간 시니어 엔지니어 3명과 팀 리드 2명이 떠났습니다. CEO는 걱정 중이며 단기 대응과 장기 전략 모두를 원합니다.`
      },
      intermediate: {
        en: `You are Daniel Yoon, HRBP at Quantum Works, a 350-person high-growth tech company. In the past six weeks, three senior engineers and two team leads have resigned — all to competitors or to start their own ventures. Exit interviews surface a consistent set of themes: burnout, lack of growth, comp gap with competitors, and feeling like "just another headcount." CEO Rachel Im wants both an emergency response and a sustainable strategy. The next leadership meeting is in five days.`,
        ko: `당신은 350명 규모 고성장 테크 회사 Quantum Works의 HRBP인 Daniel Yoon입니다. 지난 6주간 시니어 엔지니어 3명과 팀 리드 2명이 사임 — 모두 경쟁사 이직 혹은 본인 창업. 퇴직 인터뷰에서 일관된 테마 표출: 번아웃, 성장 부재, 경쟁사 대비 보상 격차, "그저 또 한 명의 헤드카운트"라는 느낌. CEO Rachel Im은 긴급 대응과 지속 가능한 전략 모두 원함. 다음 리더십 미팅까지 5일.`
      },
      advanced: {
        en: `You are Daniel Yoon, HRBP at Quantum Works (350 FTEs, Series C, growing 80% YoY, AI infrastructure category). In the past six weeks the company has experienced an attrition cluster that crosses the threshold from noise to signal: three senior engineers and two engineering team leads have resigned, all five qualifying as regretted losses by current management judgment. Two destinations were tier-1 competitor companies offering significantly stronger comp packages; one was a stealth-mode startup; two were founder paths. Aggregated exit interview data surfaces five themes with high inter-rater agreement: chronic burnout from sustained over-pace, lack of visible growth pathing, compensation gap of 25-40% relative to current market for the same level, manager quality variance that left some teams under-supported, and a recurring sense of being "another headcount" rather than a valued contributor in a company that scaled past the founder-touchpoint stage. Engagement survey data from the past quarter, run before the resignation cluster, already showed concerning erosion: top-quartile employee engagement scores dropped from 78% to 64% YoY, intent-to-stay scores dropped to 71% from 84%, and manager-effectiveness scores in engineering specifically dropped to 58%. CEO Rachel Im has called for an emergency retention response and a sustainable strategy. She wants your strategic point of view on diagnostic depth, immediate actions to stem flow, structural changes to address root causes, and the governance to make this stick — all to be presented at the leadership meeting in five days.`,
        ko: `당신은 Quantum Works(시리즈 C, 350 FTE, YoY 80% 성장, AI 인프라 카테고리)의 HRBP인 Daniel Yoon입니다. 지난 6주간 노이즈에서 신호로 넘어가는 이직 클러스터 발생 — 시니어 엔지니어 3명, 엔지니어링 팀 리드 2명 사임, 5명 모두 현 매니지먼트 판단상 후회되는 손실. 행선지 — 2명 티어 1 경쟁사(훨씬 강한 보상 패키지), 1명 스텔스 스타트업, 2명 창업. 집계된 퇴직 인터뷰가 평가자 간 높은 일치도로 5개 테마 표출: 지속된 과속에서 오는 만성 번아웃, 가시적 성장 경로 부재, 동급 시장 대비 25~40% 보상 격差, 일부 팀이 지원 부족 상태에 놓인 매니저 품질 편차, 창업자 터치포인트 단계를 넘어 스케일된 회사에서 "또 한 명의 헤드카운트"라는 반복 정서. 사임 클러스터 이전 지난 분기 몰입 설문 데이터도 이미 우려스러운 침식 — 상위 4분위 몰입 점수 78% → 64% YoY, 잔류 의향 84% → 71%, 엔지니어링 특정 매니저 효과성 58%. CEO Rachel Im이 긴급 리텐션 대응과 지속 가능한 전략 모두 호출. 진단 깊이, 흐름을 막기 위한 즉시 조치, 근본 원인 해소를 위한 구조 변화, 정착을 위한 거버넌스 — 5일 내 리더십 미팅 발표 요청.`
      }
    },

    caseStudy: {
      beginner: {
        en: `Quantum Works is a 350-person tech company that is growing fast.

In the last 6 weeks:
- 3 senior engineers left
- 2 team leads left
- All 5 went to competitors or to start their own company

Exit interview themes:
- Burnout (too much work, too long)
- No clear path to grow
- Other companies pay more
- Feel like a number, not a person

Engagement survey before this:
- Engagement scores dropped 14 points
- 71% of employees plan to stay (was 84%)
- Engineering manager scores are low (58%)

CEO wants:
- A fast plan to stop more people leaving
- A long-term plan to keep people happy

You have 5 days.`,
        ko: `Quantum Works는 빠르게 성장 중인 350명 규모 테크 회사입니다.

지난 6주:
- 시니어 엔지니어 3명 퇴사
- 팀 리드 2명 퇴사
- 5명 모두 경쟁사 이직 또는 창업

퇴직 인터뷰 테마:
- 번아웃 (너무 많은 일, 너무 오래)
- 성장 경로 불분명
- 다른 회사가 더 많이 지급
- 사람이 아니라 숫자로 느낌

이전 몰입 설문:
- 몰입 점수 14p 하락
- 잔류 의향 84% → 71%
- 엔지니어링 매니저 점수 낮음 (58%)

CEO가 원함:
- 추가 이탈을 막을 빠른 계획
- 직원 만족을 유지할 장기 계획

5일.`
      },
      intermediate: {
        en: `Quantum Works is a 350-person Series C company in the AI infrastructure category, growing 80% year over year. The recent attrition is alarming:

In the past 6 weeks:
- 3 senior engineers resigned, all going to top competitors with materially better comp
- 2 engineering team leads resigned — one to a stealth startup, one to start their own venture
- All 5 are regretted losses by leadership judgment

Exit interview themes (consistent across all 5):
- Chronic burnout from sustained over-pace
- Lack of visible growth pathing
- Compensation gap of 25-40% vs current market for the same level
- Manager quality variance — some teams under-supported
- Feeling like "another headcount" in a company that scaled past founder-touchpoint stage

Engagement data (collected before the resignations):
- Top-quartile employee engagement: 78% → 64% YoY
- Intent-to-stay: 84% → 71%
- Engineering manager effectiveness: 58%

CEO Rachel Im wants both:
1. An emergency response — immediate actions in the next 30 days to stem outflow
2. A sustainable strategy — structural changes addressing root causes

You have five days to prepare.`,
        ko: `Quantum Works는 AI 인프라 카테고리의 350명 규모 시리즈 C 회사, YoY 80% 성장. 최근 이탈은 우려스러움:

지난 6주:
- 시니어 엔지니어 3명 사임, 모두 의미 있게 더 좋은 보상의 톱 경쟁사로
- 엔지니어링 팀 리드 2명 사임 — 1명 스텔스 스타트업, 1명 창업
- 5명 모두 리더십 판단상 후회되는 손실

퇴직 인터뷰 테마(5명 일관):
- 지속된 과속에서 오는 만성 번아웃
- 가시적 성장 경로 부재
- 동급 시장 대비 25~40% 보상 격차
- 매니저 품질 편차 — 일부 팀이 지원 부족
- 창업자 터치포인트 단계를 넘어 스케일된 회사에서 "또 한 명의 헤드카운트" 정서

몰입 데이터(사임 이전 수집):
- 상위 4분위 직원 몰입: 78% → 64% YoY
- 잔류 의향: 84% → 71%
- 엔지니어링 매니저 효과성: 58%

CEO Rachel Im이 원하는 것:
1. 긴급 대응 — 30일 내 이탈 흐름 차단 즉시 조치
2. 지속 가능한 전략 — 근본 원인 해소 구조 변화

5일 — 준비.`
      },
      advanced: {
        en: `Quantum Works (Delaware C-corp, founded 2020) operates in the AI infrastructure category with 350 FTEs, Series C, and 80% year-over-year revenue growth. The company has reached the organizational stage where the founder-driven cultural intimacy that defined its first 150 people no longer scales by default, and the systemic investments required to sustain talent quality at 350+ have lagged the operational investments required to sustain growth.

In the past six weeks the company has experienced an attrition cluster that crosses the threshold from statistical noise to actionable signal. Five regretted losses — three senior engineers and two engineering team leads — have resigned. Destination analysis reveals three patterns: two departures to tier-1 competitor companies offering compensation packages 30-45% above current Quantum levels for the same scope, one to a stealth-mode startup with significant equity opportunity, and two to founder paths driven by personal opportunity-cost calculations. Aggregated exit interview data, coded for theme by an external partner to reduce bias, surfaces five concerns with high inter-rater agreement: chronic burnout from sustained operational over-pace across the past four quarters, lack of visible growth pathing for senior individual contributors who do not want to become managers, compensation gap of 25-40% relative to current market for the same level, significant manager-quality variance that has left specific teams meaningfully under-supported, and a recurring articulation of feeling like "another headcount" in a company that has scaled past the founder-touchpoint stage without building the systematic care infrastructure that replaces it.

Engagement survey data from the most recent quarter, collected before the resignation cluster, already showed concerning erosion. Top-quartile employee engagement dropped from 78% to 64% YoY. Intent-to-stay declined from 84% to 71%. Manager-effectiveness scores in engineering specifically sat at 58%, with significant variation between team leads. The most recent organizational diagnostic also surfaced an underlying issue: career-pathing transparency, recognition quality, and what departing employees called the "human signal" — direct expression by leadership that an individual's contribution is seen and valued — all scored in the bottom quartile of the benchmark cohort.

CEO Rachel Im has commissioned both an emergency response designed to stem near-term outflow and a sustainable structural strategy addressing root causes. She wants your strategic point of view on diagnostic depth, immediate actions, structural changes across compensation, career pathing, manager quality, recognition, and workload sustainability, and the governance mechanism to ensure these changes hold over the next twelve months rather than fading as the next operational crisis demands attention. The presentation is in five days.`,
        ko: `(고급 — 영문 위주)

Quantum Works(시리즈 C, 350 FTE, YoY 80% 성장, AI 인프라). 창업자 주도의 문화적 친밀성이 첫 150명을 정의했지만 350+ 단계에서는 기본적으로 스케일되지 않는 조직 단계 도달. 인재 품질을 지속하는 시스템 투자가 성장 운영 투자에 비해 지연. 지난 6주 통계적 노이즈에서 실행 가능한 신호로 넘어가는 이직 클러스터 — 5명의 후회되는 손실(시니어 엔지니어 3명, 엔지니어링 팀 리드 2명). 행선지 분석 3패턴: 2명 동급 30~45% 상회 보상의 티어 1 경쟁사, 1명 큰 지분 기회의 스텔스 스타트업, 2명 개인 기회비용 계산에 기반한 창업 경로. 편향 감소를 위해 외부 파트너가 테마 코딩한 집계 퇴직 인터뷰가 평가자 간 높은 일치도로 5개 우려 표출: 지난 4분기에 걸친 운영 과속에서 오는 만성 번아웃, 매니저가 되고 싶지 않은 시니어 IC를 위한 가시적 성장 경로 부재, 동급 시장 대비 25~40% 보상 격차, 특정 팀이 의미 있게 지원 부족 상태에 놓인 매니저 품질 편차, 창업자 터치포인트 단계를 넘었으나 이를 대체할 체계적 케어 인프라를 구축하지 못한 회사에서 "또 한 명의 헤드카운트"라는 반복적 정서. 사임 클러스터 이전 직전 분기 몰입 설문도 이미 우려스러운 침식: 상위 4분위 몰입 78% → 64% YoY, 잔류 의향 84% → 71%, 엔지니어링 매니저 효과성 58%(팀 리드 간 큰 편차). 최근 조직 진단도 기저 이슈 표출 — 커리어 경로 투명성, 인정의 품질, 퇴직자가 부른 "인간 신호"(개인 기여가 보이고 가치 있다는 리더십의 직접 표현)가 모두 벤치마크 하위 4분위. CEO Rachel Im이 단기 유출 차단을 위한 긴급 대응과 근본 원인 해소를 위한 지속 가능한 구조 전략 모두 호출. 진단 깊이, 즉시 조치, 보상·커리어 경로·매니저 품질·인정·업무량 지속 가능성 전반의 구조 변화, 다음 운영 위기가 주의를 요구할 때 변화가 사라지지 않고 12개월간 유지되도록 하는 거버넌스 메커니즘에 대한 전략적 관점 — 5일 후 발표.`
      }
    },

    questions: {
      beginner: [
        {
          q: "What should we do in the next 30 days to stop more people from leaving?",
          modelAnswer: "I suggest four fast actions. First, hold a 'stay interview' with every senior engineer and team lead in the next two weeks. Ask what they love, what frustrates them, and what would make them leave. Second, give clear retention bonuses or equity refreshes to the top 20 critical people — about $50,000 to $100,000 in equity each. Third, the CEO sends a personal handwritten note to every senior person, thanking them for specific work. Small but powerful. Fourth, fix the most painful workload issues — for example, hire two engineers immediately to relieve the busiest teams. Speed matters more than perfection right now.",
          tips: [
            "Four fast actions with concrete examples",
            "Use 'stay interview' — HR vocabulary",
            "Specific numbers ($50K-$100K, 20 people)",
            "End with the principle (speed over perfection)"
          ]
        },
        {
          q: "Why are people leaving? What is the real problem?",
          modelAnswer: "The exit interviews show four real problems. First, burnout — people work too hard for too long without a break. Second, no clear path to grow — they cannot see what their job becomes in two years. Third, other companies pay 25-40% more for the same work. Fourth, they feel like a number, not a person — the CEO does not see their work anymore. The pay problem is the most visible, but the feeling of not being seen is the deepest. We need to fix all four, but if we only fix pay, we will not solve the real issue.",
          tips: [
            "Four problems in order",
            "Distinguish 'most visible' from 'deepest'",
            "Use concrete numbers (25-40%)",
            "End with the insight (pay alone won't fix it)"
          ]
        },
        {
          q: "How do we know if our retention plan is working?",
          modelAnswer: "We should track three things every month. First, how many people are leaving — and how many of those are people we wanted to keep. Second, the results of a short pulse survey, especially 'I plan to be here in a year.' Third, the number of stay interviews completed and what we learned. We should also look at these numbers by team and by manager — because the problem is not the same everywhere. If we look at total numbers only, we miss the real story.",
          tips: [
            "Three metrics with monthly cadence",
            "Distinguish total attrition from regretted attrition",
            "Look at the data by team and manager — sophisticated",
            "End with what we miss if we don't"
          ]
        }
      ],
      intermediate: [
        {
          q: "Walk me through the 30-day emergency response. What do we do this week, next week, the week after?",
          modelAnswer: "I'd structure a 30-day response across three weekly sprints. Week one, diagnosis and stabilization. We complete stay interviews with the top 30 senior individual contributors and team leads — these are the people we cannot afford to lose. We work with finance to authorize discretionary retention budgets — both equity refreshes and spot cash bonuses — for the top 20 critical people, sized at roughly $75K-$150K depending on level. You personally send a substantive note to each of those 20 people, naming specific contributions you've seen. Week two, immediate pain relief. Based on the stay interviews, we tackle the two or three loudest workload issues — typically by adding contractor support to overstretched teams, deferring two or three lower-priority initiatives, and protecting calendar time for senior people. Week three, manager intervention. We identify the three or four managers whose teams are showing the worst signals and put them on intensive coaching or, in two clear cases I'd flag now, redeploy them to non-people-leading roles. We also commit publicly to specific structural changes — new career framework, comp review, recognition rituals — to come in the next 90 days. The 30-day plan stems flow. It does not solve the underlying problems.",
          tips: [
            "Three weekly sprints with specific actions",
            "Quantify the populations (top 30, top 20)",
            "Concrete dollar ranges for retention budget",
            "Include hard manager decisions — not just process",
            "Close with what the plan does and doesn't accomplish"
          ]
        },
        {
          q: "Let's talk about the comp gap. We can't pay big tech. How do we close enough to retain?",
          modelAnswer: "You're right that we can't fully close the gap, but we also don't need to. Three components. First, immediate equity refresh for the top 20 retention-critical people, ranging from $75K to $200K in additional grants vested over three years with a one-year cliff. This addresses the slow-leak problem where original grants quietly become inadequate as people approach their full vest. Total dilution is roughly 0.4%. Second, accelerated band repositioning for senior IC roles in engineering — bringing base salary bands up by 10-15% effective immediately rather than waiting for the next merit cycle. Total cost approximately $1.2M annually. Third, sharper retention messaging: candidates and current employees should understand the equity story credibly with a worksheet showing realistic exit scenarios. This is not a sales pitch — it's giving people the information they need to value the package accurately. The cumulative effect closes most of the cash gap and creates a meaningfully better equity story. We won't beat big tech on cash. We can beat them on combined cash plus credible equity for people who actually want startup ownership.",
          tips: [
            "Acknowledge the constraint",
            "Three components with quantified cost",
            "Use 'slow-leak problem' — shows expertise",
            "Distinguish what we can and can't beat big tech on",
            "End with the candidate selection principle"
          ]
        },
        {
          q: "How do we fix career pathing? People say there's no future for senior ICs who don't want to be managers.",
          modelAnswer: "This is a structural gap and the fix has to be architectural. I'd recommend building a formal dual-track career framework over the next 90 days. Three components. First, define a senior IC track that runs through staff, senior staff, principal, and distinguished engineer equivalents — with the explicit message that this track is fully equivalent in status, compensation, and influence to the management track. The principal level should be paid at or above engineering director levels and have equivalent strategic voice. Second, publish concrete promotion criteria for each level — scope, technical impact, leadership through influence rather than direct reports — so people can see what advancement requires. Third, identify five to seven people across engineering who are clear candidates for the senior IC levels right now and promote them as the visible signal that this track is real. Most companies announce a dual track and never actually populate the senior end of it; the populated examples are what makes the track real for everyone else. The cost is real — these are senior comp levels — but the alternative is continuing to lose the most senior technical contributors to companies that have built credible IC paths.",
          tips: [
            "Frame as architectural, not tactical",
            "Three components with named levels",
            "Specific number of immediate promotions",
            "Identify the common failure mode (announce but don't populate)",
            "End with the cost vs alternative trade-off"
          ]
        },
        {
          q: "Manager quality varies a lot. Some teams are under-supported. How do we address this without firing people?",
          modelAnswer: "Manager quality is the single largest lever for retention and it's also the most uncomfortable to address. I'd recommend a three-track approach. Track one, transparent assessment: we run a structured manager-effectiveness assessment using engagement data, skip-level interviews, and direct observation. We identify managers who are clearly struggling. Track two, support and development for the majority: most underperforming managers can grow into the role with coaching, structured peer learning, and clear expectations. We invest in a six-month enablement program with monthly cohort sessions, one-on-one executive coaching, and concrete development goals. Track three, role redesign for clear mismatches: a small number of managers — I estimate two or three in engineering — are clearly in the wrong role. We don't have to fire them; we offer transitions to senior IC roles where their technical strength is the right fit, with comp and title protected. This is dignified and often welcomed by the manager themselves. The cultural signal is clear: we hold a high bar for people leadership, we invest deeply in those who want to grow into it, and we honor strong contributors who are better suited to IC work without demoting them. Most managers learn the new bar from how we handle the obvious cases.",
          tips: [
            "Acknowledge it's the largest lever and most uncomfortable",
            "Three tracks with distinct content",
            "Reframe firing as role transition with protection",
            "End with the cultural signal",
            "Use precise terms: 'manager-effectiveness assessment', 'skip-level interviews'"
          ]
        },
        {
          q: "What's the governance to make sure this actually sticks? Past retention efforts have faded.",
          modelAnswer: "Governance is what separates this from another initiative that gets announced and quietly dissolves under the next operational pressure. Four components. First, executive accountability: retention becomes a named priority on the executive team's quarterly OKRs, with regretted attrition rate, engagement scores, and intent-to-stay tracked publicly. The CEO reviews this monthly and the executive team carries direct accountability. Second, a retention task force: a small standing group — HR, engineering leadership, finance — meets bi-weekly to monitor signals, course-correct on the retention plan, and surface emerging risks. The task force has authority to authorize discretionary retention actions up to defined limits. Third, structural integration: career framework work, comp review, and manager development become standing programs with named owners, not project work that ends. Fourth, the trust commitment: we publish a quarterly retention review internally with our metrics, what we did, what's working, what isn't. Most retention efforts fade because they have no organizational home and no public accountability. We solve that by giving this real organizational architecture and committing publicly to measure ourselves against the goals we set.",
          tips: [
            "Frame governance as anti-fade mechanism",
            "Four components with specific cadence and authority",
            "Connect to executive OKRs — sophisticated",
            "Address why past efforts faded",
            "End with public accountability as the credibility move"
          ]
        }
      ],
      advanced: [
        {
          q: "Give me the full strategy: diagnostic, emergency response, structural reform, governance. Make the case end-to-end.",
          modelAnswer: "The strategy rests on a core diagnostic: we are not facing a normal retention problem; we are facing the predictable consequence of an organizational stage transition that we did not adequately invest in. The company scaled past the founder-touchpoint stage — where Rachel knew everyone, where work was visible by proximity, where growth opportunities were obvious because the company was small enough that everyone saw them — and we did not build the systematic infrastructure that replaces what founder intimacy used to provide. The current attrition is the bill coming due. Treating it as a comp problem alone would close the gap on one dimension while leaving the underlying structural issue intact, and we would face the same crisis in twelve months with different people. End-to-end strategy, four phases. Phase one, emergency response, weeks one through four: stay interviews with the top 30 critical people, retention budgets of approximately $2M deployed to the top 20 with equity refreshes and accelerated band repositioning, workload pain relief for the worst-affected teams, immediate manager interventions including two or three role transitions, and personal CEO outreach to senior contributors. Phase two, structural foundation, weeks five through sixteen: build the dual-track career framework with concrete promotion criteria and five to seven visible IC promotions, complete a comprehensive comp benchmark and reposition senior bands by 10-15%, launch the six-month manager development program with cohort coaching, establish recognition rituals at the executive team level — specifically including the 'human signal' that exit interviews identified as missing. Phase three, sustainability mechanisms, weeks seventeen through thirty-two: integrate retention metrics into executive OKRs with monthly review, stand up the retention task force with defined authority, redesign workload governance so over-pace doesn't quietly accumulate, and revisit the trust commitments with the organization in a transparent review. Phase four, ongoing discipline: quarterly retention reviews, annual comp recalibration, manager development as a standing program rather than a project. Total cost approximately $4.5M annually in incremental investment, funded against approximately $8M in fully-loaded cost of regretted attrition at our current pace. The strategy is defensible because the trade-offs are deliberate, the costs are quantified against the costs of inaction, and the diagnostic is honest about why we got here. The hardest part is not the design — it's holding the discipline through the next operational crisis when this will compete with shipping deadlines for attention. That's why the governance phase matters as much as the structural phase.",
          tips: [
            "Open with the core diagnostic — stage transition framing",
            "Four phases with specific weeks, actions, and budget",
            "Quantify total cost against cost of inaction",
            "Identify the hardest part beyond design",
            "Use precise framing: 'human signal', 'workload governance'"
          ]
        },
        {
          q: "What's your honest view on the cultural dimension here? People say they feel like 'another headcount.' What's actually happening and how do we fix it without it being theater?",
          modelAnswer: "My honest view is that 'feeling like another headcount' is a precise articulation of a specific organizational failure mode that almost every company hits at this stage, and the fix is harder than the language suggests because it requires real leadership behavior change, not new programs. What's actually happening is this: in the first 150 people, the founder and a small leadership team knew the work and the people directly. Recognition was natural because it was specific and frequent. Career conversations happened in passing. Senior contributors felt seen because they were literally seen. As the company scales past 200, then 300, the founder cannot maintain that contact density. Leadership unconsciously shifts attention to systems, customers, and crises. The senior individual contributors who were once central to the founder's mental model become abstract — not because anyone decided to value them less, but because the new operating cadence doesn't include them. They notice. The departing engineers are not making this up. They were seen, and now they aren't. The fix that fails is more programs — recognition awards, all-hands shout-outs, formal feedback systems. These can help around the edges, but employees experience them as bureaucratic substitutes for what they actually want: direct, specific, unprompted expression from senior leadership that their contribution is seen and matters. The fix that works requires leadership behavior change. Concretely, you and the executive team commit time, in your calendars, to skip-level visibility with senior individual contributors — direct conversations about their work, their thinking, their growth, with no agenda beyond connection. Not a formal program. A discipline of attention. I'd recommend each executive identifies fifteen to twenty senior individual contributors in their function whose departure would meaningfully hurt the business, and commits to a substantive conversation with each one at least quarterly — not in the form of a one-on-one with their manager, but with the executive directly. That's roughly two hours a week of executive time across the team, and it produces more retention impact than any formal program we could build. The reason this works where programs don't is that the signal employees are looking for is attention from people whose attention is genuinely scarce. The CEO's attention is more credible than any award because everyone knows you don't have time. The investment of that scarce time is the signal itself. The risk of doing this badly is that it becomes performative — executives going through the motions to check a box. We mitigate by making the conversations real, by leaders following up on what they hear, and by being willing to scrap the discipline if it stops being substantive. Better to do less of this well than more of it badly.",
          tips: [
            "Reframe the problem as a stage transition failure mode",
            "Diagnose precisely what's actually happening at scale",
            "Distinguish what fails (programs) from what works (behavior)",
            "Concrete prescription with time investment",
            "Acknowledge the failure mode of the prescription itself",
            "End with the discipline principle: less well > more badly"
          ]
        },
        {
          q: "If we execute well, where do you expect us to be in twelve months? Be specific and honest about what stays hard.",
          modelAnswer: "In twelve months with strong execution, I'd expect three categories of change. Category one, measurable progress. Regretted attrition rate among senior engineering and product talent drops from the current trajectory of roughly 18% TTM back toward 10-12%, with the comp adjustments and immediate retention work doing the heaviest lifting in months one through six and the structural changes carrying through months seven through twelve. Engagement scores in the top quartile return to the 73-75% range, intent-to-stay returns to 80% plus, and manager-effectiveness scores in engineering rise into the high 60s with continued upward trajectory. Career framework launches by month six with concrete IC promotions visible by month nine. Comp benchmarking and band repositioning complete in month four. Manager development program completes its first cohort in month nine. Category two, durable shifts. The organizational muscle around manager development becomes a standing capability rather than a one-time program. Skip-level visibility from executive leadership becomes an embedded calendar discipline rather than an initiative. Career pathing transparency creates clearer growth expectations across the organization, reducing the ambient anxiety that contributed to the cluster. The dual-track structure with visibly populated senior IC roles changes recruitment competitiveness in subtle but real ways. Category three, what stays hard. We will still lose people to comp gaps when tier-1 competitors pay 40% above our levels — we cannot fully close that, and we shouldn't try. We will still see periodic attrition clusters when external conditions shift — that's normal. The 'human signal' work requires sustained leadership behavior; if executive attention shifts to a different crisis in month eight, that discipline can erode quickly and we'd see the soft factor scores soften again within two quarters. The hardest thing to hold is the workload sustainability commitment. Growth pressure will create the exact same over-pace dynamic again unless we build governance around capacity that holds even when the business is asking us to push. That's organizational maturity that takes longer than twelve months to build. My honest assessment is that with strong execution we materially reduce the immediate crisis, build infrastructure that prevents the same crisis from recurring, and begin the longer organizational maturation work. We do not solve retention permanently — no one does — but we move from reactive crisis response to sustained discipline, which is the actual goal.",
          tips: [
            "Three categories: measurable, durable, what stays hard",
            "Specific metric targets with timing",
            "Honest about what doesn't get solved",
            "Identify the structural risk (executive attention shifts)",
            "End with realistic framing: from reactive to disciplined, not solved"
          ]
        }
      ]
    },

    glossary: {
      "retention": "리텐션 (직원 유지)",
      "retention strategy": "리텐션 전략",
      "key talent": "핵심 인재",
      "regretted attrition": "후회되는 이직 (떠나면 안 되는 사람의 이탈)",
      "regretted loss": "후회되는 손실",
      "attrition cluster": "이직 클러스터 (단기간 다수 이탈)",
      "stay interview": "스테이 인터뷰 (잔류 의향 점검 면담)",
      "exit interview": "퇴직 인터뷰",
      "intent-to-stay": "잔류 의향 (재직 지속 의지)",
      "engagement score": "직원 몰입 점수",
      "pulse survey": "펄스 설문 (주기적 단기 설문)",
      "retention bonus": "리텐션 보너스 (잔류 인센티브)",
      "equity refresh": "지분 추가 부여",
      "vesting cliff": "베스팅 클리프 (첫 권리 확정까지 유예)",
      "burnout": "번아웃 (소진)",
      "over-pace": "과속 (지속 불가능한 업무 강도)",
      "career pathing": "커리어 경로 설계",
      "dual-track career framework": "이중 트랙 커리어 체계 (IC/매니저)",
      "IC track": "Individual Contributor 트랙 (비관리직 전문가 경로)",
      "manager track": "관리자 트랙",
      "principal engineer": "프린시플 엔지니어 (시니어 IC 직급)",
      "skip-level": "한 단계 건너뛴 상위 리더와의 소통",
      "manager-effectiveness": "매니저 효과성",
      "manager-effectiveness assessment": "매니저 효과성 평가",
      "human signal": "휴먼 시그널 (개인 기여가 보이고 가치 있다는 직접 표현)",
      "founder-touchpoint": "창업자 터치포인트 (창업자가 직접 닿는 단계)",
      "stage transition": "단계 전환 (조직 규모 변화에 따른 운영 전환)",
      "TTM": "Trailing Twelve Months, 직전 12개월",
      "fully-loaded cost": "총 비용 (이탈 시 채용·온보딩·생산성 손실 포함)",
      "workload governance": "업무량 거버넌스 (지속 가능 운영 체계)",
      "OKR": "Objectives and Key Results, 목표와 핵심결과"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CASES };
}
