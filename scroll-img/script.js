let scrollContainer = document.querySelector('.gallery');
let backbtn = document.getElementById('backbtn');
let nextbtn = document.getElementById('nextbtn');

// scrollContainer.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     scrollContainer.scrollLeft += e.deltaY;
//     scrollContainer.style.scrollBehavior = 'auto';

// });

nextbtn.addEventListener('click', () => {
    // to scroll 900px to the right side by clicking the next button (900px is the width of container)
    scrollContainer.scrollLeft += 400;
    scrollContainer.style.scrollBehavior = 'smooth';

});

backbtn.addEventListener('click', () => {
    // to scroll 900px to the right side by clicking the back button (900px is the width of container)
    // scrollBehavior B shuld be capital
    scrollContainer.style.scrollBehavior = 'smooth';
    scrollContainer.scrollLeft -= 400;
});