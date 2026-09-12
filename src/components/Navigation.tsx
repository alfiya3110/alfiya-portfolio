import { NavLink } from 'react-router-dom';
import { navLinks, profile } from '../data/profile';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-ivory/10 bg-navy/95 backdrop-blur" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-12">
        <NavLink
          to="/"
          className="text-sm font-semibold tracking-[0.35em] text-teal-light transition hover:text-ivory"
        >
          {profile.initials}
        </NavLink>
        <div className="flex flex-wrap items-center justify-end gap-4 text-sm md:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `transition ${isActive ? 'font-semibold text-teal-light' : 'text-ivory/80 hover:text-teal-light'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
