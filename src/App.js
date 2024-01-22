import { Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { Transactionlists } from './components/Transactionlists';
import { addTransaction } from './components/addTransaction';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpenses />
      <Transactionlists />
      <addTransaction />

    </div>
  );
}

export default App;
