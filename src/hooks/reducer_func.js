export const reducer_func = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transaction: [payload, ...state.transaction],
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transaction: [
          ...state.transaction.filter((list) => list.id !== payload),
        ],
      };

    // Transaction (li) To Convart Input
    case "EDIT_LI_TO_INPUT":
      return {
        ...state,
        transaction: [...state.transaction].map((transaction) => {
          if (transaction.id === payload) {
            return { ...transaction, isEdit: true };
          }
          return transaction;
        }),
      };

    case "EDIT_INPUT_VALUE":
      return {
        ...state,
        transaction: [...state.editInputValue, payload],
      };

    case "UPDATE_INPUT_LI":
      return {
        ...state,
        transaction: [...state.transaction].map((transaction) => {
          if (transaction.id === payload.id) {
            return {
              ...transaction,
              text: payload.text,
              amount: payload.amount,
              isEdit: false,
            };
          }
          return transaction;
        }),
      };

    default:
      return state;
  }
};
