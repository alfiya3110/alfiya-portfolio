import About from '../components/About';
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        kicker="About"
        title="A customer-led operator for complex digital platforms."
        description="Background, industries, and the professional narrative behind Alfiya's customer insights and product operations work."
      />
      <About standalone />
    </main>
  );
}
