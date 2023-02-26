import createHeader from './header';
import createTaskInput from './taskInput';
import * as tasks from './tasks';
import createTaskFilter from './task-filter';

const content = document.getElementById('content');

const mainAppContainer = document.createElement('div');
mainAppContainer.id = 'main-app-container';

const hintText = document.createElement('p');
hintText.id = 'hint-text';
hintText.textContent = 'Drag and drop to reorder list';
// eslint-disable-next-line function-paren-newline
mainAppContainer.append(
  createTaskInput(), tasks.tasksContainer, tasks.createStatusInfo(), createTaskFilter(), hintText);

content.append(createHeader(), mainAppContainer);

// Add event listeners here (this is currently just for seeing on the page)
tasks.createTask('test');
tasks.createTask('test-two');
tasks.createTask('test-three');
tasks.createTask('test-four');
tasks.createTask('test-five');
tasks.createTask('test-six');
