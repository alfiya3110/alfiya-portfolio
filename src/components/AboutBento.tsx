import { about, transitionFocus } from '../data/profile';

export default function AboutBento() {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
      <article className="home-bento-card lg:col-span-7 lg:row-span-2">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Career Direction</p>
        <p className="mt-4 text-lg font-medium leading-8 text-navy sm:text-xl">
          {about.transitionFocus}
        </p>
      </article>

      <article className="home-bento-card home-bento-accent lg:col-span-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Target Focus</p>
        <p className="mt-3 text-2xl font-bold text-navy">{transitionFocus.title}</p>
        <p className="mt-2 text-sm text-slate">{transitionFocus.targetRoles}</p>
      </article>

      <article className="home-bento-card lg:col-span-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Experience</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {transitionFocus.strengths.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold text-gold">{item.value}</p>
              <p className="mt-1 text-xs leading-4 text-slate">{item.label}</p>
            </div>
          ))}
        </div>
      </article>

      {about.paragraphs.map((paragraph, index) => (
        <article key={paragraph} className="home-bento-card lg:col-span-6">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">
            {index === 0 ? 'Background' : 'How I Work'}
          </p>
          <p className="mt-4 text-base leading-7 text-slate sm:text-lg">{paragraph}</p>
        </article>
      ))}

      <article className="home-bento-card lg:col-span-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Industries</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {about.industries.map((industry) => (
            <span key={industry} className="home-industry-pill">
              {industry}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm text-slate">Domains: {transitionFocus.domains}</p>
      </article>
    </div>
  );
}
