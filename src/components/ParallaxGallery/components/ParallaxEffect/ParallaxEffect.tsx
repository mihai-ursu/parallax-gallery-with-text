import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ParallaxEffectProps from "./ParallaxEffectProps";
import styles from "./Parallax.module.scss";
import useParallaxEffect from "./hooks/useParallaxEffect";

const ParallaxEffect = (props: ParallaxEffectProps) => {
  const { children, offset = 50, isEffectActive } = props;
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const y = useParallaxEffect(ref, offset);

  if (prefersReducedMotion || !isEffectActive) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className={styles.parallax_wrapper}
      ref={ref}
      initial={{ y: offset }}
      style={{ y: y }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
