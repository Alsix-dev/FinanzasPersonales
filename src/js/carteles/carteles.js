const estadisticas = {
    ingreso: 0,
    egreso: 0,

    elementos: {
        ingreso: document.getElementById('cartel-ingreso'),
        egreso: document.getElementById('cartel-egreso')
    },

    Asignar(tipo, valor){ 
        this[tipo] += valor;
    }
}

export function actualizarCarteles(tipo, importe){
    const nuevoImporte = Number(importe);
    estadisticas.Asignar(tipo, nuevoImporte);
    estadisticas.elementos[tipo].textContent = `$${estadisticas[tipo]}`;
}
