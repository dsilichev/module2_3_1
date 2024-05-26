import styles from '../app.module.css';
import { store } from '../store';

export const InformationLayout = () => {
  const { currentPlayer, isWin, isDraw } = store.getState();
  return (
    <div className={styles.Information}>
      {isDraw ? 'Ничья' : (isWin ? 'Победил ' : 'Ходит ') + currentPlayer}
    </div>
  );
};
