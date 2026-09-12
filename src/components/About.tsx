import { about } from '../data/profile';

type AboutProps = {
  standalone?: boolean;
};

export default function About({ standalone = false }: AboutProps) {
  return (
    <section
      aria-labelledby={standalone ? undefined : 'about-heading'}
      className={standalone ? 'px-6 py-20 sm:px-10 lg:px-12' : 'bg-cream px-6 py-20 sm:px-10 lg:px-12'}
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {!standalone && (
          <div>
            <p className="section-kicker">About</p>
            <h2 id="about-heading" className="section-heading">{about.heading}</h2>
          </div>
        )}
        <div className={`space-y-6 text-lg leading-8 text-slate ${standalone ? 'lg:col-span-2' : ''}`}>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {about.industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full bg-teal/12 px-4 py-2 text-sm font-medium text-teal-dark"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
