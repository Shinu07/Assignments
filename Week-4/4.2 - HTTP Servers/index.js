/*
Assignment #1 - Trying to code a todo app and store data into the array
*/

const express = require("express")

const app = express();

app.use(express.json())

let todos = []

//post route
app.post("/todo/create", (req, res) => {
    // get the todo from the request body
    const { todo} = req.body
    // get the todo id from the request body which is string and we have to convert it to integer
    const id = parseInt(req.body.id)

    // if id not exist we can return the message
    if (!id) {
        return res.send("It cannot be empty")
    }

    // check if todo already exists with the given id
    for (let i = 0; i < todos.length; i++) {
        // if todo already exists with the given id, send a response with message "Todo already exists with id" and the todo id
        if (todos[i].id === id) {
            return res.send("Todo already exist" + id)
        }
    }

    // if todo is empty, send a response with message "Todo cannot be empty"

    if (!todo || todo.trim() === "") {
        return res.send("Todo cannot be empty")
    }

    // create a new todo object

    const newTodo = {
        title: todo,
        id: id,
    }
    // add the new todo object to the todos array
    todos.push(newTodo)


    // send a response with message "Todo added successfully"
    res.send("Todo successfully added")
})

app.delete("/todos/delete/all", (req, res) => {
    todos = []

    res.send("all Todos deleted successfully")
})

//* Delete the todos with the given id from the array
// * URL: localhost:3000/todo/delete/:id
// * Example: localhost:3000/todo/delete/1


/*
in post we send the id inside the body to get that we write like this : const id = parseInt(req.body.id)
*/
app.delete("/todos/delete/:id", (req, res) => {
    const todoId = parseInt(req.params.id);

    let deleted = false;
    let tempTodos = [];

    for (let i = 0; i < todos.length; i++) {
        if (todos[i] === todoId) {
            deleted = true // Mark as deleted
            continue;  // Skip adding this to tempTodos
        }

        tempTodos.push(todos[i]);  // Keep all other todos
    }

    // The original  array replaced with tempTodos which excludes the deletd items
    todos = tempTodos;

    if (!deleted) {
        return res.send("todo not found with id" + todoId)
    }

    res.send("Todo deleted successfuly with id " + todoId)
})


app.put("/todo/update:Id", (req, res) => {

    const { todo } = req.body
    const todoId = parseInt(req.params.Id)

    if (!todo || todos.trim() === "") {
        return res.send("Todo cannont be empty")
    }

    let updated = false

    // find the todo with the given id from the todos array and update the title

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === todoId) {
            todos[i].title = todo
            updated = true
        }
    }

    if (!updated) {
        return res.send("Todo not found with id " + todoId);
    }

    res.send("Todo updated successfully with id " + todoId);

})


app.get("/todo/all", (req, res) => {
    if (todos.length === 0) {
        return res.send("No todos are found")
    }

    res.send(todos)
});

app.get("/todo/read/:Id", (req, res) => {

    const todoId = parseInt(req.params.Id)


    const todo = todo.find((todo) => todo.id === todoId)

    if (!todo) {
        return res.send("Todo not found with id " + todoId);
    }

    res.send(todo)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})





