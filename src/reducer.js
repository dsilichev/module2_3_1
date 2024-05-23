export const reducer = (
  state = {
    field: new Array(9).fill(''),
    currentPlayer: 'X',
    isWin: false,
    isDraw: false,
    isGameEnded: false,
  },
  action,
) => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      return { ...state, currentPlayer: (state.currentPlayer === 'X') ? '0' : 'X' }
    case 'CHANGE_WIN_STATE':
      return { ...state, isWin: action.payload }
    case 'CHANGE_DRAW_STATE':
      return { ...state, isDraw: action.payload }
    case 'CHANGE_GAME_ENDED_STATE':
      return { ...state, isGameEnded: action.payload }
    case 'SET_NEW_FIELD':
      return { ...state, field: action.payload }
    default:
      return state;
  }
};
