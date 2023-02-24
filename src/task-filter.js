export default function createTaskFilter() {
  const container = document.createElement('div');
  container.id = 'task-filter-container';

  const all = document.createElement('p');
  all.classList.add('filter-titles');
  all.textContent = 'All';

  const active = document.createElement('p');
  active.classList.add('filter-titles');
  active.textContent = 'Active';

  const completed = document.createElement('p');
  completed.classList.add('filter-titles');
  completed.textContent = 'Completed';

  container.append(all, active, completed);
  return container;
}
