const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

function addTask() {
  const task = taskInput.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button class="edit-button">Edit</button>
    <button class="delete-button">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(event) {
  if (event.target.classList.contains('delete-button')) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
  }
}

function editTask(event) {
  if (event.target.classList.contains('edit-button')) {
    const taskItem = event.target.parentElement;
    const taskSpan = taskItem.querySelector('span');
    const newTask = prompt('Edit task:', taskSpan.textContent);
    if (newTask !== null) {
      taskSpan.textContent = newTask.trim();
    }
  }
}

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', editTask);
