import {
    AbreviarDinero,
    QuitarAbreviacionDinero,
    RecuperarEstado,
    SetearEstado,
    RecuperarElementos,
    CambiarEstado,
    CambiarEstadoLista
} from './barrel_sidebar.js';

const show_sidebar_main = document.getElementById('show-sidebar-main');

function ActualizarSidebar(estado){
    const elementos = RecuperarElementos();
    if(!elementos) return;
    const { h2, h4s, iconos, cantidades } = elementos;

    if(estado) AbreviarDinero(cantidades);
    else QuitarAbreviacionDinero(cantidades);

    CambiarEstado(h2, 'full', !estado);
    CambiarEstadoLista(h4s, 'full', !estado);
    CambiarEstadoLista(iconos, 'full', estado);
}

document.addEventListener('sidebar:estado', (event) => {
    const estado = event.detail.estado;
    ActualizarSidebar(!estado);
});

show_sidebar_main.addEventListener('click', () => {
    const estado = RecuperarEstado();
    SetearEstado(!estado);
});
