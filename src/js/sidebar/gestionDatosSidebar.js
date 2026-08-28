import { 
    recuperarElementos,
    abreviarDinero,
    sidebar
} from "../sidebar/sidebar.js";

const ingresoAnual = document.getElementById('ingresoAnual');
const EgresoAnual = document.getElementById('EgresoAnual');
const movMes = document.getElementById('movMes');

const estadisticas = {
    egreso: 0,
    ingreso: 0,
    movimientos: 0
}

function actualizarAbreviacionSidebar(){
    const main_sidebar = document.querySelector('aside.main-sidebar');

    if(!main_sidebar) return;
    const { cantidades } = recuperarElementos(main_sidebar);

    if(!sidebar.estado){
        abreviarDinero(cantidades);
    }
}

function actualizarEstadisticas(tipoTransaccion, importe){
    if(tipoTransaccion === 'ingreso'){
        estadisticas.ingreso += Number(importe);
        ingresoAnual.textContent = `$${estadisticas.ingreso}`;
    } 
    else {
        estadisticas.egreso += Number(importe);
        EgresoAnual.textContent = `$${estadisticas.egreso}`;
    }

    estadisticas.movimientos += 1;
    movMes.textContent = estadisticas.movimientos;

    actualizarAbreviacionSidebar();
}

export {
    actualizarEstadisticas
}