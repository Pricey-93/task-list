import cross from './assets/images/icon-cross.svg';

const storageArray = [];

function removeTask(target) {
  const label = target.previousSibling;
  storageArray.splice(storageArray.indexOf(label.textContent), 1);
  localStorage.setItem('tasks', JSON.stringify(storageArray));
  target.closest('.task').remove();
}
function storeTask(task) {
  storageArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(storageArray));
}

export default function createTask(task) {
  const container = document.createElement('li');
  container.classList.add('task');

  const checkBox = document.createElement('input');
  checkBox.classList.add('check-box');
  checkBox.type = 'checkbox';

  const description = document.createElement('label');
  description.classList.add('checkbox-label');
  description.textContent = task;
  const deleteIcon = document.createElement('img');
  deleteIcon.classList.add('delete-icon');
  deleteIcon.src = cross;
  deleteIcon.alt = 'A cross image that will delete your task when clicked';
  deleteIcon.addEventListener('click', (e) => {
    removeTask(e.target);
  });

  container.append(checkBox, description, deleteIcon);
  storeTask(task);
  return container;
}
