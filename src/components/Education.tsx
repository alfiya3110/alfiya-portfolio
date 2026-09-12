import { certifications, education } from '../data/profile';

export default function Education() {
  return (
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
  );
}
