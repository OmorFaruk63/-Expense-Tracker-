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

    case "UPDATE/EDITE_TRANSACTION":
      return {
        ...state,
        transaction: [...state.transaction].map((transaction) => {
          if (transaction.id === payload.id) {
            return {
              ...transaction,
              text: payload.textInput,
              amount: payload.amountInput,
              isEdit: !transaction.isEdit,
            };
          }
          return transaction;
        }),
      };

    default:
      return state;
  }
};
