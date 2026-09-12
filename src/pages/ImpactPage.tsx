import Metrics from '../components/Metrics';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';

export default function ImpactPage() {
  return (
    <main>
      <PageHeader
        kicker="Impact Metrics"
        title="Measured outcomes across product, delivery, and customer success."
        description="Metrics reflect Alfiya's LinkedIn profile and her work across customer insights, product operations, customer success, and campaign performance."
      />
      <PageContent>
        <Metrics standalone />
      </PageContent>
    </main>
  );
}
