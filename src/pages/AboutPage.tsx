import AboutBento from '../components/AboutBento';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import { about } from '../data/profile';

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        kicker="About"
        title={about.heading}
        description="Background, career transition, and the professional narrative behind Alfiya's move into Business Analyst and Product Owner roles."
      />
      <PageContent>
        <AboutBento />
      </PageContent>
    </main>
  );
}
