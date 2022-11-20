import { Gallery } from "components/ParallaxGallery/ParallaxGalleryProps";
import combineClasses from "helpers/combineClasses";
import Image from "next/image";
import styles from "./ParallaxImages.module.scss";

const ParallaxImages = (props: Gallery) => {
  const { images, order } = props;

  return (
    <div className={styles.wrapper} style={{ order: order }}>
      <div className={styles.galleryWrapper}>
        {images.map((image, index) => {
          const positionClass =
            index % 2 === 0 ? styles.topLeft : styles.bottomRight;
          return (
            <div
              key={image.name}
              className={combineClasses(styles.imageWrapper, positionClass)}
            >
              <Image
                src={image.src}
                alt={image.name}
                className={styles.image}
                fill
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallaxImages;
