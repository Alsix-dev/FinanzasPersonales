import {
    expandirSidebar,
    comprimirSidebar,
    recuperarEstado
} from "../js/sidebar/sidebar.js"

const header = document.querySelector('header');

const alternarMenu = () => {
    const contenedor = document.querySelector('.menu-principal');
    const main_sidebar = document.querySelector('aside.main-sidebar');
    let estadoSidebar = recuperarEstado();

    if(contenedor.classList.contains('active-Nav')){
        contenedor.classList.remove('active-Nav');
        if(estadoSidebar){
            expandirSidebar(main_sidebar);
        }
    } else {
        contenedor.classList.add('active-Nav');
        comprimirSidebar(main_sidebar);
    }
}

header.addEventListener('click', (event) => {
    if(!event.target.closest('button')) return

    if(event.target.closest('#btn-Menu')){
        alternarMenu();

    }
});
