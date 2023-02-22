export default function createNavBar() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const nav = document.createElement('nav');
  const sandwichIcon = document.createElement('i');
  header.id = 'page-header';
  title.textContent = 'Tasks';
  sandwichIcon.classList.add('fa-solid', 'fa-bars', 'fa-lg');
  nav.appendChild(sandwichIcon);
  header.appendChild(title);
  header.appendChild(nav);
  return header;
}
