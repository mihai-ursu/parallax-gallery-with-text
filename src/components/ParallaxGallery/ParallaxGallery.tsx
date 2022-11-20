import ParallaxImages from "./components/ParallaxImages/ParallaxImages";
import styles from "./ParallaxGallery.module.scss";

const ParallaxGallery = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <ParallaxImages />
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
