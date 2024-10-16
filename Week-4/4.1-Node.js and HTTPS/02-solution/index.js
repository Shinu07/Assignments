/**
Assignment #2 - Filesystem based todo list.

Create a `cli` that lets a user

    1. Add a todo
    2. Delete a todo
    3. Mark a todo as done

    Store all the data in files (todos.json)

    1. Add a To-Do : To add a new to-do item, use the add command followed by the deadline and the to-do title:
    $ node index.js add <Todo_Ttle> <Time>
    $ node index.js add "Go to Gym" "18:00"

    2. Remove a To-Do : To remove an existing to-do item, use the remove command followed by the title and the date of the JSON file:
    $ node index.js remove <Todo_Ttle> <Date>
    $ node index.js remove "Go to Gym" "2024-08-25"

    3. Mark a To-do done : To Mark an existing to-do item done, use the mark command followed by the title and the date of the JSON file:
    $ node index.js mark <Todo_Ttle> <Date>
    $ node index.js mark "Go to Gym" "2024-08-25"

 */

const fs = require('fs').promises;
const path = require('path');
const { Command } = require('commander');

const program = new Command();
const todoFilePath = path.join(__dirname, 'todos.json');

async function readTodos() {
  try {
    const data = await fs.readFile(todoFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeTodos(todos) {
  await fs.writeFile(todoFilePath, JSON.stringify(todos, null, 2), 'utf-8');
}

program
  .version('1.0.0')
  .description('A CLI Todo App');

  program
  .command('add <time>')
  .description('Add a new todo item')
  .argument('<todoTitle...>', 'Enter the todo title')
  .action(async (time, todoTitleArray) => {
    try {
      const todoTitle = todoTitleArray.join(' ');
      const todos = await readTodos();
      const newTodo = { Title: todoTitle, Deadline: time, Done: false };
      todos.push(newTodo);
      await writeTodos(todos);
      console.log('Todo added successfully');
    } catch (error) {
      console.error('Error adding todo:', error.message);
    }
  });

program
  .command('remove <todoTitle>')
  .description('Remove an existing todo item')
  .action(async (todoTitle) => {
    try {
      const todos = await readTodos();
      const updatedTodos = todos.filter((todo) => todo.Title !== todoTitle);
      if (todos.length === updatedTodos.length) {
        console.log('Todo not found!');
      } else {
        await writeTodos(updatedTodos);
        console.log('Todo removed successfully');
      }
    } catch (error) {
      console.error('Error removing todo:', error.message);
    }
  });

program
  .command('mark <todoTitle>')
  .description('Mark a todo item as done')
  .action(async (todoTitle) => {
    try {
      const todos = await readTodos();
      const todoIndex = todos.findIndex((todo) => todo.Title === todoTitle);
      if (todoIndex !== -1) {
        todos[todoIndex].Done = true;
        await writeTodos(todos);
        console.log('Todo marked as done!');
      } else {
        console.log('Todo not found');
      }
    } catch (error) {
      console.error('Error marking todo as done:', error.message);
    }
  });

program
  .command('list')
  .description('List all todos')
  .action(async () => {
    try {
      const todos = await readTodos();
      if (todos.length === 0) {
        console.log('No todos found');
      } else {
        console.log('Todo List:');
        todos.forEach((todo, index) => {
          console.log(`${index + 1}. [${todo.Done ? 'X' : ' '}] ${todo.Title} (Deadline: ${todo.Deadline})`);
        });
      }
    } catch (error) {
      console.error('Error listing todos:', error.message);
    }
  });

program.parse(process.argv);
