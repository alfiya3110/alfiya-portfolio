const metrics = [
  { value: '9+', label: 'years across PropTech product operations and customer success' },
  { value: '90+', label: 'product and operational initiatives delivered' },
  { value: '95%', label: 'on-time execution across planned delivery work' },
  { value: '98%', label: 'customer retention across strategic builder accounts' },
  { value: '60% to 90%', label: 'CSAT improvement within one year' },
  { value: '35%-51%', label: 'year-over-year revenue growth contribution' },
];

const timeline = [
  {
    period: 'Jul 2024 - Present',
    role: 'Customer Insights & Product Operations Lead',
    company: 'REA India (Housing.com)',
    location: 'Chennai, India',
    points: [
      'Leads regional rollout and execution of product features across Chennai, Coimbatore, and Tier-II markets with a 30-40 member team.',
      'Partners with Product and Engineering teams to triage customer feedback, prioritize Jira backlog tickets, and support 95% on-time sprint delivery.',
      'Directs client operations across 120+ strategic builder accounts, supporting 98% retention and 35%-51% YoY revenue growth.',
    ],
  },
  {
    period: 'Sep 2023 - Jun 2024',
    role: 'Product Operations & Customer Success Manager',
    company: 'Magicbricks (Times Internet)',
    location: 'Noida, India',
    points: [
      'Delivered 70+ product and customer experience initiatives with 95% on-time completion.',
      'Collaborated with Engineering, UX, Sales, and Marketing teams to streamline product operations and customer feedback loops.',
      'Implemented proactive engagement strategies that increased account retention by 35%.',
    ],
  },
  {
    period: 'Apr 2022 - Sep 2023',
    role: 'Assistant Manager - Client Delivery & Product Operations',
    company: 'Info Edge India Ltd (99acres.com)',
    location: 'Noida, India',
    points: [
      'Managed delivery for property marketing solutions, improving new client acquisition by 25% and reducing churn by 20%.',
      'Built customer health dashboards and Power BI scorecards to track SLA adherence, engagement, and product performance.',
    ],
  },
  {
    period: 'May 2019 - Mar 2022',
    role: 'Client Servicing & Campaign Manager',
    company: 'Info Edge India Ltd',
    location: 'Noida, India',
    points: [
      'Managed multi-channel digital campaign operations and enterprise accounts valued over Rs. 10 Crore.',
      'Resolved escalations while maintaining SLA commitments and strengthening long-term client relationships.',
    ],
  },
  {
    period: 'Aug 2015 - Feb 2017',
    role: 'Lead Management & Quality Analyst',
    company: 'Info Edge India Ltd',
    location: 'Noida, India',
    points: [
      'Standardized quality inspection workflows for customer interactions and service protocols.',
      'Improved lead delivery and reporting accuracy by 15%.',
    ],
  },
];

const caseStudies = [
  {
    title: 'AI-Powered VoC Product Discovery Engine',
    context:
      'Customer feedback, CRM notes, and sales interactions contained recurring product signals that needed a structured path into backlog grooming.',
    work: [
      'Authored functional requirements and workflow maps for an AI-enabled VoC framework using Claude and Databricks.',
      'Translated recurring customer pain points into product requirements and Jira backlog inputs.',
      'Designed an operating model for feedback triage, executive visibility, and product prioritization.',
    ],
    outcome:
      'Created a repeatable discovery workflow that connected unstructured customer interaction logs to actionable product requirements.',
  },
  {
    title: 'Generative AI for Customer Intent Intelligence',
    context:
      'Sales and customer success teams needed a sharper way to qualify opportunities and recommend next-best actions from unstructured conversations.',
    work: [
      'Developed a concept for using Generative AI to identify customer intent and prioritize high-value opportunities.',
      'Defined a scoring model covering sentiment analysis, lead scoring, customer intent detection, and next-best-action recommendations.',
      'Prepared an implementation roadmap and business impact analysis for improving adoption and sales effectiveness.',
    ],
    outcome:
      'Produced an executive framework for applying AI-assisted customer insights to lead qualification, campaign decisions, and customer engagement.',
  },
];

