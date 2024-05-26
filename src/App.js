import { useState } from 'react';
import styles from './app.module.css';
import { GameLayout } from './components/GameLayout';
import { store } from './store';

export const App = () => {
  let [updadeUI, setUpdateUI] = useState({});

  store.subscribe(() => setUpdateUI({}));

  return (
    <div className={styles.App}>
      <h1>Крестики-нолики</h1>
      <GameLayout />
    </div>
  );
};
