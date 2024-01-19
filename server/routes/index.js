// console.log("Aastha")

//importing express using traditional method
const express = require("express");
const app = express();
const port = 3000;

//1) Route for the home page.
app.get("/home", (req, res) => {
    res.send("Welcome to Expense Ease.");
});

//2)Route for the login, when hit login, redirects to the dashboard.
app.get("/home/login", (req, res) => {
    res.redirect('/dashboard');
});

//3)Route for the dashboard
app.get('/home/login/dashboard', (req,res) => {
    res.send("Welcome to the dashboard");
});

//4)Route for viewing all the incomes
app.get('/home/login/dashboard/get_incomes', (req,res) => {
    res.send("Your current income.");
});

const incomeCategories = ['Salary', 'Stocks', 'Freelancing', 'Debt Return', 'Others'];
//10) Route for categories
app.get('/home/login/dashboard/get_incomes/categories', (req,res) => {
     res.send(`
     <h1>Income Categories:</h1>
     <ul>
       ${incomeCategories.map(category => `<li>${category}</li>`).join('')}
     </ul>
   `);
});

//9) Route for viewing all the incomes categories wise
app.get('home/login/dashboard/get_incomes/categories/:id', (req,res) => {
     const id = req.params.id;
     res.send(`${id}, Income list`);
});

//5)Route for viewing all the expenses
app.get('/home/login/dashboard/get_expenses', (req,res) =>{
    res.send("Your expenses list");
});

//6)Route for viewing all the expenses categories wise
app.get('/home/login/dashboard/get_expenses/categories/:id', (req,res) => {
    const id = req.params.id;
    console.log(req);
    res.send(`${id}, Expenses list`);
});

//7)Route to logout.
app.get('home/login/dashboard/logout', (req, res) => {
    res.redirect('/login')
});

//8)Route to signout.
app.get('home/login/dashboard/signout', (req,res) =>
{
  res.redirect('/home');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

