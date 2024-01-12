const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const todos = [];

app.get('/', (req, res) => {
  let options={weekday:'long', year:'numeric', month:'long', day:'numeric'}
  let today=new Date()
  let day=today.toLocaleDateString("en-US", options)
  res.render('index', { todos, kindOfDay:day });
});

app.post('/add', (req, res) => {
  const newTodo = req.body.newTodo;
  todos.push(newTodo);
  res.redirect('/');
});
