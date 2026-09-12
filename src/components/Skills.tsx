import { skillGroups } from '../data/profile';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 id="skills-heading" className="section-heading">
            A toolkit spanning insight, execution, SaaS operations, and business growth.
          </h2>
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
  );
}
