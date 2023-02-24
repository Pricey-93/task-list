import cross from './assets/images/icon-cross.svg';

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
  return container;
}
