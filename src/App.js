import { useState } from 'react';
import styles from './app.module.css';
import { GameLayout } from './components/GameLayout';

export const App = () => {
  const initialState = new Array(9).fill('');

  let [currentPlayer, setCurrentPlayer] = useState('X');
  let [isGameEnded, setIsGameEnded] = useState(false);
  let [isDraw, setIsDraw] = useState(false);
  let [isWin, setIsWin] = useState(false);
  let [field, setField] = useState(initialState);

  return (
    <div className={styles.App}>
      <h1>Крестики-нолики</h1>
      <GameLayout
        initialState={initialState}
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        isWin={isWin}
        field={field}
        onSetCurrentPlayer={setCurrentPlayer}
        onSetGameEnded={setIsGameEnded}
        onSetIsDraw={setIsDraw}
        onSetIsWin={setIsWin}
        onSetField={setField}
      />
    </div>
  );
};
