import { pasarMesATexto } from "../../barrel.js";

const CrearFecha = () => {
    const datos = new Date();
    return {
        dia: datos.getDate(),
        mes: datos.getMonth(),
        anio: datos.getFullYear()
    }
}

const FormatoFecha = (dia, mes) => {
    return `${dia} de ${pasarMesATexto(mes)}`
}

const buscarFecha = (nuevaFecha, listado) => {
    return [...listado].find(fecha => {
        const textFecha = fecha.querySelector('h4').textContent;
        if(textFecha === nuevaFecha) return fecha;
    });
}

function ExisteFecha(){
    const { dia, mes, anio } = CrearFecha();
    const nuevaFecha = FormatoFecha(dia, mes);
    
    const listado = document.querySelectorAll(`
        .fecha-transacciones[data-mes="${mes}"][data-anio="${anio}"]
    `);

    const fecha = buscarFecha(nuevaFecha, listado);
    
    return fecha;
}

export {
    ExisteFecha
}
