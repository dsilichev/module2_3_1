import styles from '../app.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectField } from '../selectors';

export const FieldLayout = ({ handleClickCell, handleNewGameButton }) => {
  const field = useSelector(selectField);
  
  return (
    <>
      <div className={styles.Fields}>
        {field.map((fieldItem, index) => (
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
