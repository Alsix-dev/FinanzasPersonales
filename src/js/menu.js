import {
    expandirSidebar,
    comprimirSidebar
} from "../js/sidebar.js"

const header = document.querySelector('header');

const alternarMenu = () => {
    const contenedor = document.querySelector('.menu-principal');
    const main_sidebar = document.querySelector('aside.main-sidebar');

    if(contenedor.classList.contains('active-Nav')){
        expandirSidebar(main_sidebar);
        contenedor.classList.remove('active-Nav');
    } else {
        comprimirSidebar(main_sidebar);
        contenedor.classList.add('active-Nav');
    }
}

header.addEventListener('click', (event) => {
    if(!event.target.closest('button')) return

    if(event.target.closest('#btn-Menu')){
        alternarMenu();

    }
});

// hacer en un js aparte que el sidebar se comprima y expanda para luego exportar su funcion en este .js
// y usarlo cuando se activa el menu.