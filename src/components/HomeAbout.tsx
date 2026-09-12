import { about, transitionFocus } from '../data/profile';

export default function HomeAbout() {
  return (
    <section id="about" aria-labelledby="about-heading" className="home-about-section">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">About</p>
          <h2 id="about-heading" className="section-heading">
            {about.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <article className="home-bento-card lg:col-span-7 lg:row-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark">Career Direction</p>
            <p className="mt-4 text-lg font-medium leading-8 text-navy sm:text-xl">
              {about.transitionFocus}
            </p>
          </article>

          <article className="home-bento-card home-bento-accent lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark">Target Focus</p>
            <p className="mt-3 text-2xl font-bold text-navy">{transitionFocus.title}</p>
            <p className="mt-2 text-sm text-slate">{transitionFocus.targetRoles}</p>
          </article>

          <article className="home-bento-card lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark">Experience</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {transitionFocus.strengths.map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-bold text-teal-dark">{item.value}</p>
                  <p className="mt-1 text-xs leading-4 text-slate">{item.label}</p>
                </div>
              ))}
            </div>
          </article>

          {about.paragraphs.map((paragraph, index) => (
            <article key={paragraph} className={`home-bento-card lg:col-span-6 ${index === 0 ? 'lg:col-start-1' : ''}`}>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark">
                {index === 0 ? 'Background' : 'How I Work'}
              </p>
              <p className="mt-4 text-base leading-7 text-slate sm:text-lg">{paragraph}</p>
            </article>
          ))}

          <article className="home-bento-card lg:col-span-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-dark">Industries</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {about.industries.map((industry) => (
                <span key={industry} className="home-industry-pill">
                  {industry}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm text-slate">
              Domains: {transitionFocus.domains}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
