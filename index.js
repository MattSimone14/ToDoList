import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Sample initial todoList
let todoList = [];

// To render CSS files (static files)
app.use(express.static("public"));

// To use BodyParser
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { todoList: todoList });
});

app.post('/submit', (req, res) => {
  const newItem = req.body.newItem;
  todoList.push({ text: newItem, completed: false });
  res.render("index.ejs", { todoList: todoList });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

