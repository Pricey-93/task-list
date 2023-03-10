import './style.css';
import moon from './assets/images/icon-moon.svg';
import createTask from './tasks';

const moonImage = document.querySelector('.page-theme-icon');
moonImage.src = moon;

const taskList = document.getElementById('task-list');

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    taskList.appendChild(createTask(task));
  });
}

const inputField = document.getElementById('input-field');
const form = document.getElementById('input-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  taskList.appendChild(createTask(inputField.value));
  inputField.value = '';
});
// localStorage.clear();
if (localStorage.length > 0) {
  window.onload = loadTasks();
}
