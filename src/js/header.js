

const navItems = document.querySelectorAll('.header__item');
const body = document.querySelectorAll('body');

function addNavEventListeners() {
    console.log('adding')
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', () => {
            console.log('added')
            body.style.backgroundColor = 'red';
        })
    } 
}

window.onload = addNavEventListeners();