import { CrearFecha } from './barrel_cFecha.js';

export function InyectarFechaCreada(fecha, datos, fechaParse){
    const listado_fechas = document.querySelector('.listado-fechas');

    if(!fecha){
        const fechaCreada = CrearFecha(datos, fechaParse);
        listado_fechas.appendChild(fechaCreada);
        return fechaCreada;
    }

    return false;
}
