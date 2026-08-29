const ingreso = document.getElementById('cartel-ingreso');
const egreso = document.getElementById('cartel-egreso');
// const presupuesto = document.getElementById('cartel-presupuesto');

const estadisticas = {
    ingreso: 0,
    egreso: 0,
    presupuesto: 0
}

function actualizarCarteles(tipoTransaccion, importe){
    if(tipoTransaccion === 'ingreso'){
        estadisticas.ingreso += Number(importe);
        ingreso.textContent = `$${estadisticas.ingreso}`;
    } 
    else {
        estadisticas.egreso += Number(importe);
        egreso.textContent = `$${estadisticas.egreso}`;
    }
}

export {
    actualizarCarteles
}
