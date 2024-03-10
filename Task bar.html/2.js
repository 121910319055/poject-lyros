// script.js
let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        tasks.push({ text: taskInput.value, completed: false });
        updateTasks();
        taskInput.value = '';
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

function filterTasks(filter) {
    let filteredTasks;
    switch (filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
        case 'incomplete':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        default:
            filteredTasks = tasks;
    }
    updateTasks(filteredTasks);
}

function updateTasks(filteredTasks = tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    filteredTasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${index})">
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="removeTask(${index})">Remove</button>
        `;
        taskList.appendChild(listItem);
    });
}
