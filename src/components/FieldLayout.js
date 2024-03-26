import styles from '../app.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleClickCell, handleNewGameButton }) => {
  //console.log(props.field);
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
  field: PropTypes.array,
  handleClickCell: PropTypes.func,
  handleNewGameButton: PropTypes.func,
};
