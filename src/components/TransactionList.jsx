import { useContext } from "react";
import TransactionItem from "./TransactionItem";
import { GlobalContext } from "../Context/GlobalContext";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul>
        {transaction.length < 1 ? (
          <h3>No Income And Expence</h3>
        ) : (
          transaction.map((item) => (
            <TransactionItem key={item.id} item={item} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
