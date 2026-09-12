import { certifications, education } from '../data/profile';

type EducationProps = {
  standalone?: boolean;
};

export default function Education({ standalone = false }: EducationProps) {
  return (
    <section aria-labelledby={standalone ? undefined : 'education-heading'}>
      {!standalone && (
        <div className="mb-10">
          <p className="section-kicker">Education</p>
          <h2 id="education-heading" className="section-heading">Academic foundation.</h2>
        </div>
      )}
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          {standalone && <p className="section-kicker">Education</p>}
          <div className={standalone ? 'mt-4 space-y-4' : 'space-y-4'}>
            {education.map((item) => (
              <article key={item.degree} className="card">
                <h3 className="text-xl font-semibold text-navy">{item.degree}</h3>
                <p className="mt-2 text-slate">{item.school}</p>
                <p className="mt-1 text-sm font-medium text-gold">{item.period}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <p className="section-kicker">Certifications</p>
          <div className="mt-4 space-y-4">
            {certifications.map((certification) => (
              <article key={certification.name} className="card">
                <h3 className="text-lg font-semibold text-navy">{certification.name}</h3>
                <p className="mt-2 text-slate">{certification.issuer}</p>
                <p className="mt-1 text-sm font-medium text-gold">Issued {certification.issued}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
