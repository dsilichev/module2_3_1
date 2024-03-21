import styles from './app.module.css';
import { GameLayout } from './components/GameLayout';

export const App = () => {
  return (
    <div className={styles.container}>
      <h1>Крестики-нолики</h1>
      <GameLayout />
    </div>
  );
};
