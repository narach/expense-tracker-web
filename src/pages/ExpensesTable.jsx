import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";

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
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Title</TableHeaderCell>
                        <TableHeaderCell>Amount(EUR)</TableHeaderCell>
                        <TableHeaderCell>Category</TableHeaderCell>
                        <TableHeaderCell>Expense Date</TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {expenses.map( (expense) => (
                        <TableRow key={expense.ID}>
                            <TableCell>{expense.Title}</TableCell>
                            <TableCell>{expense.Amount}</TableCell>
                            <TableCell>{expense.Category}</TableCell>
                            <TableCell>{expense.ExpenseDate}</TableCell>
                        </TableRow>
                    ))}    
                </TableBody>
            </Table>
            <p><Link to="/addExpense">Add New Expense</Link></p>
        </>
    );
}

export default ExpenseTable;