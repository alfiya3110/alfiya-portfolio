import { caseStudies } from '../data/profile';

type ProjectsProps = {
  standalone?: boolean;
};

function CaseStudySection({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <>
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-gold">{label}</p>
      <ul className="mt-3 space-y-3 text-slate">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Projects({ standalone = false }: ProjectsProps) {
  return (
    <section
      id={standalone ? undefined : 'case-studies'}
      aria-labelledby={standalone ? undefined : 'case-studies-heading'}
    >
      {!standalone && (
        <>
          <p className="section-kicker">Case Studies</p>
          <h2 id="case-studies-heading" className="section-heading mb-12 max-w-3xl">
            Business analysis and product discovery work that connects data, requirements, and outcomes.
          </h2>
        </>
      )}
      <div className="grid gap-6 lg:grid-cols-2">
        {caseStudies.map((study) => (
          <article key={study.title} className="card lg:col-span-2">
            <h3 className="text-2xl font-semibold text-navy">{study.title}</h3>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-gold">Business Problem</p>
            <p className="mt-3 leading-7 text-slate">{study.businessProblem}</p>
            <CaseStudySection label="Business Analysis" items={study.baWork} />
            {study.analyticsWork && (
              <CaseStudySection label="Data & Analytics" items={study.analyticsWork} />
            )}
            {study.poWork && <CaseStudySection label="Product Ownership" items={study.poWork} />}
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-gold">Outcome</p>
            <p className="mt-3 leading-7 text-slate">{study.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
