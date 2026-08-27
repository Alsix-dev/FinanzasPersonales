import { capitalizarTexto } from "../genericas.js";
import { buscarCategoria } from "../crearTransaccion/gestionFormulario.js";

export function crearTransaccion(items, hoy){
    let name = capitalizarTexto(items.leerNameTransc);
    let transaccion = items.leerTipoTransc;
    let categoria = items.leerTipoCatTransc;
    let importe = items.leerImporteTransc;
    const nuevaCategoria = buscarCategoria(transaccion, categoria);
    let icono = nuevaCategoria.icono;
    let color = nuevaCategoria.color;

    const hh = hoy.getHours();
    const mm = hoy.getMinutes();
    let horario = hh + ':' + mm;

    const li = document.createElement('li');
    li.className = "isTransaccion";
    li.innerHTML = `
        <span class="text-Listado ttl-transaccion">${name}</span>
        <div class="cat-transaccion"">
            <span class="material-symbols-outlined">${icono}</span>
            <span class="text-Listado">${categoria}</span>
        </div>
        <div class="extras-transaccion">
        <span class="text-Listado egreso-dinero">$${importe}</span>
        <span class="text-Listado">${horario}</span>
        </div>
    `;

    li.querySelector('.cat-transaccion').style.color = color;
    return li;
}
