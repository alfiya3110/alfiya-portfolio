import { Link } from 'react-router-dom';
import { currentFocus, profile } from '../data/profile';

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFileName}`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(92,156,154,0.32),_transparent_34rem)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-teal-light">
              {profile.headline}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {profile.tagline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/78">{profile.summary}</p>
            <p className="mt-4 text-sm font-medium text-teal-light">{profile.location}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center justify-center rounded-full bg-teal px-6 py-3 text-sm font-bold text-navy shadow-xl shadow-black/20 transition hover:bg-teal-light focus:outline-none focus:ring-2 focus:ring-teal-light focus:ring-offset-2 focus:ring-offset-navy"
              >
                Download Resume
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-ivory/30 px-6 py-3 text-sm font-bold text-ivory transition hover:border-teal-light hover:text-teal-light focus:outline-none focus:ring-2 focus:ring-teal-light focus:ring-offset-2 focus:ring-offset-navy"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-ivory/12 bg-ivory/8 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] border border-teal-light/30 bg-navy/70 p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-teal-light">Current Focus</p>
              <h2 className="mt-4 text-2xl font-semibold text-ivory">{currentFocus.role}</h2>
              <p className="mt-4 text-ivory/75">{currentFocus.description}</p>
              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-ivory/10 p-4">
                  <dt className="text-sm text-ivory/60">Markets</dt>
                  <dd className="mt-1 font-semibold">{currentFocus.markets}</dd>
                </div>
                <div className="rounded-2xl bg-ivory/10 p-4">
                  <dt className="text-sm text-ivory/60">Portfolio</dt>
                  <dd className="mt-1 font-semibold">{currentFocus.portfolio}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
