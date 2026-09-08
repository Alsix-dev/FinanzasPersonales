import { 
    formConfTransccion,
    leerFormTransaccion,
    verificarExisteDia
} from "../../barrel.js";

import { actualizarEstadisticas } from "../../barrel.js";
import { actualizarCarteles } from "../../barrel.js";

/* ==========================================================================
   AÑADIR TRANSACCION
   ==========================================================================
   • [!] CAPAS:
        • GESTIONAR - INPUTS
        • CREAR = TRANSACCION
   ========================================================================== */
import { crearFecha } from "../../barrel.js";
import { crearTransaccion } from "../../barrel.js";

const listado_fechas = document.querySelector('.listado-fechas');

const hoy = new Date();

function generarTransaccion(event){
    event.preventDefault();

    const {
        siExiste,
        fecha
    } = verificarExisteDia(hoy);

    let valoresInputs = leerFormTransaccion();
    const nuevaTransaccion = crearTransaccion(valoresInputs, hoy);
    
    if(siExiste){
        const actualFecha = fecha.querySelector('.mov-en-fecha');
        actualFecha.prepend(nuevaTransaccion);
    } else {
        const nuevaFecha = crearFecha(nuevaTransaccion, hoy);
        listado_fechas.prepend(nuevaFecha);
    }

    actualizarEstadisticas(valoresInputs.leerTipoTransc, valoresInputs.leerImporteTransc);
    actualizarCarteles(valoresInputs.leerTipoTransc, valoresInputs.leerImporteTransc);
}

formConfTransccion.obtenerFormTransc.addEventListener('submit', generarTransaccion);
