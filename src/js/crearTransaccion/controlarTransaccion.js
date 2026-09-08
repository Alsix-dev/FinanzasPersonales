import { 
    verificarExisteDia
} from "../../barrel.js";
import { actualizarEstadisticas } from "../../barrel.js";
import { actualizarCarteles } from "../../barrel.js";
import { crearFecha } from "../../barrel.js";
import { crearTransaccion } from "../../barrel.js";

import { DatosFormulario } from "../../barrel.js"

const listado_fechas = document.querySelector('.listado-fechas');
const hoy = new Date();

function controlarTransaccion(formulario){
    const { siExiste, fecha } = verificarExisteDia(hoy);
    let valoresInputs = DatosFormulario(formulario);
    const nuevaTransaccion = crearTransaccion(valoresInputs, hoy);
    
    if(siExiste){
        const actualFecha = fecha.querySelector('.mov-en-fecha');
        actualFecha.prepend(nuevaTransaccion);
    } else {
        const nuevaFecha = crearFecha(nuevaTransaccion, hoy);
        listado_fechas.prepend(nuevaFecha);
    }

    actualizarEstadisticas(valoresInputs.leerTransc, valoresInputs.leerImp);
    actualizarCarteles(valoresInputs.leerTransc, valoresInputs.leerImp);
}

export {
    controlarTransaccion
}
