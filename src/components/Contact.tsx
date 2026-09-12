import { contact, profile } from '../data/profile';

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFileName}`;

type ContactProps = {
  standalone?: boolean;
};

const contactItems = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Phone', href: `tel:${profile.phone}` },
  { label: 'LinkedIn', href: profile.linkedinUrl, external: true },
  { label: 'Resume', href: resumeUrl, download: true },
];

export default function Contact({ standalone = false }: ContactProps) {
  return (
    <section
      id={standalone ? undefined : 'contact'}
      aria-labelledby={standalone ? undefined : 'contact-heading'}
    >
      {!standalone && (
        <>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-heading" className="section-heading mb-10 max-w-3xl">
            {contact.heading}
          </h2>
        </>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item) => (
          <a
            key={item.label}
            className="contact-card"
            href={item.href}
            download={item.download ? true : undefined}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </section>
  );
}
