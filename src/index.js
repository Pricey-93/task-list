import createHeader from './header';
import createTaskInput from './taskInput';
import * as tasksComponent from './tasks';
import createTaskFilter from './task-filter';

const content = document.getElementById('content');

const mainAppContainer = document.createElement('div');
mainAppContainer.id = 'main-app-container';

const hintText = document.createElement('p');
hintText.id = 'hint-text';
hintText.textContent = 'Drag and drop to reorder list';

mainAppContainer.append(createTaskInput(), tasksComponent.tasksContainer, tasksComponent);
mainAppContainer.append(tasksComponent.createStatusInfo(), createTaskFilter(), hintText);

content.append(createHeader(), mainAppContainer);

// Add event listeners here (this is currently just for seeing on the page)
tasksComponent.createTask('test');
tasksComponent.createTask('test-two');
tasksComponent.createTask('test-three');
tasksComponent.createTask('test-four');
tasksComponent.createTask('test-five');
tasksComponent.createTask('test-six');
