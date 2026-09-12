import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

export default App;
