import styles from './Services.module.css'

const services = [
  {
    title: 'Strategic Leadership',
    description: 'Act as your embedded Head of Design, building teams, processes, and design culture from the inside.',
    icon: 'compass'
  },
  {
    title: 'Product Design',
    description: 'Transform complex products from research through launch with systematic UX and polished interfaces.',
    icon: 'grid'
  },
  {
    title: 'Brand Systems',
    description: 'Create cohesive brand identities that scale across every touchpoint and channel.',
    icon: 'shapes'
  }
]

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>WHAT I DO</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon} data-icon={service.icon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {service.icon === 'compass' && (
                    <>
                      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M18 18L30 22L26 30L18 26L18 18Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </>
                  )}
                  {service.icon === 'grid' && (
                    <>
                      <rect x="8" y="8" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <rect x="26" y="8" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <rect x="8" y="26" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <rect x="26" y="26" width="14" height="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </>
                  )}
                  {service.icon === 'shapes' && (
                    <>
                      <circle cx="15" cy="15" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <rect x="25" y="6" width="17" height="17" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M16 33L24 42L32 33L24 24L16 33Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </>
                  )}
                </svg>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
