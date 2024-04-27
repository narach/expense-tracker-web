import ExpenseTable from './components/ExpensesTable.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
        <ExpenseTable />
      </main>
    </>
  );
}

export default App;
