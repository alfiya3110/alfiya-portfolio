import { projects } from '../data/profile';

type ProjectsProps = {
  standalone?: boolean;
};

export default function Projects({ standalone = false }: ProjectsProps) {
  return (
    <section
      id={standalone ? undefined : 'projects'}
      aria-labelledby={standalone ? undefined : 'projects-heading'}
    >
      {!standalone && (
        <>
          <p className="section-kicker">Featured Projects</p>
          <h2 id="projects-heading" className="section-heading mb-12 max-w-3xl">
            Practical AI concepts for converting customer conversations into operating intelligence.
          </h2>
        </>
      )}
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3 className="text-2xl font-semibold text-navy">{project.title}</h3>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-teal-dark">Context</p>
            <p className="mt-3 leading-7 text-slate">{project.context}</p>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-dark">Approach</p>
            <ul className="mt-3 space-y-3 text-slate">
              {project.work.map((work) => (
                <li key={work} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                  <span>{work}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-dark">Outcome</p>
            <p className="mt-3 leading-7 text-slate">{project.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
