// Get DOM elements
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div class="buttons">
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
                <button class="complete-btn" onclick="completeTask(this)">Complete</button>
            </div>
        `;

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Function to delete a task
function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    taskList.removeChild(listItem);
}

// Function to mark a task as completed
// function completeTask(button) {
//     const listItem = button.parentElement.parentElement;
//     listItem.classList.toggle('completed');
// }

// Update the completeTask function in script.js
function completeTask(button) {
    const listItem = button.parentElement.parentElement;

    listItem.classList.toggle('completed');

    // Toggle the checkmark icon
    const tickMark = document.createElement('span');
    tickMark.innerHTML = '&#10003;'; // Unicode character for a checkmark
    tickMark.classList.add('tick-mark');

    if (listItem.classList.contains('completed')) {
        // Set the background color to green and add the checkmark if the task is completed
        listItem.style.backgroundColor = '#d4edda';
        listItem.appendChild(tickMark);
    } else {
        // Remove the checkmark and reset background color if the task is marked as incomplete
        listItem.removeChild(listItem.querySelector('.tick-mark'));
        listItem.style.backgroundColor = '';
    }
}
