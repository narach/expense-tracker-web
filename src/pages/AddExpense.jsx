import moment from "moment";
import { Button, Form, FormField, FormGroup, FormInput } from "semantic-ui-react";
import { addNewExpense } from "../utils/httpHelper";

function AddExpense () {
    function submitExpense(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const requestData = Object.fromEntries(formData);
        const expenseDate = moment(requestData.ExpenseDate).format("DD-MM-YYYY");
        const amount = parseFloat(requestData.Amount);
        requestData.ExpenseDate = expenseDate;
        requestData.Amount = amount;
        addNewExpense(requestData);
    }

    return (
        <>
            <Form onSubmit={submitExpense}>
                <FormGroup>
                    <FormInput label="Title" placeholder="Expense description" name="Title" width={10} required/>
                    <FormInput 
                        label="Amount(eur)"
                        placeholder="Spent amount" 
                        name="Amount" 
                        width={5} 
                        required
                    />
                    <FormInput label="Category" placeholder="Expense category" name="Category" width={5}/>
                    <FormInput 
                        label="Expense Date" 
                        placeholder="dd-mm-yyyy" 
                        name="ExpenseDate" 
                        type="date" 
                        width={6}
                        pattern="\d{4}-\d{2}-\d{2}"
                    />
                </FormGroup>
                <Button type="submit">Save</Button>
            </Form>
        </>
    );
}

export default AddExpense;