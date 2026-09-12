import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <main>
      <PageHeader
        kicker="Featured Projects"
        title="Practical AI concepts for converting customer conversations into operating intelligence."
        description="Selected AI and Voice of Customer initiatives that connect customer signals to product and growth outcomes."
      />
      <PageContent>
        <Projects standalone />
      </PageContent>
    </main>
  );
}
