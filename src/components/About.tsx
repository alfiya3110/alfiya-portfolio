import { about } from '../data/profile';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-cream px-6 py-20 sm:px-10 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">About</p>
          <h2 id="about-heading" className="section-heading">{about.heading}</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate">
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
