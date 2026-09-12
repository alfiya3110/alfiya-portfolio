import { projects } from '../data/profile';

type ProjectsProps = {
  standalone?: boolean;
};

export default function Projects({ standalone = false }: ProjectsProps) {
  return (
    <section
      id={standalone ? undefined : 'projects'}
      aria-labelledby={standalone ? undefined : 'projects-heading'}
      className={`px-6 py-20 sm:px-10 lg:px-12 ${standalone ? 'bg-navy text-ivory' : 'bg-navy text-ivory'}`}
    >
      <div className="mx-auto max-w-7xl">
        {!standalone && (
          <>
            <p className="section-kicker text-teal-light">Featured Projects</p>
            <h2 id="projects-heading" className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Practical AI concepts for converting customer conversations into operating intelligence.
            </h2>
          </>
        )}
        <div className={standalone ? 'grid gap-6 lg:grid-cols-2' : 'mt-12 grid gap-6 lg:grid-cols-2'}>
          {projects.map((project) => (
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
  );
}
