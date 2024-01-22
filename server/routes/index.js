// Importing express using ES6 module syntax
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body in requests
app.use(express.json());

// Route for the home page
app.get("/home", (req, res) => {
    res.send("Welcome to Expense Ease.");
});

// Route for the login, (future - redirects to the dashboard)
app.get("/home/login", (req, res) => {
    res.send("Welcome to Login Page.");
});

// Route for the dashboard
app.get('/home/login/dashboard', (req, res) => {
    res.send("Welcome to the dashboard");
});

// Dummy data for income and expense categories
const incomeCategories = ['Salary', 'Stocks', 'Freelancing', 'Debt Return', 'Others'];
const expenseCategories = ['Groceries', 'Utilities', 'Rent', 'Entertainment', 'Others'];

// Route for viewing all the incomes
app.get('/home/login/dashboard/get_incomes', (req, res) => {
    // Logic to retrieve and display income data
    const response = {
        "Income Categories": incomeCategories
    };
    res.json(response);
});


// Route for viewing all the expenses
app.get('/home/login/dashboard/get_expenses', (req, res) => {
    // Logic to retrieve and display expense data
    const response = {
        "Expense Categories": expenseCategories
    };
    res.json(response);
});

// Sample data with key-value pairs for categories and amounts
const incomeData = [
    { category: 'Salary', amount: 5000 },
    { category: 'Stocks', amount: 2000 },
    { category: 'Freelancing', amount: 1000 }
];

//Route to get income amount as per the category
app.get('/home/login/dashboard/get_incomes/:category', (req, res) => {
    const requestedCategory = req.params.category;
    const categoryData = incomeData.find(data => data.category === requestedCategory);

    if (categoryData) {
        res.json({
            "Category": categoryData.category,
            "Amount": categoryData.amount
        });
    } else {
        res.status(404).json({ "error": "Category not found" });
    }
});

// Sample data with key-value pairs for expense categories and amounts
const expenseData = [
    { category: 'Groceries', amount: 200 },
    { category: 'Utilities', amount: 100 },
    { category: 'Rent', amount: 800 },
];

app.get('/home/login/dashboard/get_expenses/:category', (req, res) => {
    const requestedCategory = req.params.category;

    const categoryData = expenseData.find(data => data.category === requestedCategory);

    if (categoryData) {
        res.json({
            "Category": categoryData.category,
            "Amount": categoryData.amount
        });
    } else {
        res.status(404).json({ "error": "Category not found" });
    }
});

// Route to logout (redirects to login in future)
app.get('/home/login/dashboard/logout', (req, res) => {
    res.json("Logout successful");
});

// Route to signout
app.get('/home/login/dashboard/signout', (req, res) => {
    res.json("Sorry for inconvenience");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
