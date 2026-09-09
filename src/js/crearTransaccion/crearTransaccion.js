import { capitalizarTexto } from "../../barrel.js";
import { 
    ObtenerColorTransaccion,
    ObtenerColorCategoria,
    ObtenerIconoCategoria
} from "../../barrel.js";

export function crearTransaccion(items, hoy){
    let name = capitalizarTexto(items.leerName);
    let transaccion = items.leerTransc;
    let categoria = items.leerCat;
    let importe = items.leerImp;

    const colorTransaccion = ObtenerColorTransaccion(transaccion);
    let icono = ObtenerIconoCategoria(transaccion, categoria);
    let colorCategoria = ObtenerColorCategoria(transaccion, categoria);
    
    const hh = hoy.getHours();
    const mm = hoy.getMinutes();
    let horario = hh + ':' + mm;

    const li = document.createElement('li');
    li.className = "isTransaccion";
    li.innerHTML = `
        <span class="text-Listado ttl-transaccion">${name}</span>
        <div class="cat-transaccion">
            <span class="material-symbols-outlined">${icono}</span>
            <span class="text-Listado">${categoria}</span>
        </div>
        <div class="extras-transaccion">
            <span class="text-Listado importe">$${importe}</span>
            <span class="text-Listado isHorario">${horario}</span>
        </div>
    `;

    li.querySelector('.cat-transaccion').style.color = colorCategoria;
    li.querySelector('.importe').style.color = colorTransaccion;
    return li;
}
