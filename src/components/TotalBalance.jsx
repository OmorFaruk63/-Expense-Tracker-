import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const TotalBalance = () => {
  const { transaction } = useContext(GlobalContext);

  const total = transaction.reduce((acc, curr) => {
    return (acc += parseFloat(curr.amount));
  }, 0);

  return (
    <div>
      <h2>TotalBalance ${total}</h2>
    </div>
  );
};

export default TotalBalance;
