import About from '../components/About';
import Hero from '../components/Hero';
import { about } from '../data/profile';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section id="about" aria-labelledby="about-heading" className="bg-ivory">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="section-kicker">About</p>
              <h2 id="about-heading" className="section-heading">{about.heading}</h2>
            </div>
            <About merged />
          </div>
        </div>
      </section>
    </main>
  );
}
