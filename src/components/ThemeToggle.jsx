import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className={styles.toggleContainer}>
      <motion.button
        className={styles.toggleButton}
        onClick={onToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </motion.button>
    </div>
  );
};

export default ThemeToggle;