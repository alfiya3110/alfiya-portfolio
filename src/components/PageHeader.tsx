type PageHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
};

export default function PageHeader({ kicker, title, description }: PageHeaderProps) {
  return (
    <header className="page-header relative overflow-hidden border-b border-ivory/10 bg-navy text-ivory">
      <div className="hero-mesh pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-teal/20 blur-3xl" aria-hidden="true" />
      <div className="hero-glow pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">{kicker}</p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-3xl text-base leading-7 text-ivory/65 sm:text-lg">{description}</p>
        )}
      </div>
    </header>
  );
}
