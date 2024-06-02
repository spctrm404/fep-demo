const stickies = document.body.querySelectorAll('.sticky');
const grid = document.body.querySelector('#grid');
stickies.forEach((eachSticky, idx) => {
  eachSticky.dataset.nth = idx + 1;
  eachSticky.addEventListener('click', (e) => {
    grid.dataset.selectedNth = e.currentTarget.dataset.nth;
  });
});
