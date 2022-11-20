import ParallaxGallery from "components/ParallaxGallery/ParallaxGallery";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <ParallaxGallery />
    </div>
  );
}
