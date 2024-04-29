import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

 function ExpenseTable() {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const expensesUrl = 'https://3tvw1ekreg.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker';
        async function fetchExpenses() {
            const response = await fetch(expensesUrl);
            const responseData = await response.json()
            console.log('Response: ', responseData);
            setExpenses(responseData);
        }

        fetchExpenses();
    }, []);

    return (
        <>
            <p>Expenses should be displayed here as Table!</p>
            <p><Link to="/addExpense">Add New Expense</Link></p>
        </>
    );
}

export default ExpenseTable;