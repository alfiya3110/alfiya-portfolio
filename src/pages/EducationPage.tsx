import Education from '../components/Education';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

export default function EducationPage() {
  return (
    <main>
      <PageHeader
        kicker="Education"
        title="Academic foundation and continuous learning."
        description="Formal education and certifications that support Alfiya's transition into Business Analyst and Product Owner roles."
      />
      <PageContent>
        <Education standalone />
      </PageContent>
    </main>
  );
}
