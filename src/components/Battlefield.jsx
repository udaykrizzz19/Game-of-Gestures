import { motion } from 'framer-motion';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import styles from './Battlefield.module.css';

const iconMap = {
  rock: <FaHandRock />,
  paper: <FaHandPaper />,
  scissors: <FaHandScissors />,
};

const Battlefield = ({ userChoice, compChoice, result }) => {
  if (!userChoice || !compChoice) return null;

  const userChoiceClass = result === 'win' ? styles.winner : '';
  const compChoiceClass = result === 'lose' ? styles.winner : '';
  
  return (
    <div className={styles.battlefield}>
      {/* User's Choice */}
      <div className={`${styles.choiceContainer} ${userChoiceClass}`}>
        <p>YOU PICKED</p>
        <motion.div layoutId={userChoice.id} className={styles.choiceIcon}>
          {iconMap[userChoice.id]}
        </motion.div>
      </div>

      {/* Computer's Choice */}
      <div className={`${styles.choiceContainer} ${compChoiceClass}`}>
        <p>COMP PICKED</p>
        <motion.div
          className={styles.choiceIcon}
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {iconMap[compChoice.id]}
        </motion.div>
      </div>
    </div>
  );
};

export default Battlefield;