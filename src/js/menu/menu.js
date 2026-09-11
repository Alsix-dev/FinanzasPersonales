import {
    expandirSidebar,
    comprimirSidebar,
    recuperarEstado
} from "../sidebar/barrel_sidebar.js";

const header = document.querySelector('header');
const contenedor = document.querySelector('.menu-principal');

const estadoMenu = {
    estado: false                           // true: abierto || false: cerrado.
}

const abrirMenu = (main_sidebar) => {
    contenedor.classList.add('active-Nav');
    comprimirSidebar(main_sidebar);
    estadoMenu.estado = true;
}

const cerrarMenu = (main_sidebar) => {
    const estadoSidebar = recuperarEstado();
    contenedor.classList.remove('active-Nav');
    if(estadoSidebar){
        expandirSidebar(main_sidebar);
    }
    estadoMenu.estado = false;
}

const alternarMenu = (main_sidebar) => {
    if(estadoMenu.estado){
        cerrarMenu(main_sidebar);
    } else {
        abrirMenu(main_sidebar);
    }
}

header.addEventListener('click', (event) => {
    const btn_menu = event.target.closest('#btn-Menu');
    if(!btn_menu) return;

    const main_sidebar = document.querySelector('aside.main-sidebar');
    alternarMenu(main_sidebar);
});
