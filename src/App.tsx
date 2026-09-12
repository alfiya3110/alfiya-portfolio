const metrics = [
  { value: '8+ years', label: 'across PropTech customer insights, product operations, and customer success' },
  { value: '90+', label: 'product and operational initiatives delivered' },
  { value: '95%', label: 'on-time execution across customer and product initiatives' },
  { value: '98%', label: 'customer retention across strategic builder accounts' },
  { value: '94%', label: 'CSAT achieved through customer success and service improvements' },
  { value: '50%', label: 'turnaround-time reduction through operational process improvements' },
  { value: '35%-51%', label: 'year-over-year revenue growth contribution' },
];

const timeline = [
  {
    period: 'Jul 2024 - Present',
    role: 'Customer Insights Manager',
    company: 'Housing.com',
    location: 'Chennai, India',
    points: [
      'Manages a portfolio of 120+ builders, developers, and broker accounts across Chennai, Coimbatore, and Tier-II markets.',
      'Works closely with Product and Engineering teams to convert customer feedback into product enhancements and better user experiences.',
      'Improved CSAT to 94%, achieved 98% customer retention, contributed to 35%-51% YoY regional revenue growth, and reduced turnaround time by 50%.',
      'Uses SQL, Databricks, dashboards, and AI tools to analyze customer behavior and improve campaign performance.',
    ],
  },
  {
    period: 'Sep 2023 - Jun 2024',
    role: 'Product Operations & Customer Success Manager',
    company: 'Magicbricks (Times Internet)',
    location: 'Noida, India',
    points: [
      'Delivered 70+ product and customer experience initiatives with 95% on-time completion.',
      'Implemented proactive engagement strategies that increased account retention by 35%.',
      'Worked with Product, Engineering, and Sales teams to improve onboarding and the overall customer experience.',
      'Prepared customer performance reports and adoption insights that supported product improvements.',
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
    skills: ['Product Operations', 'Product & Project Management', 'Agile/Scrum', 'Sprint Planning', 'Jira', 'Confluence', 'GTM Rollouts'],
  },
  {
    title: 'Customer Success',
    skills: ['Customer Insights', 'Customer Lifecycle Management', 'Strategic Account Management', 'Customer Retention', 'Product Adoption', 'QBR / EBR'],
  },
  {
    title: 'AI & Analytics',
    skills: ['Voice of Customer', 'Generative AI', 'AI Tools', 'SQL', 'Databricks', 'Dashboards', 'Power BI', 'Tableau'],
  },
  {
    title: 'Operations Tools',
    skills: ['SaaS', 'Revenue Growth', 'Salesforce', 'Zoho CRM', 'Freshdesk', 'LeadSquared', 'Jenkins', 'Microsoft Excel'],
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
                Customer Insights | Product Operations | Customer Success | AI | SaaS
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Alfiya Zumana connects customer insight with product, revenue, and operational growth.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/78">
                Customer Insights Manager with 8+ years across Housing.com, Magicbricks, and
                Info Edge, specializing in customer success, product operations, product and
                project management, revenue growth, AI, and SaaS-led campaign performance.
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
                <h2 className="mt-4 text-2xl font-semibold text-ivory">Customer Insights Manager at Housing.com</h2>
                <p className="mt-4 text-ivory/75">
                  Managing customer success and product operations across Chennai, Coimbatore,
                  and Tier-II markets while partnering with Product, Engineering, Sales,
                  Marketing, and Business teams.
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
            Metrics reflect Alfiya's LinkedIn profile and her work across customer insights,
            product operations, customer success, and campaign performance.
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
              Alfiya is a Customer Insights Manager and cross-functional Product Operations,
              Customer Success, Product and Project Management, Revenue Growth, AI, and SaaS
              professional with 8+ years in PropTech organizations including Housing.com,
              Magicbricks, and Info Edge.
            </p>
            <p>
              Her work connects customer behavior analysis, AI-enabled Voice of Customer,
              dashboards, onboarding, QBRs, campaign operations, and executive reporting. She
              partners across Product, Engineering, Sales, Marketing, and Business teams to
              improve adoption, product feedback loops, customer experience, retention, and
              revenue outcomes.
            </p>
          </div>
        </div>
      </section>

      <section id="work" aria-labelledby="timeline-heading" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <p className="section-kicker">Professional Timeline</p>
        <h2 id="timeline-heading" className="section-heading max-w-3xl">From quality operations to customer insights, SaaS growth, and product operations leadership.</h2>
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
            <h2 id="skills-heading" className="section-heading">A toolkit spanning insight, execution, SaaS operations, and business growth.</h2>
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
            Open to customer insights, product operations, customer success, AI, SaaS, and revenue growth conversations.
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
