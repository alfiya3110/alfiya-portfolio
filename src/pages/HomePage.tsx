import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import { navLinks } from '../data/profile';

const exploreLinks = navLinks.filter((link) => link.path !== '/');

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Metrics />
      <section className="bg-cream px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Explore</p>
          <h2 className="section-heading">Dedicated pages for each part of Alfiya&apos;s profile.</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exploreLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="card transition hover:border-teal/40 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-navy">{link.label}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">
                  View the full {link.label.toLowerCase()} section on its own page.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
