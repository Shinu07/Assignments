window.addEventListener('load', () => {
    const input = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-button");
    const todoList = document.getElementById("todoList");

    addBtn.addEventListener("click", addTodo);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    });

    input.focus();

    function addTodo() {
        const todoText = input.value.trim();

        if (todoText.length > 25) {
            alert("Character limit exceeded");
            input.value = "";
        } else if (todoText === "") {
            alert("Please Enter your Todo Tasks");
        } else {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="todo-text">${todoText}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;

            const taskSpan = listItem.querySelector('.todo-text');
            const editBtn = listItem.querySelector('.edit-button');
            const deleteBtn = listItem.querySelector('.delete-button');

            editBtn.addEventListener("click", () => {
                const editedTask = prompt("Edit your task", taskSpan.textContent);
                if (editedTask !== null && editedTask.trim() !== "") {
                    taskSpan.textContent = editedTask.trim();
                }
            });

            deleteBtn.addEventListener("click", () => listItem.remove());

            taskSpan.addEventListener("click", () => {
                listItem.classList.toggle("checked");
                taskSpan.classList.toggle("checked");
            });

            todoList.appendChild(listItem);
            input.value = "";
        }
    }
});
