import moon from './assets/images/icon-moon.svg';

export default function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  const moonImage = document.createElement('img');
  title.textContent = 'TODO';
  moonImage.classList.add('page-theme-icon');
  moonImage.src = moon;
  moonImage.width = 26;
  moonImage.height = 26;
  header.appendChild(title);
  header.appendChild(moonImage);
  return header;
}
