const grid = document.body.querySelector('#grid');
const columns = document.body.querySelectorAll('.column');
columns.forEach((eachColumn, idx) => {
  // eachColumn.dataset.nth = idx + 1;
  const sticky = eachColumn.querySelector('.sticky');
  sticky.dataset.nth = idx + 1;
  sticky.addEventListener('click', (evt) => {
    const nth = evt.currentTarget.dataset.nth;
    grid.dataset.selectedNth = nth;
  });
});
