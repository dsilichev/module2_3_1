export const changePlayer = (currentPlayer) => ({
    type: 'CHANGE_PLAYER',
    payload: currentPlayer === 'X' ? '0' : 'X',
  });
