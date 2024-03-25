import styles from '../app.module.css';

export const FieldLayout = (props) => {
  //console.log(props.field);
  return (
    <>
      <div className={styles.Fields}>
        {props.field.map((fieldItem, index) => <div key={index} className={styles.FieldItem} onClick={() => props.handleClickCell(index)}>{fieldItem}</div>)}
      </div>
      <div className={styles.ButtonWrapper} >
        <button onClick={props.handleNewGameButton}>Начать заново</button>
      </div>

    </>
  )
}
