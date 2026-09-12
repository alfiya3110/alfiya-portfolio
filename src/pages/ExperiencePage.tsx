import Experience from '../components/Experience';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

export default function ExperiencePage() {
  return (
    <main>
      <PageHeader
        kicker="Experience"
        title="From reporting and quality operations to business analysis, analytics, and product delivery leadership."
        description="Roles across Housing.com, Magicbricks, and Info Edge reframed through business analysis, data analytics, and product ownership outcomes."
      />
      <PageContent>
        <Experience standalone />
      </PageContent>
    </main>
  );
}
