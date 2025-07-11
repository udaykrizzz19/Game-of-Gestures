import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Choices from './components/Choices';
import Battlefield from './components/Battlefield';
import ResultModal from './components/ResultModal';
import ThemeToggle from './components/ThemeToggle';
import styles from './App.module.css';

const choicesList = [
  { id: 'rock', name: 'Rock' },
  { id: 'paper', name: 'Paper' },
  { id: 'scissors', name: 'Scissors' },
];

const promptText = {
  picking: "Make Your Move!",
  animating: "...",
  result: "Results Are In!"
};

function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [gameState, setGameState] = useState('picking'); // 'picking', 'animating', 'result'
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleUserChoice = (choice) => {
    // This guard clause is the ultimate protection against multiple clicks.
    // If the game isn't in the 'picking' state, it does nothing.
    if (gameState !== 'picking') return;

    const compGeneratedChoice = choicesList[Math.floor(Math.random() * choicesList.length)];
    const roundResult = determineWinner(choice, compGeneratedChoice);

    setUserChoice(choice);
    setCompChoice(compGeneratedChoice);
    setResult(roundResult);
    setGameState('animating');

    setTimeout(() => {
      if (roundResult === 'win') setUserScore((s) => s + 1);
      if (roundResult === 'lose') setCompScore((s) => s + 1);
    }, 500);

    setTimeout(() => {
      setGameState('result');
    }, 2000);
  };

  const determineWinner = (user, comp) => {
    if (user.id === comp.id) return 'draw';
    if (
      (user.id === 'rock' && comp.id === 'scissors') ||
      (user.id === 'paper' && comp.id === 'rock') ||
      (user.id === 'scissors' && comp.id === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  const resetGame = () => {
    setGameState('picking');
    setTimeout(() => {
      setUserChoice(null);
      setCompChoice(null);
      setResult(null);
    }, 300);
  };
  
  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className={styles.appContainer}>
      <Header />
      <Scoreboard userScore={userScore} compScore={compScore} />
      
      <AnimatePresence mode="wait">
        <motion.p key={gameState} className={styles.prompt}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {promptText[gameState]}
        </motion.p>
      </AnimatePresence>

      <div className={styles.gameArea}>
        {/*
          *** THE MAIN FIX IS HERE ***
          A single AnimatePresence with mode="wait" now controls the switch
          between the Choices and the Battlefield. This ensures one animates
          out completely before the other animates in.
        */}
        <AnimatePresence mode="wait">
          {gameState === 'picking' && (
            <Choices key="choices" choices={choicesList} onChoice={handleUserChoice} />
          )}

          {gameState === 'animating' && (
            <Battlefield
              key="battlefield"
              userChoice={userChoice}
              compChoice={compChoice}
              result={result}
            />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {gameState === 'result' && (
          <ResultModal
            result={result}
            userChoice={userChoice}
            compChoice={compChoice}
            onReset={resetGame}
          />
        )}
      </AnimatePresence>

      <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
    </div>
  );
}

export default App;