import { contact, profile } from '../data/profile';

const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFileName}`;

type ContactProps = {
  standalone?: boolean;
};

export default function Contact({ standalone = false }: ContactProps) {
  return (
    <section
      id={standalone ? undefined : 'contact'}
      aria-labelledby={standalone ? undefined : 'contact-heading'}
      className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="rounded-[2rem] bg-navy p-8 text-ivory shadow-2xl sm:p-12 lg:p-16">
        {!standalone && (
          <>
            <p className="section-kicker text-teal-light">Contact</p>
            <h2 id="contact-heading" className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {contact.heading}
            </h2>
          </>
        )}
        <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${standalone ? '' : 'mt-8'}`}>
          <a className="contact-link" href={`mailto:${profile.email}`}>Email</a>
          <a className="contact-link" href={`tel:${profile.phone}`}>Phone</a>
          <a className="contact-link" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="contact-link" href={resumeUrl} download>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
