const loading = (state = [], action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    case 'ERROR_LOADING':
      return { error: true, isLoading: false };
    default:
      return state;
  }
};

export default loading;
