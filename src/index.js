import * as tasks from './tasks';

const taskList = document.getElementById('task-list');
taskList.append(tasks.createTask('test'));

const inputField = document.getElementById('input-field');
const form = document.getElementById('input-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  taskList.appendChild(tasks.createTask(inputField.value));
  inputField.value = '';
});
