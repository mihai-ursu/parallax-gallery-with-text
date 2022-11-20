import { useScroll, useSpring, useTransform } from "framer-motion";
import useIsomorphicLayoutEffect from "hooks/useIsomorphicLayoutEffect";
import { RefObject, useState } from "react";

const useParallaxEffect = (ref: RefObject<HTMLElement>, offset: number) => {
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const { scrollY } = useScroll();

  const initial = Math.max(elementTop - clientHeight, 0);
  const final = elementTop + elementHeight;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (!element) return;
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY
      );
      setElementHeight(element.offsetHeight);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  return y;
};

export default useParallaxEffect;
