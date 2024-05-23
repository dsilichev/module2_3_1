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
      return {...state, currentPlayer: (state.currentPlayer === 'X') ? '0' : 'X'}
    default:
      return state;
  }
};
