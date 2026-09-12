import { NavLink } from 'react-router-dom';
import { navLinks, profile } from '../data/profile';
import Logo from './Logo';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-teal/20 bg-navy/95 backdrop-blur" aria-label="Primary navigation">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-12">
        <NavLink
          to="/"
          className="group flex items-center gap-3 transition"
          aria-label={`${profile.name} home`}
        >
          <Logo size={38} className="transition group-hover:scale-105" />
          <span className="hidden text-sm font-semibold tracking-wide text-ivory/90 sm:inline">
            {profile.name}
          </span>
        </NavLink>
        <div className="flex flex-wrap items-center justify-end gap-4 text-sm md:gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `transition ${isActive ? 'font-semibold text-gold-light' : 'text-ivory/80 hover:text-teal-light'}`
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
