document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-text");
    const addTodoBtn = document.getElementById("add-todo-btn");
    const todoList = document.getElementById("todo-list");
    const completedCount = document.getElementById("completed-count");
    const totalCount = document.getElementById("total-count");

    let completed = 0;
    let total = 0;

    const updateCounts = () => {
      completedCount.textContent = completed;
      totalCount.textContent = total;
    };

    const createTodoItem = (text) => {
      const li = document.createElement("li");
      li.className = "todo-item";

      const span = document.createElement("span");
      span.textContent = text;

      const actionsDiv = document.createElement("div");
      actionsDiv.className = "todo-actions";

      const completeBtn = document.createElement("button");
      completeBtn.className = "complete-btn";
      completeBtn.textContent = "✔";
      completeBtn.addEventListener("click", () => {
        if (!li.classList.contains("completed")) {
          li.classList.add("completed");
          completed++;
        } else {
          li.classList.remove("completed");
          completed--;
        }
        updateCounts();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "🗑";
      deleteBtn.addEventListener("click", () => {
        todoList.removeChild(li);
        if (li.classList.contains("completed")) {
          completed--;
        }
        total--;
        updateCounts();
      });

      actionsDiv.appendChild(completeBtn);
      actionsDiv.appendChild(deleteBtn);
      li.appendChild(span);
      li.appendChild(actionsDiv);

      return li;
    };

    addTodoBtn.addEventListener("click", () => {
      const text = todoInput.value.trim();
      if (text) {
        const todoItem = createTodoItem(text);
        todoList.appendChild(todoItem);
        todoInput.value = "";
        total++;
        updateCounts();
      }
    });
});