import cross from './assets/images/icon-cross.svg';

let counter = 0;

function incrementCounter() {
  counter += 1;
}
// function decrementCounter() {
//   counter -= 1;
// }

export const tasksContainer = document.createElement('div');
tasksContainer.id = 'tasks-container';

export function createTask(todo) {
  const container = document.createElement('div');
  container.classList.add('task');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const description = document.createElement('p');
  description.textContent = todo;

  const deleteIcon = document.createElement('img');
  deleteIcon.src = cross;

  container.append(checkBox, description, deleteIcon);
  tasksContainer.appendChild(container);

  incrementCounter();
  return container;
}

// export function removeTask() {
// fill this out later
// }

export function createStatusInfo() {
  const statusInfoContainer = document.createElement('div');
  statusInfoContainer.id = 'tasks-status-container';

  const remainingTasks = document.createElement('p');
  remainingTasks.id = 'remaining-tasks';
  remainingTasks.textContent = `${counter} items left`;

  const clear = document.createElement('p');
  clear.id = 'clear-action';
  clear.textContent = 'Clear Completed';

  statusInfoContainer.append(remainingTasks, clear);
  return statusInfoContainer;
}
