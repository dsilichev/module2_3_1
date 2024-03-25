import styles from '../app.module.css';

export const InformationLayout = (props) => {
  //console.log(props);
  return (
    <div className={styles.Information}>
      {props.isDraw ? 'Ничья' : ((props.isWin ? 'Победил ': 'Ходит ') + props.currentPlayer)}
    </div>
  )
}
