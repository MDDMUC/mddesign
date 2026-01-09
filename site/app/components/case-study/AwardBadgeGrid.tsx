import styles from './AwardBadgeGrid.module.css';

interface Award {
  name: string;
  year?: string;
  logo?: string;
}

interface AwardBadgeGridProps {
  awards: Award[];
  title?: string;
}

export default function AwardBadgeGrid({ awards, title = 'Awards & Recognition' }: AwardBadgeGridProps) {
  return (
    <div className={styles.container}>
      <p className={styles.header}>{title}</p>
      <div className={styles.grid} role="list">
        {awards.map((award, index) => (
          <div key={index} className={styles.badge} role="listitem">
            {award.logo ? (
              <img
                src={award.logo}
                alt={`${award.name}${award.year ? ` - ${award.year}` : ''}`}
                className={styles.badgeImage}
              />
            ) : (
              <div className={styles.badgeText}>
                <span className={styles.awardName}>{award.name}</span>
                {award.year && <span className={styles.awardYear}>{award.year}</span>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
