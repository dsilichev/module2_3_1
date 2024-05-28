export const initialGameState = {
  currentPlayer: 'X',
  isWin: false,
  isDraw: false,
  isGameEnded: false,
};

export const gameReducer = (
  state = initialGameState,
  action,
) => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      return { ...state, currentPlayer: state.currentPlayer === 'X' ? '0' : 'X' };
    case 'CHANGE_WIN_STATE':
      return { ...state, isWin: action.payload };
    case 'CHANGE_DRAW_STATE':
      return { ...state, isDraw: action.payload };
    case 'RESET_PLAYER':
      return { ...state, currentPlayer: 'X' };
    default:
      return state;
  }
};
