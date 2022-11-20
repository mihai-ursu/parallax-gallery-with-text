import ParallaxImages from "./components/ParallaxImages/ParallaxImages";
import styles from "./ParallaxGallery.module.scss";
import ParallaxGalleryProps from "./ParallaxGalleryProps";

const ParallaxGallery = (props: ParallaxGalleryProps) => {
  const { galleries } = props;

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {galleries.map((gallery) => (
          <ParallaxImages key={gallery.galleryName} {...gallery} />
        ))}
        <div className={styles.content}>
          <h1 className={styles.title}>Building Beyond</h1>
          <p className={styles.text}>
            We are a London based architecture and design studio with a global
            reputation for creating innovative spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxGallery;
