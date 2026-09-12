import About from '../components/About';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        kicker="About"
        title="A customer-led operator for complex digital platforms."
        description="Background, industries, and the professional narrative behind Alfiya's customer insights and product operations work."
      />
      <PageContent>
        <About standalone />
      </PageContent>
    </main>
  );
}
