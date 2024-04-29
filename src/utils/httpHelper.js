export async function addNewExpense(expense) {
    const response = await fetch("https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker", {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to create a new expense.');
    }

    return resData.message;
}

export async function fetchExpenses() {
    const expensesUrl = 'https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker';
        
    const response = await fetch(expensesUrl);
    const responseData = await response.json();
    return responseData;
}

export async function fetchExpenseStats() {
    const url = "https://mhws13jdg5.execute-api.eu-central-1.amazonaws.com/dev/expenses-tracker/statistics";

    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
}