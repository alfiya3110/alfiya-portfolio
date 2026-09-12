import { metricGroups } from '../data/profile';

type MetricsProps = {
  standalone?: boolean;
};

export default function Metrics({ standalone = false }: MetricsProps) {
  return (
    <section aria-labelledby={standalone ? undefined : 'impact-heading'}>
      {!standalone && (
        <div className="mb-10">
          <p className="section-kicker">Impact Metrics</p>
          <h2 id="impact-heading" className="section-heading">
            Measured outcomes across analytics, product delivery, and business impact.
          </h2>
        </div>
      )}
      <div className="space-y-12">
        {metricGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-lg font-semibold text-navy">{group.title}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.metrics.map((metric) => (
                <article key={metric.label} className="card">
                  <p className="text-3xl font-bold text-gold">{metric.value}</p>
                  <p className="mt-3 text-sm leading-6 text-slate">{metric.label}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
