import { Link } from 'react-router-dom';
import { currentFocus, profile } from '../data/profile';

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFileName}`;

export default function Hero() {
  return (
    <section className="hero-section relative overflow-hidden bg-navy text-ivory">
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute -top-24 right-0 h-[32rem] w-[32rem] rounded-full bg-teal/20 blur-3xl" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-dark/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-28">
        <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="max-w-3xl">
            <div className="mb-8 flex flex-wrap gap-2">
              {profile.skillTags.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-teal-light/25 bg-teal/10 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-teal-light sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-teal-light/80">
              {profile.roleTitle}
            </p>

            <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-ivory">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-2xl text-2xl font-light leading-snug text-ivory/90 sm:text-3xl">
              {profile.valueProposition}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-ivory/60 sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-ivory/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" aria-hidden="true" />
              {profile.location}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center justify-center rounded-xl bg-teal px-7 py-3.5 text-sm font-bold text-navy shadow-lg shadow-teal/20 transition hover:bg-teal-light hover:shadow-teal/30 focus:outline-none focus:ring-2 focus:ring-teal-light focus:ring-offset-2 focus:ring-offset-navy"
              >
                Download Resume
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl border border-ivory/20 bg-ivory/5 px-7 py-3.5 text-sm font-semibold text-ivory backdrop-blur transition hover:border-teal-light/50 hover:bg-ivory/10 hover:text-teal-light focus:outline-none focus:ring-2 focus:ring-teal-light focus:ring-offset-2 focus:ring-offset-navy"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <aside className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-teal/30 via-transparent to-teal-dark/20 blur-sm" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-ivory/10 bg-ivory/5 p-1 shadow-2xl backdrop-blur-md">
              <div className="rounded-[1.85rem] bg-navy/80 p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-light">
                    Current Focus
                  </p>
                  <span className="rounded-full bg-teal/15 px-3 py-1 text-xs font-medium text-teal-light">
                    Active
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-semibold leading-snug text-ivory sm:text-2xl">
                  {currentFocus.role}
                </h2>

                <p className="mt-4 text-sm leading-7 text-ivory/65 sm:text-base">
                  {currentFocus.description}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-ivory/8 bg-ivory/5 p-4">
                    <dt className="text-xs uppercase tracking-wider text-ivory/45">Markets</dt>
                    <dd className="mt-2 text-sm font-semibold text-ivory">{currentFocus.markets}</dd>
                  </div>
                  <div className="rounded-xl border border-ivory/8 bg-ivory/5 p-4">
                    <dt className="text-xs uppercase tracking-wider text-ivory/45">Portfolio</dt>
                    <dd className="mt-2 text-sm font-semibold text-ivory">{currentFocus.portfolio}</dd>
                  </div>
                </dl>

                <div className="mt-6 border-t border-ivory/10 pt-5">
                  <p className="text-xs text-ivory/40">Key outcomes at Housing.com</p>
                  <div className="mt-3 flex flex-wrap gap-4">
                    <div>
                      <p className="text-2xl font-bold text-teal-light">94%</p>
                      <p className="text-xs text-ivory/50">CSAT</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-teal-light">98%</p>
                      <p className="text-xs text-ivory/50">Retention</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-teal-light">120+</p>
                      <p className="text-xs text-ivory/50">Accounts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
