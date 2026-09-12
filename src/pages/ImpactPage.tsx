import Metrics from '../components/Metrics';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

export default function ImpactPage() {
  return (
    <main>
      <PageHeader
        kicker="Impact Metrics"
        title="Measured outcomes across analytics, product delivery, and business impact."
        description="Quantified results from business analysis, dashboard development, product operations, and cross-functional delivery work at Housing.com, Magicbricks, and Info Edge."
      />
      <PageContent>
        <Metrics standalone />
      </PageContent>
    </main>
  );
}
