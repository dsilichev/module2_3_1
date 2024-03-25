import { FieldLayout } from './FieldLayout';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export const Field = (props) => {
  //console.log(props);
  const isCheckWin = (field, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) => pattern.every((cellIDX) => field[cellIDX]===currentPlayer))
  }

  const isCheckDraw = (field, isWin) => {
    if (!field.some(fieldItem => fieldItem === '' &&!isWin)) {
      props.onSetIsDraw(true);
    }
  }

  const handleClickCell = (index) => {
    if (props.isWin || props.field[index]) {
      return null;
    }

    const newField = [...props.field];
    newField[index] = props.currentPlayer;
    props.onSetField(newField);
    
    if (isCheckWin(newField, props.currentPlayer) || isCheckDraw(newField, props.isWin)) {
      props.onSetIsWin(true);
      return null;
    }

    
    props.onSetCurrentPlayer(prevState => prevState === 'X' ? '0' : 'X');
  }

  const handleNewGameButton = () => {
    props.onSetField(props.initialState);
    props.onSetIsWin(false);
    props.onSetIsDraw(false);
  }

  return (
    <div>
      <FieldLayout handleClickCell={handleClickCell} handleNewGameButton={handleNewGameButton} {...props} />
    </div>
  )
}
