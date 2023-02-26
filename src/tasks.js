import cross from './assets/images/icon-cross.svg';

let labelCounter = 1;

function incrementLabelCounter() {
  labelCounter += 1;
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
  checkBox.id = `checkbox-${labelCounter}`;
  checkBox.classList.add('check-box');
  checkBox.type = 'checkbox';

  const description = document.createElement('label');
  description.htmlFor = checkBox.id;
  description.classList.add('checkbox-label');
  description.textContent = todo;

  const deleteIcon = document.createElement('img');
  deleteIcon.src = cross;
  deleteIcon.classList.add('delete-icon');

  container.append(checkBox, description, deleteIcon);
  tasksContainer.appendChild(container);

  incrementLabelCounter();
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
  remainingTasks.textContent = 'items left';

  const clear = document.createElement('p');
  clear.id = 'clear-action';
  clear.textContent = 'Clear Completed';

  statusInfoContainer.append(remainingTasks, clear);
  return statusInfoContainer;
}
