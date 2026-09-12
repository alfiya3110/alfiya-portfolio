import Experience from '../components/Experience';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

export default function ExperiencePage() {
  return (
    <main>
      <PageHeader
        kicker="Experience"
        title="From quality operations to customer insights, SaaS growth, and product operations leadership."
        description="A chronological view of roles across Housing.com, Magicbricks, and Info Edge."
      />
      <PageContent>
        <Experience standalone />
      </PageContent>
    </main>
  );
}
