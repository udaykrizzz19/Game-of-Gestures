import { motion } from 'framer-motion';
import AnimatedScore from './AnimatedScore'; // Import the new component
import styles from './Scoreboard.module.css';

const Scoreboard = ({ userScore, compScore }) => {
  return (
    <motion.div 
      className={styles.scoreboard}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div className={styles.scoreCard} whileHover={{ scale: 1.05 }}>
        {/* Use the new component here */}
        <AnimatedScore score={userScore} />
        <span>You</span>
      </motion.div>
      <div className={styles.divider}>:</div>
      <motion.div className={styles.scoreCard} whileHover={{ scale: 1.05 }}>
        {/* And here */}
        <AnimatedScore score={compScore} />
        <span>Comp</span>
      </motion.div>
    </motion.div>
  );
};

export default Scoreboard;