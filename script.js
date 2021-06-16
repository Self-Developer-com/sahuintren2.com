const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('.wrapper .bottom_nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
});