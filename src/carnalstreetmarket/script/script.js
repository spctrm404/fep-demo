const grid = document.body.querySelector('#grid');
const columns = document.body.querySelectorAll('.column');

columns.forEach((eachColumn) =>
  eachColumn.addEventListener('click', (evt) => {
    grid.dataset.opened = evt.currentTarget.dataset.nth;
  })
);
