import { pasarMesATexto } from "../../barrel.js";

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

export {
    verificarExisteDia
}
