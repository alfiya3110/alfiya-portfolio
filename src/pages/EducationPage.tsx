import Education from '../components/Education';
import PageHeader from '../components/PageHeader';

export default function EducationPage() {
  return (
    <main>
      <PageHeader
        kicker="Education"
        title="Academic foundation and continuous learning."
        description="Formal education and certifications that support Alfiya's work in customer insights and product operations."
      />
      <Education standalone />
    </main>
  );
}