const skillGroups = [
  {
    title: 'Product & Delivery',
    skills: ['Product Operations', 'Agile/Scrum', 'Sprint Planning', 'Jira', 'Confluence', 'PRD Requirements', 'GTM Rollouts'],
  },
  {
    title: 'Customer Success',
    skills: ['Customer Lifecycle Management', 'Strategic Account Management', 'Customer Retention', 'Product Adoption', 'QBR / EBR', 'Customer Experience'],
  },
  {
    title: 'AI & Analytics',
    skills: ['Voice of Customer', 'Generative AI', 'ChatGPT', 'Google Gemini', 'Claude', 'SQL', 'Databricks', 'Power BI', 'Tableau'],
  },
  {
    title: 'Operations Tools',
    skills: ['Salesforce', 'Zoho CRM', 'Freshdesk', 'LeadSquared', 'Jenkins', 'Zapier', 'Microsoft Excel'],
  },
];

const education = [
  {
    school: 'Annamalai University',
    degree: 'MBA - Human Resource Management',
    period: '2011 - 2013',
  },
  {
    school: 'Delhi University',
    degree: 'B.A. (Hons), History',
    period: '2007 - 2010',
  },
];

const certifications = ['Google Analytics Certification', 'Digital Marketing Certification - Udemy'];
const resumeUrl = `${import.meta.env.BASE_URL}Alfiya_Zumana_Product_Project_Manager.pdf`;

