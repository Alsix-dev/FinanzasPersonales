const estadisticas = {
    ingreso: 0,
    egreso: 0,

    elementos: {
        ingreso: document.querySelector('#cartel-ingreso > span.pie-Calculado'),
        egreso: document.querySelector('#cartel-egreso > span.pie-Calculado')
    },

    Asignar(tipo, valor){ 
        this[tipo] += valor;
    }
}

const RecuperarEstadisticas = (tipo) => {
    return estadisticas[tipo];
}

function actualizarCarteles(tipo, importe){
    const nuevoImporte = Number(importe);
    estadisticas.Asignar(tipo, nuevoImporte);
    estadisticas.elementos[tipo].textContent = `$${estadisticas[tipo]}`;
}

export {
    actualizarCarteles,
    RecuperarEstadisticas
}