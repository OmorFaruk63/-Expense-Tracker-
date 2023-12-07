import { useContext, useState } from "react";
import { GlobalContext } from "./../Context/GlobalContext";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";

const TransactionItem = ({ item: { amount, id, text, isEdit } }) => {
  const [amountInput, setAmountInput] = useState(amount);
  const [textInput, setTexInput] = useState(text);

  const { dispatch } = useContext(GlobalContext);

  //delete Transition
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  //Edite Transition
  function editeTransaction(id) {
    dispatch({ type: "EDIT_LI_TO_INPUT", payload: id });
  }

  const sing = amount > 0 ? "+" : "-";

  // Update submit
  function handleUpdateSubmit(e) {
    e.preventDefault();
    const obj = {};
    const elements = [...e.target.elements];
    elements.forEach((element) => {
      obj[element.name] = element.value;
    });
    obj.id = id;
    dispatch({ type: "UPDATE_INPUT_LI", payload: obj });
  }

  return (
    <>
      {/*  Convart Li To Input*/}
      {isEdit ? (
        <span className="edit-input">
          <form className="edit-input" onSubmit={handleUpdateSubmit}>
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
            <button className="update-btn">
              {/* <IoSaveSharp /> */}
              Save
            </button>
          </form>
        </span>
      ) : (
        // Transaction
        <li className={amount > 0 ? "plus" : "minus"}>
          <div className="li-tarsition">
          <div className="li-icon-flex">
            <span className="delete-icon" onClick={() => deleteTransaction(id)}>
              Delete
              <MdDelete />
            </span>
            <span className="edit-tran " onClick={() => editeTransaction(id)}>
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
