import "./styles.css";
import { Header } from "/src/Components/Header";
import { Balance } from "/src/Components/Balance";
import { IncomeExpenses } from "/src/Components/IncomeExpenses";
import { TransactionList } from "/src/Components/TransactionsList";
import { AddTransaction } from "/src/Components/AddTransaction";

import { GlobalProvider } from "/src/Context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
