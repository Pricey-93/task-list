import cross from './assets/images/icon-cross.svg';

export function removeTask(target) {
  target.closest('.task').remove();
}

export function createTask(task) {
  const container = document.createElement('li');
  container.classList.add('task');

  const checkBox = document.createElement('input');
  checkBox.id = 'checkbox-2';
  checkBox.classList.add('check-box');
  checkBox.type = 'checkbox';

  const description = document.createElement('label');
  description.classList.add('checkbox-label');
  description.htmlFor = 'checkbox-2';
  description.textContent = task;

  const deleteIcon = document.createElement('img');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.src = cross;
  deleteIcon.alt = 'A cross image that will delete your task when clicked';
  deleteIcon.addEventListener('click', (e) => {
    removeTask(e.target);
  });

  container.append(checkBox, description, deleteIcon);
  return container;
}
