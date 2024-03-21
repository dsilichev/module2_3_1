import { useState } from 'react';
import styles from './app.module.css';
import { GameLayout } from './components/GameLayout';

export const App = () => {
  let [currentPlayer, setCurrentPlayer] = useState('X');
  let [isGameEnded, setIsGameEnded] = useState(false);
  let [isDraw, setIsDraw] = useState(false);
  let [field, setField] = useState([
    '', '', '',
    '', '', '',
    '', '', '',
  ]);

  return (
    <div className={styles.container}>
      <h1>Крестики-нолики</h1>
      <GameLayout />
    </div>
  );
};
