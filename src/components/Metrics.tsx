import { metrics } from '../data/profile';

type MetricsProps = {
  standalone?: boolean;
};

export default function Metrics({ standalone = false }: MetricsProps) {
  return (
    <section aria-labelledby={standalone ? undefined : 'impact-heading'}>
      {!standalone && (
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Impact Metrics</p>
            <h2 id="impact-heading" className="section-heading">
              Measured outcomes across product, delivery, and customer success.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate">
            Metrics reflect Alfiya&apos;s LinkedIn profile and her work across customer insights,
            product operations, customer success, and campaign performance.
          </p>
        </div>
      )}
      <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${standalone ? '' : 'mt-0'}`}>
        {metrics.map((metric) => (
          <article key={metric.label} className="card">
            <p className="text-4xl font-bold text-teal-dark">{metric.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate">{metric.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
