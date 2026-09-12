import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <main>
      <PageHeader
        kicker="Skills"
        title="A toolkit spanning insight, execution, SaaS operations, and business growth."
        description="Core capabilities across product delivery, customer success, analytics, and platform tools."
      />
      <PageContent>
        <Skills standalone />
      </PageContent>
    </main>
  );
}
