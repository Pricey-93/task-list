export default function createTaskInput() {
  const container = document.createElement('form');
  container.id = 'input-container';

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.disabled = true;

  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.placeholder = 'Create a new todo...';

  container.append(checkBox, taskInput);
  return container;
}
