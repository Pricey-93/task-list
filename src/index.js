import createNavBar from './header/nav-bar';

const content = document.getElementById('content');
const navBar = createNavBar();
content.appendChild(navBar);
