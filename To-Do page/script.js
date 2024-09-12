// script.js
document.getElementById("add-btn").addEventListener("click", function() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value;
    
    if (taskText === "") return;

    const taskList = document.getElementById("task-list");

    // Create list item
    const li = document.createElement("li");

    // Create task text element
    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    // Create complete button
    const completeBtn = document.createElement("input");
    completeBtn.type = "checkbox";
    completeBtn.addEventListener("click", function() {
        if (completeBtn.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✖";
    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    // Append elements to list item
    li.appendChild(completeBtn);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
});
