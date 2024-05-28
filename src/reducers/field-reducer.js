export const initialFieldState = {
    field: new Array(9).fill(''),
}

export const fieldReducer = (
    state = initialFieldState,
    action,
  ) => {
    switch (action.type) {
      case 'SET_NEW_FIELD':
        return { ...state, field: action.payload }
      default:
        return state;
    }
  };
