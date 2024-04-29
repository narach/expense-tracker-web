import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";
import { fetchExpenses } from "../utils/httpHelper";

 function ExpenseTable() {

    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function getExpenses() {
            try {
                const expensesData = await fetchExpenses();
                setExpenses(expensesData);
            } catch (error) {
                setError({
                    message: error.message || 'Unable to get Expenses from Lambda, please try again later'
                });
            }
        }

        getExpenses();
        
    }, []);

    if (error) {
        return <Error title="An error occured!" message={error.message}/>
    }

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