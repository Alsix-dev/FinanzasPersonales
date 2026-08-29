import { pasarMesATexto } from "../genericas.js";

export function crearFecha(nuevaTransaccion, hoy){
    const dd = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const aa = hoy.getFullYear();
    let diaMes = dd + ' de ' + pasarMesATexto(mes);

    const li = document.createElement('li');
    li.className = 'fecha-transacciones';

    li.innerHTML = `
        <h4>${diaMes}</h4>
        <ul class="mov-en-fecha"></ul>
        <div class="divider"></div>
    `;

    li.querySelector('.mov-en-fecha').appendChild(nuevaTransaccion);
    li.dataset.dia = String(dd);
    li.dataset.mes = String(mes);
    li.dataset.anio = String(aa);

    return li;
}
