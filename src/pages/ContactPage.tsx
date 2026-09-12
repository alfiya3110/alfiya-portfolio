import Contact from '../components/Contact';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import { contact } from '../data/profile';

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        kicker="Contact"
        title={contact.heading}
        description="Reach out via email, phone, LinkedIn, or download the resume."
      />
      <PageContent>
        <Contact standalone />
      </PageContent>
    </main>
  );
}
