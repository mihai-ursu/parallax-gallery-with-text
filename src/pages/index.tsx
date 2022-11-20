import ParallaxGallery from "components/ParallaxGallery/ParallaxGallery";
import styles from "../styles/Home.module.scss";
import data from "data/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <ParallaxGallery galleries={data} />
      <div className={styles.spacer} />
    </div>
  );
}
