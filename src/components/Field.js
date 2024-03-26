import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8],
  [2, 4, 6], // Варианты побед по диагонали
];

export const Field = ({
  initialState,
  currentPlayer,
  isWin,
  field,
  onSetField,
  onSetIsWin,
  onSetIsDraw,
  onSetCurrentPlayer,
}) => {
  //console.log(props);
  const isCheckWin = (field, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) =>
      pattern.every((cellIDX) => field[cellIDX] === currentPlayer),
    );
  };

  const isCheckDraw = (field, isWin) => {
    if (!field.some((fieldItem) => fieldItem === '' && !isWin)) {
      onSetIsDraw(true);
    }
  };

  const handleClickCell = (index) => {
    if (isWin || field[index]) {
      return null;
    }

    const newField = [...field];
    newField[index] = currentPlayer;
    onSetField(newField);

    if (isCheckWin(newField, currentPlayer) || isCheckDraw(newField, isWin)) {
      onSetIsWin(true);
      return null;
    }

    onSetCurrentPlayer((prevState) => (prevState === 'X' ? '0' : 'X'));
  };

  const handleNewGameButton = () => {
    onSetField(initialState);
    onSetIsWin(false);
    onSetIsDraw(false);
  };

  return (
    <div>
      <FieldLayout
        handleClickCell={handleClickCell}
        handleNewGameButton={handleNewGameButton}
        field={field}
      />
    </div>
  );
};

Field.propTypes = {
  initialState: PropTypes.array,
  currentPlayer: PropTypes.string,
  isWin: PropTypes.bool,
  field: PropTypes.array,
  onSetField: PropTypes.func,
  onSetIsWin: PropTypes.func,
  onSetIsDraw: PropTypes.func,
  onSetCurrentPlayer: PropTypes.func,
};
