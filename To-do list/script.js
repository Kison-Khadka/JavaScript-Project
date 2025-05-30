const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Event listener for Add Task button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Load tasks from local storage on page load
window.onload = showTask;

function addTask() {
    const taskValue = taskInput.value.trim();
    if (!taskValue) return;

    // Add task to localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Render task to UI
    renderTask(taskValue);

    // Clear input field
    taskInput.value = '';
}

function renderTask(taskValue) {
    const task = document.createElement('li');
    task.textContent = taskValue;
    task.classList.add('task');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');

    // Remove task from DOM and localStorage
    removeBtn.addEventListener('click', () => {
        task.remove();
        removeTask(taskValue);
    });

    task.appendChild(removeBtn);
    taskList.appendChild(task);
}

function showTask() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskValue => {
        renderTask(taskValue);
    });
}

function removeTask(taskValue) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
