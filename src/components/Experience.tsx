import { experience } from '../data/profile';

type ExperienceProps = {
  standalone?: boolean;
};

export default function Experience({ standalone = false }: ExperienceProps) {
  return (
    <section
      id={standalone ? undefined : 'experience'}
      aria-labelledby={standalone ? undefined : 'timeline-heading'}
    >
      {!standalone && (
        <>
          <p className="section-kicker">Experience</p>
          <h2 id="timeline-heading" className="section-heading mb-12 max-w-3xl">
            From quality operations to customer insights, SaaS growth, and product operations leadership.
          </h2>
        </>
      )}
      <div className="space-y-6">
        {experience.map((item) => (
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
  );
}
