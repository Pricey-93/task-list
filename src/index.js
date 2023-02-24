import createHeader from './header';
import createTaskInput from './taskInput';
import * as tasks from './tasks';
import createTaskFilter from './task-filter';

const content = document.getElementById('content');

const mainAppContainer = document.createElement('div');
mainAppContainer.id = 'main-app-container';
mainAppContainer.append(createTaskInput(), tasks.tasksContainer, createTaskFilter());

content.appendChild(createHeader());
content.appendChild(mainAppContainer);

// Add event listeners here (this is currently just for seeing on the page)
tasks.createTask('test');
