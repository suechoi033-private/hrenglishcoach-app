const CASES = [
  {
    id: 'restructuring-01',
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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CASES };
}
