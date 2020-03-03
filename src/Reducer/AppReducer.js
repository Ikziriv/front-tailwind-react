export default (state, action) => {
  switch (action.type) {
    case "GET_TRANS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case "DELETED_TRANS":
      return {
        ...state,
        transactions: state.transactions.filter(
          transaction => transaction._id !== action.payload,
        ),
      };
    case "ADDED_TRANS":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "ERROR_TRANS":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
