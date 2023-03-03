
import './App.css';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {Transactionlist} from './components/Transactionlist';
function App() {
  return (
    <div >
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Transactionlist/>
      </div>
    </div>
  );
}

export default App;
