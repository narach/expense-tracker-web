import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import ExpenseTable from './pages/ExpensesTable.jsx';
import Header from './components/Header.jsx';
import Login from './pages/Login.jsx';
import AddExpense from './pages/AddExpense.jsx';
import ExpenseStatiscics from './pages/ExpenseStatistics.jsx';
import RootLayout from './pages/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Login/>},
      { path: '/expenses', element: <ExpenseTable/>},
      { path: '/addExpense', element: <AddExpense/>},
      { path: '/expense-stats', element: <ExpenseStatiscics/>},
    ]
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
