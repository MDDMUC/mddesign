import styles from './MetricsCallout.module.css';

interface Metric {
  value: string;
  label: string;
}

interface MetricsCalloutProps {
  metrics: Metric[];
}

export default function MetricsCallout({ metrics }: MetricsCalloutProps) {
  return (
    <div className={styles.panel}>
      <dl className={styles.grid}>
        {metrics.map((metric, index) => (
          <div key={index} className={styles.metricItem}>
            <dt className={styles.value}>{metric.value}</dt>
            <dd className={styles.label}>{metric.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
