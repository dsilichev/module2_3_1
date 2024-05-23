import styles from '../app.module.css';
import PropTypes from 'prop-types';
import { store } from '../store';

export const InformationLayout = ({ currentPlayer, isWin, isDraw }) => {
  return (
    <div className={styles.Information}>
      {isDraw ? 'Ничья' : (isWin ? 'Победил ' : 'Ходит ') + store.getState().currentPlayer}
    </div>
  );
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isWin: PropTypes.bool,
  isDraw: PropTypes.bool,
};
