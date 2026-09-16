import { CrearTransaccion } from '../../componentes/crearTransaccion/barrel_ctransc.js';
import { InyectarFechaCreada } from '../../componentes/crearFecha/barrel_cFecha.js';
import { actualizarCarteles } from '../carteles/barrel_carteles.js';
import { actualizarEstadisticas } from '../sidebar/barrel_sidebar.js';
import { ExisteFecha } from '../fecha/barrel_fecha.js';
import { DatosFormulario } from '../formularios/barrel_form.js';

function ContenedorMovimientos(){
    const transacciones = document.querySelector('.mov-transacciones');
    let ul = transacciones.querySelector('.listado-fechas');
    if(ul) return;

    ul = document.createElement('ul');
    ul.className = "listado-fechas";
    transacciones.appendChild(ul);
    return ul;
}

export function ControlarMovimientos(form){
    ContenedorMovimientos();
    const { fecha, datos, fechaParse, horaParse } = ExisteFecha();
    const inputs = DatosFormulario(form);
    const transcCreada = CrearTransaccion(inputs, horaParse);
    const existeFecha = InyectarFechaCreada(fecha, datos, fechaParse);
    let mov_en_fecha = null;
    
    if(existeFecha){
        mov_en_fecha = existeFecha.querySelector('.mov-en-fecha');
    } else {
        mov_en_fecha = fecha.querySelector('.mov-en-fecha');
    }

    mov_en_fecha.appendChild(transcCreada);
    actualizarEstadisticas(inputs.leerTransc, inputs.leerImp);
    actualizarCarteles(inputs.leerTransc, inputs.leerImp);
}
