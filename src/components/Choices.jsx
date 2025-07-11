import { motion } from 'framer-motion';
import { FaHandRock, FaHandPaper, FaHandScissors } from 'react-icons/fa';
import styles from './Choices.module.css';

const iconMap = {
  rock: <FaHandRock />,
  paper: <FaHandPaper />,
  scissors: <FaHandScissors />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This makes them appear one by one
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
};

const Choices = ({ choices, onChoice }) => {
  return (
    <motion.div
      className={styles.choices}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {choices.map((choice) => (
        <motion.button
          key={choice.id}
          layoutId={choice.id} // This is the magic key for the animation!
          className={styles.choiceButton}
          onClick={() => onChoice(choice)}
          whileHover={{ y: -10, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          {iconMap[choice.id]}
        </motion.button>
      ))}
    </motion.div>
  );
};

export default Choices;