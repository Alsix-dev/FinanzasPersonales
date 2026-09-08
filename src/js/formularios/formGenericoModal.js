import { 
    tipoCatTransc 
} from "../../archivoBarrel.js";

function formularioCrear(formulario){
    const datos = new FormData(formulario);

    return {
        leerName: datos.get('nombre-transccion').trim(),
        leerTransc: datos.get('tipo-transccion'),
        leerCat: datos.get('tipo-categoria'),
        leerImp: datos.get('importe-transaccion'),
        leerFecha: datos.get('fecha-transacciones')
    }
}

export {
    formularioCrear
}

