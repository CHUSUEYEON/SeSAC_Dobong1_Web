const initialState = false;

export const isDataReducer = (state = initialState, action) => {
  if (action.type === "isData/CHAGNE") {
    return !state;
  }
  return state;
};
