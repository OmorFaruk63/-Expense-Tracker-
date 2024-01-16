import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const ShowBal = () => {
  const { transaction } = useContext(GlobalContext);
  const amount = transaction.map((value) => value.amount);

  const income = amount
    .filter((v) => v > 0)
    .reduce((acc, curr) => {
      return (acc += parseFloat(curr));
    }, 0);

  const expence = amount
    .filter((v) => v < 0)
    .reduce((acc, curr) => {
      return (acc += parseFloat(curr));
    }, 0);

  return (
    <div className="balance-box">
      <div className="imcome">
        <span>Income $+{income}</span>
      </div>
      <div className="expence">
        <span>Expence ${"-" + Math.abs(expence)}</span>
      </div>
    </div>
  );
};

export default ShowBal;
