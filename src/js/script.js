const 
    hamburger = document.querySelector('.humburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const 
    counters = document.querySelectorAll('.skills__percentages-item-value'),
    lines = document.querySelectorAll('.skills__percentages-item-line-purple')

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });
    