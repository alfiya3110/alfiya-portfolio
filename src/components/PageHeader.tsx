type PageHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export default function PageHeader({ kicker, title, description, dark = false }: PageHeaderProps) {
  return (
    <header
      className={`px-6 py-16 sm:px-10 lg:px-12 ${dark ? 'bg-navy text-ivory' : 'bg-cream'}`}
    >
      <div className="mx-auto max-w-7xl">
        <p className={`section-kicker ${dark ? 'text-teal-light' : ''}`}>{kicker}</p>
        <h1 className={`section-heading ${dark ? 'text-ivory' : ''}`}>{title}</h1>
        {description && (
          <p className={`mt-6 max-w-3xl text-lg leading-8 ${dark ? 'text-ivory/75' : 'text-slate'}`}>
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
