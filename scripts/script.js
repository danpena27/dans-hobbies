/*
Author: Daniel Pena Arias
File Name: script.js
Date: 09/28/2026
*/

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-links');
const mobile = window.matchMedia('(max-width: 629px)');
function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
}
function syncMenu() {
    toggle.hidden = !mobile.matches;
    setOpen(!mobile.matches);
}
toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && !menu.hidden) {
        setOpen(false);
        toggle.focus();
    }
});
mobile.addEventListener('change', syncMenu);
syncMenu();
