import styles from '../app.module.css';
import PropTypes from 'prop-types';
import {store} from '../store';

export const FieldLayout = ({ handleClickCell, handleNewGameButton }) => {
  return (
    <>
      <div className={styles.Fields}>
        {store.getState().field.map((fieldItem, index) => (
          <div
            key={index}
            className={styles.FieldItem}
            onClick={() => handleClickCell(index)}
          >
            {fieldItem}
          </div>
        ))}
      </div>
      <div className={styles.ButtonWrapper}>
        <button onClick={handleNewGameButton}>Начать заново</button>
      </div>
    </>
  );
};

FieldLayout.propTypes = {
  handleClickCell: PropTypes.func,
  handleNewGameButton: PropTypes.func,
};
