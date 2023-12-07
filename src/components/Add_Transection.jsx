import { useContext } from "react";

import { GlobalContext } from "./../Context/GlobalContext";

const Add_Transection = () => {
  const { dispatch } = useContext(GlobalContext);

  // Get data form input And send reducer function
  function AddTransection(e) {
    const obj = {};
    e.preventDefault();
    const elements = [...e.target.elements];
    elements.forEach((element) => {
      obj[element.name] = element.value;
      element.value = "";
    });
    obj.id = Date.now();
    obj.isEdit = false;
    dispatch({ type: "ADD_TRANSACTION", payload: obj });
  }

  return (
    <div className="form">
      <form onSubmit={AddTransection}>
        <input required placeholder="enter cost name" name="text" type="text" />
        <br />
        <input
          required
          placeholder="enter  amount"
          name="amount"
          type="number"
        />
        <br />
        <button className="add-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default Add_Transection;
