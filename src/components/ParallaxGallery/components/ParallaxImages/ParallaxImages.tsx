import { Gallery } from "components/ParallaxGallery/ParallaxGalleryProps";
import combineClasses from "helpers/combineClasses";
import Image from "next/image";
import ParallaxEffect from "../ParallaxEffect/ParallaxEffect";
import styles from "./ParallaxImages.module.scss";

const ParallaxImages = (props: Gallery) => {
  const { images, order } = props;

  return (
    <div className={styles.wrapper} style={{ order: order }}>
      <div className={styles.galleryWrapper}>
        {images.map((image, index) => {
          const positionClass =
            index % 2 === 0 ? styles.bottomLeft : styles.topRight;
          return (
            <ParallaxEffect
              key={image.name}
              offset={image.parallaxEffectStrength}
              isEffectActive={true}
              cssClass={combineClasses(positionClass, styles.imageWrapper)}
            >
              <Image
                src={image.src}
                alt={image.name}
                className={styles.image}
                priority
                width={320}
                height={416}
              />
            </ParallaxEffect>
          );
        })}
      </div>
    </div>
  );
};

export default ParallaxImages;
