import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, animate } from 'framer-motion';

const AnimatedScore = ({ score }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Triggers animation once when visible
  const controls = useAnimation();

  useEffect(() => {
    const node = ref.current;

    // Animate from the previous score to the new score
    const previousScore = parseInt(node.textContent, 10);
    
    // Only animate if the score has actually changed
    if (score !== previousScore) {
      const animationControls = animate(previousScore, score, {
        duration: 0.5,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value);
        }
      });
      return () => animationControls.stop();
    }

  }, [score]);


  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.p
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {score}
    </motion.p>
  );
};

export default AnimatedScore;