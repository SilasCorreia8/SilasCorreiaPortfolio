let btnMenu = document.getElementById('btn-abrir-menu-id');
let menu = document.getElementById('menu-mobile-id');
let overlay = document.getElementById('overlay-menu-id');


btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu');
});