import "./App.css";
import Add_Transection from "./components/Add_Transection";
import GlobalProvaider from "./Context/GlobalContext";
import TransactionList from "./components/TransactionList";
import Balance from "./components/balance";
import TotalBalance from "./components/TotalBalance";

function App() {
  return (
    <GlobalProvaider>
      <div className="container">
        <TotalBalance />
        <Balance />
        <Add_Transection />
        <TransactionList />
      </div>
    </GlobalProvaider>
  );
}

export default App;
