import { 
    ExisteFecha,
    actualizarEstadisticas,
    actualizarCarteles,
    DatosFormulario,
    InyectarFechaCreada,
    CrearTransaccion
} from "../../barrel.js";

function ContenedorMovimientos(){
    const transacciones = document.querySelector('.mov-transacciones');
    let ul = transacciones.querySelector('.listado-fechas');
    if(ul) return;

    ul = document.createElement('ul');
    ul.className = "listado-fechas";
    transacciones.appendChild(ul);
    return ul;
}

function ControlarMovimientos(form){
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

export {
    ControlarMovimientos
}