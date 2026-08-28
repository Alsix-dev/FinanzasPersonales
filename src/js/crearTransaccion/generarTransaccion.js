import { 
    formConfTransccion,
    leerFormTransaccion,
    verificarExisteDia
} from "../crearTransaccion/gestionFormulario.js";

import { actualizarEstadisticas } from "../sidebar/gestionDatosSidebar.js";
import { actualizarCarteles } from "../carteles/carteles.js";

/* ==========================================================================
   AÑADIR TRANSACCION
   ==========================================================================
   • [!] CAPAS:
        • GESTIONAR - INPUTS
        • CREAR = TRANSACCION
   ========================================================================== */
import { crearFecha } from "../crearTransaccion/crearFecha.js";
import { crearTransaccion } from "../crearTransaccion/crearTransaccion.js";

const listado_fechas = document.querySelector('.listado-fechas');

function generarTransaccion(event){
    event.preventDefault();
    const hoy = new Date();

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
