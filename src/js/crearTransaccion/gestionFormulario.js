import { pasarMesATexto } from "../../barrel.js";
import { tipoCatTransc } from "../Objetos/tipoCategoria.js";

/* ==========================================================================
   GESTION TRANSACCION
   ==========================================================================
   • [!] CAPAS:
        • SELECT - TIPO
        • LEER - FORMULARIO
        • VERIFICAR - DATOS
        • BUSCAR - DATOS
   ========================================================================== */


/* ==========================================================================
   SELECT - TIPO
   ========================================================================== */
const tipo = document.getElementsByName("tipo-transaccion")[0];
const categoria = document.getElementsByName("tipo-categoria")[0];

function esTipoCategoria(){
    categoria.innerHTML = "";
    tipoCatTransc[tipo.value].categoria.forEach(cat => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = cat.value;
        nuevaOpcion.textContent = cat.categoria;
        categoria.appendChild(nuevaOpcion);
    });
}

tipo.addEventListener("change", esTipoCategoria);
esTipoCategoria();

/* ==========================================================================
   VERIFICAR - DATOS
   ========================================================================== */
const verificarExisteDia = (hoy) => {
    const diaActual = hoy.getDate();
    const mesActual = hoy.getMonth() + 1;
    const anio = hoy.getFullYear();
    let fechaActual = diaActual + ' de ' + pasarMesATexto(mesActual);

    const listado = document.querySelectorAll(`
        .fecha-transacciones[data-mes="${mesActual}"][data-anio="${anio}"]
    `);
    const flag = {
        siExiste: false,
        fecha: null
    };

    [...listado].find(fecha => { 
        let diaEnLista = fecha.querySelector('h4').textContent;
        if(fechaActual === diaEnLista){
            flag.siExiste = true;
            flag.fecha = fecha;
            return true;
        }

        return false;
    });

    return flag;
}

/* ==========================================================================
   BUSCAR - DATOS
   ========================================================================== */
const buscarCategoria = (transaccion, categoria) => {
    return tipoCatTransc[transaccion].categoria.find(cat => cat.value === categoria);
}

const buscarColorTransaccion = (transaccion) => {
    return tipoCatTransc[transaccion].color;
}

export {
    buscarColorTransaccion,
    buscarCategoria,
    verificarExisteDia
}
