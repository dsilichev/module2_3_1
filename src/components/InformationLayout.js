import styles from '../app.module.css';
import { useSelector } from 'react-redux';
import { selectPlayer, selectWinState, selectDrawState } from '../selectors';

export const InformationLayout = () => {
  const currentPlayer = useSelector(selectPlayer);
  const isWin = useSelector(selectWinState);
  const isDraw  =useSelector(selectDrawState);

  return (
    <div className={styles.Information}>
      {isDraw ? 'Ничья' : (isWin ? 'Победил ' : 'Ходит ') + currentPlayer}
    </div>
  );
};
