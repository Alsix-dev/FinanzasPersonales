import { 
    ObtenerColorTransaccion,
    ObtenerColorCategoria,
    ObtenerIconoCategoria
} from "../../barrel.js";

export function CrearTransaccion(inputs, horario){
    const { 
        leerName: name, 
        leerTransc: transaccion,
        leerCat: categoria, 
        leerImp: importe
    } = inputs;

    const colorTransc = ObtenerColorTransaccion(transaccion);
    const colorCat = ObtenerColorCategoria(transaccion, categoria);
    const icono = ObtenerIconoCategoria(transaccion, categoria);

    const li = document.createElement('li');
    li.className = 'isTransaccion';

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

    li.querySelector('.cat-transaccion').style.color = colorCat;
    li.querySelector('.importe').style.color = colorTransc;

    return li;
}
