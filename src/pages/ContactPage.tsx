import Contact from '../components/Contact';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        kicker="Contact"
        title="Open to customer insights, product operations, customer success, AI, SaaS, and revenue growth conversations."
        description="Reach out via email, phone, LinkedIn, or download the resume."
        dark
      />
      <Contact standalone />
    </main>
  );
}
