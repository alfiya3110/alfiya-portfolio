import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import Skills from '../components/Skills';

export default function SkillsPage() {
  return (
    <main>
      <PageHeader
        kicker="Skills"
        title="Business analysis, data analytics, and product ownership capabilities."
        description="Skills aligned to Business Analyst (Data Analytics) and Product Owner roles across PropTech and SaaS environments."
      />
      <PageContent>
        <Skills standalone />
      </PageContent>
    </main>
  );
}
