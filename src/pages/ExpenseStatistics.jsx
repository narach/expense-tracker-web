import { useState, useEffect } from "react";
import { fetchExpenseStats } from "../utils/httpHelper";
import ReactApexChart from "react-apexcharts";

function ExpenseStatiscics() {
    const [chartData, setChartData] = useState([]);
    const [chartOptions, setChartOptions] = useState({});
    const [error, setError] = useState();

    useEffect( () => {
        async function getExpenseStats() {
            try {
                const expenseData = await fetchExpenseStats();
                const categories = Object.keys(expenseData);
                setChartOptions({
                    labels: categories,
                    legend: {
                        position: 'bottom',
                        fontSize: '24px',
                        fontWeight: 700,
                    }
                });
                const expenses = [];
                categories.forEach ( (category) => {
                    expenses.push(expenseData[category]);
                });
                setChartData(expenses);
            } catch (error) {
                setError({
                    message: error.message || 'Unable to get Expenses from Lambda, please try again later'
                });
            }
        }

        getExpenseStats();
    }, []);

    return (
        <>
            <h3>Expense Statistics</h3>
            {!chartData && <p>Loading data...</p>}
            {chartData && 
                <ReactApexChart options={chartOptions} series={chartData} type="pie" width={600}/>
            }
        </>
    );
}

export default ExpenseStatiscics;