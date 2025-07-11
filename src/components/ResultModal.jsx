import { motion, AnimatePresence } from 'framer-motion';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import styles from './ResultModal.module.css';

const iconMap = {
  rock: <FaHandRock />,
  paper: <FaHandPaper />,
  scissors: <FaHandScissors />,
};

const resultText = {
  win: 'You Win!',
  lose: 'You Lose',
  draw: "It's a Draw",
};

const ResultModal = ({ result, userChoice, compChoice, onReset }) => {
  if (!result || !userChoice || !compChoice) return null;

  const resultColor =
    result === 'win' ? 'var(--win-color)' : result === 'lose' ? 'var(--lose-color)' : 'var(--draw-color)';

  const userChoiceClass = result === 'win' ? styles.winner : '';
  const compChoiceClass = result === 'lose' ? styles.winner : '';

  return (
    // The AnimatePresence is now in App.jsx, we only need the motion.div here
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
        exit={{ y: -100, opacity: 0 }}
      >
        <motion.h2 
          style={{ color: resultColor }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.4, duration: 0.3 } }}
        >
          {resultText[result]}
        </motion.h2>
        
        {/* You can also animate the text describing the result */}
        <motion.p className={styles.resultDescription}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.6, duration: 0.3 } }}
        >
          {result === 'draw' ? 'A worthy opponent!' : 
          result === 'win' ? `Your ${userChoice.name} beats ${compChoice.name}` :
          `Computer's ${compChoice.name} beats your ${userChoice.name}`}
        </motion.p>

        <motion.button
          className={styles.playAgainButton}
          onClick={onReset}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { delay: 0.8, duration: 0.3 } }}
        >
          Play Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ResultModal;