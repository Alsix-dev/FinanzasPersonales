import {
    RecuperarEstado,
    SetearEstado,
    RecuperarEstadoAnterior,
    SetearEstadoAnterior
} from "../sidebar/barrel_sidebar.js";

const header = document.querySelector('header');
const contenedor = document.querySelector('.menu-principal');

const estadoMenu = {
    estado: false                           // true: abierto || false: cerrado.
}

const AbrirMenu = () => {
    const estado = RecuperarEstado();
    contenedor.classList.add('active-Nav');
    SetearEstadoAnterior(estado);
    SetearEstado(false);
    estadoMenu.estado = true;
}

const CerrarMenu = () => {
    const estado = RecuperarEstadoAnterior();
    contenedor.classList.remove('active-Nav');
    SetearEstado(estado);
    estadoMenu.estado = false;
}

const AlternarMenu = () => {
    if(estadoMenu.estado) CerrarMenu(); 
    else AbrirMenu();
}

header.addEventListener('click', (event) => {
    const btn_menu = event.target.closest('#btn-Menu');
    if(!btn_menu) return;
    AlternarMenu();
});
