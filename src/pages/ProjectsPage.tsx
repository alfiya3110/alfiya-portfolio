import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        kicker="Case Studies"
        title="Business analysis and product discovery work that connects data, requirements, and outcomes."
        description="Selected case studies demonstrating requirements gathering, analytics, product prioritization, and measurable business impact."
      />
      <PageContent>
        <Projects standalone />
      </PageContent>
    </main>
  );
}
