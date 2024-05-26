const grid = document.body.querySelector('#grid');
const columns = document.body.querySelectorAll('.grid__column > .sticky');
console.log(grid);
console.log(columns);
columns.forEach((eachColumn, idx) => {
  eachColumn.dataset.nth = idx + 1;
  eachColumn.addEventListener('click', (evt) => {
    const nth = evt.currentTarget.dataset.nth;
    grid.dataset.selectedNth = nth;
  });
});
