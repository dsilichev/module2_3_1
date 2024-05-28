import { FieldLayout } from './FieldLayout';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlayer, selectWinState, selectField } from '../selectors';
import { RESET_PLAYER, changePlayer, changeDrawState, changeWinState, setNewField } from '../actions';
import { initialFieldState, initialGameState } from '../reducers';

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

export const Field = () => {
  const dispatch = useDispatch();

  const currentPlayer = useSelector(selectPlayer);
  const isWin = useSelector(selectWinState);
  const field = useSelector(selectField);

  const isCheckWin = (field, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) =>
      pattern.every((cellIDX) => field[cellIDX] === currentPlayer),
    );
  };

  const isCheckDraw = (field, isWin) => {
    if (!field.some((fieldItem) => fieldItem === '' && !isWin)) {
      dispatch(changeDrawState(true));
    }
  };

  const handleClickCell = (index) => {
    if (isWin || field[index]) {
      return null;
    }

    const newField = [...field];
    newField[index] = currentPlayer;

    dispatch(setNewField(newField));

    if (isCheckWin(newField, currentPlayer) || isCheckDraw(newField, isWin)) {
      dispatch(changeWinState(true));
      return null;
    }
    dispatch(changePlayer(currentPlayer));
  };

  const handleNewGameButton = () => {
    dispatch(setNewField(initialFieldState.field));
    dispatch(changeWinState(initialGameState.isWin));
    dispatch(changeDrawState(initialGameState.isDraw));
    dispatch(RESET_PLAYER);
  };

  return (
    <div>
      <FieldLayout
        handleClickCell={handleClickCell}
        handleNewGameButton={handleNewGameButton}
      />
    </div>
  );
};
