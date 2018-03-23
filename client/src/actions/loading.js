export const startLoading = () => {
  console.log('ACTION CALLED');
  return ({
    type: 'START_LOADING'
  });
};
 
export const stopLoading = () => ({
  type: 'STOP_LOADING'
});
