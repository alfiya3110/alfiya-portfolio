import { Link } from 'react-router-dom';
import { profile, transitionFocus } from '../data/profile';

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFileName}`;

export default function Hero() {
  return (
    <section className="hero-section page-header relative overflow-hidden border-b border-ivory/10 text-ivory">
      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-12 sm:px-10 sm:pb-24 sm:pt-16 lg:px-12 lg:pb-28">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="home-badge">{profile.roleTitle}</span>
          <span className="home-badge">{profile.location}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ivory/60">Portfolio</p>
            <h1 className="mt-4 text-[clamp(2.25rem,6vw,5rem)] font-bold leading-tight tracking-tight text-ivory">
              {profile.name}
            </h1>

            <p className="mt-8 max-w-2xl text-2xl font-light leading-snug text-ivory/85 sm:text-[1.75rem]">
              {profile.valueProposition}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-ivory/65 sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.skillTags.map((skill) => (
                <span key={skill} className="home-skill-pill">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href={resumeUrl} download className="home-btn-primary">
                Download Resume
              </a>
              <Link to="/about" className="home-btn-secondary">
                About Me
              </Link>
              <Link to="/projects" className="home-btn-secondary">
                Case Studies
              </Link>
            </div>
          </div>

          <aside className="home-transition-card">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivory/60">
                {transitionFocus.label}
              </p>
              <span className="rounded-full border border-ivory/20 bg-ivory/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ivory/70">
                {transitionFocus.status}
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold leading-tight text-ivory sm:text-[1.65rem]">
              {transitionFocus.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-ivory/65 sm:text-[0.95rem]">
              {transitionFocus.description}
            </p>

            <div className="mt-8 space-y-3">
              <div className="home-transition-row">
                <span className="home-transition-label">Target Roles</span>
                <span className="home-transition-value">{transitionFocus.targetRoles}</span>
              </div>
              <div className="home-transition-row">
                <span className="home-transition-label">Domains</span>
                <span className="home-transition-value">{transitionFocus.domains}</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-ivory/10 pt-6">
              {transitionFocus.strengths.map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <p className="text-xl font-bold text-ivory sm:text-2xl">{item.value}</p>
                  <p className="mt-1 text-[0.65rem] leading-4 text-ivory/55 sm:text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

    </section>
  );
}
