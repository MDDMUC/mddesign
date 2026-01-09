import styles from './ImageGallery.module.css';

interface Image {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: Image[];
  layout?: 'full-width' | 'half' | 'grid' | 'before-after';
  caption?: string;
}

export default function ImageGallery({ images, layout = 'full-width', caption }: ImageGalleryProps) {
  if (layout === 'full-width' && images.length === 1) {
    return (
      <div className={styles.fullWidthContainer}>
        <div className={styles.fullWidthWrapper}>
          <div className={styles.imageWrapper}>
            <img src={images[0].src} alt={images[0].alt} className={styles.image} />
          </div>
          {(caption || images[0].caption) && (
            <p className={styles.caption}>{caption || images[0].caption}</p>
          )}
        </div>
      </div>
    );
  }

  if (layout === 'half' && images.length === 2) {
    return (
      <div className={styles.halfContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.halfImageWrapper}>
            <img src={image.src} alt={image.alt} className={styles.halfImage} />
            {image.caption && <p className={styles.caption}>{image.caption}</p>}
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'before-after' && images.length === 2) {
    return (
      <div className={styles.beforeAfterContainer}>
        <div className={styles.beforeAfterColumn}>
          <span className={styles.beforeLabel}>BEFORE</span>
          <div className={styles.beforeAfterImageWrapper}>
            <img src={images[0].src} alt={images[0].alt} className={styles.image} />
          </div>
          {images[0].caption && <p className={styles.caption}>{images[0].caption}</p>}
        </div>
        <div className={styles.beforeAfterColumn}>
          <span className={styles.afterLabel}>AFTER</span>
          <div className={styles.beforeAfterImageWrapper}>
            <img src={images[1].src} alt={images[1].alt} className={styles.image} />
          </div>
          {images[1].caption && <p className={styles.caption}>{images[1].caption}</p>}
        </div>
      </div>
    );
  }

  // Grid layout for 3+ images
  return (
    <div className={styles.gridContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.gridImageWrapper}>
          <img src={image.src} alt={image.alt} className={styles.gridImage} />
          {image.caption && <p className={styles.caption}>{image.caption}</p>}
        </div>
      ))}
    </div>
  );
}
