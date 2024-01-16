import { useContext, useState } from "react";
import { GlobalContext } from "./../Context/GlobalContext";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TransactionItem = ({ item }) => {
  const { amount, id, text, isEdit } = item;
  const [amountInput, setAmountInput] = useState(amount);
  const [textInput, setTexInput] = useState(text);

  const { dispatch } = useContext(GlobalContext);

  //delete Transition
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  const sing = amount > 0 ? "+" : "-";

  // Update submit
  function handleUpdateSubmit(e) {
    dispatch({
      type: "UPDATE/EDITE_TRANSACTION",
      payload: { amountInput, textInput, id },
    });
  }

  return (
    <>
      {/*  Convart Li To Input*/}
      {isEdit ? (
        <span className="edit-input">
          <input
            value={textInput}
            onChange={(e) => setTexInput(e.target.value)}
            placeholder="Edit Name"
            name="text"
            type="text"
          />
          <input
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            placeholder="Edit Amount"
            name="amount"
            type="number"
          />
          <button onClick={handleUpdateSubmit} className="update-btn">
            Save
          </button>
        </span>
      ) : (
        // Transaction
        <li className={amount > 0 ? "plus" : "minus"}>
          <div className="li-tarsition">
            <div className="li-icon-flex">
              <span
                className="delete-icon"
                onClick={() => deleteTransaction(id)}
              >
                Delete
                <MdDelete />
              </span>
              <span className="edit-tran " onClick={() => handleUpdateSubmit()}>
                Edit
                <MdEdit />
              </span>
            </div>
            <div className="li-item-flex">
              <span className="text-and-amount">{text}</span>
              <span className="text-and-amount">
                {sing}
                {Math.abs(amount)}
              </span>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default TransactionItem;
