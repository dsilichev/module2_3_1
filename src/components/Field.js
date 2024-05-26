import { FieldLayout } from './FieldLayout';
import {store} from '../store';

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
  
  const isCheckWin = (field, currentPlayer) => {
    return WIN_PATTERNS.some((pattern) =>
      pattern.every((cellIDX) => field[cellIDX] === currentPlayer),
    );
  };

  const isCheckDraw = (field, isWin) => {
    if (!field.some((fieldItem) => fieldItem === '' && !isWin)) {
      store.dispatch({type: 'CHANGE_DRAW_STATE', payload: true});
    }
  };

  const handleClickCell = (index) => {
    
    if (store.getState().isWin || store.getState().field[index]) {
      return null;
    }

    const newField = [...store.getState().field];
    newField[index] = store.getState().currentPlayer;

    store.dispatch({type: 'SET_NEW_FIELD', payload: newField});

    if (isCheckWin(newField, store.getState().currentPlayer) || isCheckDraw(newField, store.getState().isWin)) {
      store.dispatch({type: 'CHANGE_WIN_STATE', payload: true});
      return null;
    }
    store.dispatch({type: 'CHANGE_PLAYER'});
  };

  const handleNewGameButton = () => {
    store.dispatch({type: 'SET_NEW_FIELD', payload: new Array(9).fill('')});
    store.dispatch({type: 'CHANGE_WIN_STATE', payload: false});
    store.dispatch({type: 'CHANGE_DRAW_STATE', payload: false});
  };

  return (
    <div>
      <FieldLayout
        handleClickCell={handleClickCell}
        handleNewGameButton={handleNewGameButton}
        field={store.getState().field}
      />
    </div>
  );
};
