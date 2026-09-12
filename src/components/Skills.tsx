import { skillGroups } from '../data/profile';

type SkillsProps = {
  standalone?: boolean;
};

export default function Skills({ standalone = false }: SkillsProps) {
  return (
    <section
      id={standalone ? undefined : 'skills'}
      aria-labelledby={standalone ? undefined : 'skills-heading'}
    >
      {!standalone && (
        <div className="mb-10">
          <p className="section-kicker">Skills</p>
            <h2 id="skills-heading" className="section-heading">
              Business analysis, data analytics, and product ownership capabilities.
            </h2>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="card">
            <h3 className="text-xl font-semibold text-navy">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal/25 bg-gradient-to-r from-teal/10 to-gold/5 px-3 py-2 text-sm font-medium text-teal-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
