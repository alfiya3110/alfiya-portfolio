import { about } from '../data/profile';

type AboutProps = {
  standalone?: boolean;
};

export default function About({ standalone = false }: AboutProps) {
  return (
    <section aria-labelledby={standalone ? undefined : 'about-heading'}>
      {!standalone && (
        <div className="mb-10">
          <p className="section-kicker">About</p>
          <h2 id="about-heading" className="section-heading">{about.heading}</h2>
        </div>
      )}
      <div className="space-y-6 text-lg leading-8 text-slate">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="flex flex-wrap gap-2 pt-2">
          {about.industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-teal/20 bg-teal/10 px-4 py-2 text-sm font-medium text-teal-dark"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
