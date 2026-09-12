import Education from '../components/Education';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

export default function EducationPage() {
  return (
    <main>
      <PageHeader
        kicker="Education"
        title="Academic foundation and continuous learning."
        description="Formal education and certifications that support Alfiya's work in customer insights and product operations."
      />
      <PageContent>
        <Education standalone />
      </PageContent>
    </main>
  );
}
