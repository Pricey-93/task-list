export default function createTaskInput() {
  const container = document.createElement('form');
  container.id = 'input-container';

  const circle = document.createElement('div');
  circle.classList.add('circle');

  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.placeholder = 'Create a new todo...';

  container.append(circle, taskInput);
  return container;
}
