import styles from '../app.module.css';
import PropTypes from 'prop-types';
import { store } from '../store';

export const InformationLayout = () => {
  const { currentPlayer, isWin, isDraw } = store.getState();
  return (
    <div className={styles.Information}>
      {isDraw ? 'Ничья' : (isWin ? 'Победил ' : 'Ходит ') + currentPlayer}
    </div>
  );
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isWin: PropTypes.bool,
  isDraw: PropTypes.bool,
};
