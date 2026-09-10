export function InyectarFechaCreada(fecha, datos, fechaParse){
    const listado_fechas = document.querySelector('.listado-fechas');

    if(!fecha){
        const fechaCreada = CrearFecha(datos, fechaParse);
        listado_fechas.appendChild(fechaCreada);
        return fechaCreada;
    }

    return false;
}

function CrearFecha(datos, nuevaFecha){
    const li = document.createElement('li');
    li.className = 'fecha-transacciones';
    li.innerHTML = `
        <h4>${nuevaFecha}</h4>
        <ul class="mov-en-fecha"></ul>
        <div class="divider"></div>
    `;

    li.dataset.dia = String(datos.dia);
    li.dataset.mes = String(datos.mes);
    li.dataset.anio = String(datos.anio);
    return li;
}