function App() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <section className="relative overflow-hidden bg-navy text-ivory">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(92,156,154,0.32),_transparent_34rem)]" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
          <nav className="flex items-center justify-between gap-6" aria-label="Primary navigation">
            <a href="#top" className="text-sm font-semibold tracking-[0.35em] text-teal-light">
              AZ
            </a>
            <div className="hidden items-center gap-6 text-sm text-ivory/80 md:flex">
              <a href="#work" className="transition hover:text-teal-light">Work</a>
              <a href="#projects" className="transition hover:text-teal-light">Projects</a>
              <a href="#skills" className="transition hover:text-teal-light">Skills</a>
              <a href="#contact" className="transition hover:text-teal-light">Contact</a>
            </div>
          </nav>

          <div id="top" className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-teal-light">
                Customer Insights | Product Operations | Agile Delivery
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Alfiya Zumana turns customer signals into product and growth outcomes.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/78">
                Product Operations and Customer Success leader with 9+ years across REA India,
                Magicbricks, and Info Edge, specializing in AI-enabled VoC, GTM execution,
                stakeholder alignment, and data-driven campaign performance.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-bold text-navy shadow-xl shadow-black/20 transition hover:bg-teal-light focus:outline-none focus:ring-2 focus:ring-teal-light focus:ring-offset-2 focus:ring-offset-navy"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-ivory/30 px-6 py-3 text-sm font-bold text-ivory transition hover:border-teal-light hover:text-teal-light focus:outline-none focus:ring-2 focus:ring-teal-light focus:ring-offset-2 focus:ring-offset-navy"
                >
                  View AI / VoC Work
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-ivory/12 bg-ivory/8 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-teal-light/30 bg-navy/70 p-7">
                <p className="text-sm uppercase tracking-[0.28em] text-teal-light">Current Focus</p>
                <h2 className="mt-4 text-2xl font-semibold text-ivory">Customer Insights Manager at REA India</h2>
                <p className="mt-4 text-ivory/75">
                  Leading regional customer success and product operations across Chennai,
                  Coimbatore, and Tier-II markets while partnering with Product, Engineering,
                  Sales, Marketing, and Business teams.
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-ivory/10 p-4">
                    <dt className="text-sm text-ivory/60">Markets</dt>
                    <dd className="mt-1 font-semibold">Chennai + Tier-II</dd>
                  </div>
                  <div className="rounded-2xl bg-ivory/10 p-4">
                    <dt className="text-sm text-ivory/60">Portfolio</dt>
                    <dd className="mt-1 font-semibold">120+ accounts</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="impact-heading" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Impact Metrics</p>
            <h2 id="impact-heading" className="section-heading">Measured outcomes across product, delivery, and customer success.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate">
            Metrics are sourced from Alfiya's resumes and reflect her product operations,
            customer success, and campaign delivery experience.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <article key={metric.label} className="card">
              <p className="text-4xl font-semibold text-teal-dark">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="about-heading" className="bg-cream px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">About</p>
            <h2 id="about-heading" className="section-heading">A customer-led operator for complex digital platforms.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate">
            <p>
              Alfiya is a cross-functional Product Operations, Customer Success, and Business
              Growth professional with 9+ years in PropTech organizations including REA India
              (Housing.com), Times Internet (Magicbricks), and Info Edge (99acres.com).
            </p>
            <p>
              Her work connects customer insight, Agile delivery, campaign operations, and
              executive reporting. She partners across Product, Engineering, Sales, Marketing,
              and Business teams to improve adoption, lead quality, campaign performance, and
              retention.
            </p>
          </div>
        </div>
      </section>

      <section id="work" aria-labelledby="timeline-heading" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <p className="section-kicker">Professional Timeline</p>
        <h2 id="timeline-heading" className="section-heading max-w-3xl">From quality operations to customer insights and product delivery leadership.</h2>
        <div className="mt-12 space-y-6">
          {timeline.map((item) => (
            <article key={`${item.company}-${item.period}`} className="card grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-dark">{item.period}</p>
                <p className="mt-3 text-sm text-slate">{item.location}</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-navy">{item.role}</h3>
                <p className="mt-1 font-medium text-teal-dark">{item.company}</p>
                <ul className="mt-5 space-y-3 text-slate">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="bg-navy px-6 py-20 text-ivory sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker text-teal-light">AI / VoC Case Studies</p>
          <h2 id="projects-heading" className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Practical AI concepts for converting customer conversations into operating intelligence.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((project) => (
              <article key={project.title} className="rounded-[2rem] border border-ivory/12 bg-ivory/8 p-7 shadow-xl">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-teal-light">Context</p>
                <p className="mt-3 leading-7 text-ivory/75">{project.context}</p>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-light">Approach</p>
                <ul className="mt-3 space-y-3 text-ivory/75">
                  {project.work.map((work) => (
                    <li key={work} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-light" aria-hidden="true" />
                      <span>{work}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-light">Outcome</p>
                <p className="mt-3 leading-7 text-ivory/75">{project.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="section-kicker">Skills</p>
            <h2 id="skills-heading" className="section-heading">A toolkit spanning insight, execution, and business growth.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="card">
                <h3 className="text-xl font-semibold text-navy">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-teal/12 px-3 py-2 text-sm font-medium text-teal-dark">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="education-heading" className="bg-cream px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="section-kicker">Education</p>
            <h2 id="education-heading" className="section-heading">Academic foundation.</h2>
            <div className="mt-8 space-y-4">
              {education.map((item) => (
                <article key={item.degree} className="card bg-ivory">
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-2 text-slate">{item.school}</p>
                  <p className="mt-1 text-sm font-medium text-teal-dark">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="section-kicker">Certifications</p>
            <h2 className="section-heading">Continuous learning.</h2>
            <div className="mt-8 space-y-4">
              {certifications.map((certification) => (
                <article key={certification} className="card bg-ivory">
                  <p className="text-xl font-semibold">{certification}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-navy p-8 text-ivory shadow-2xl sm:p-12 lg:p-16">
          <p className="section-kicker text-teal-light">Contact</p>
          <h2 id="contact-heading" className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Open to product operations, customer success, and AI-enabled customer insights conversations.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a className="contact-link" href="mailto:alfiyazumana1989@gmail.com">Email</a>
            <a className="contact-link" href="tel:+919360306954">Phone</a>
            <a className="contact-link" href="https://www.linkedin.com/in/zumana-zumana" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="contact-link" href={resumeUrl} download>
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
