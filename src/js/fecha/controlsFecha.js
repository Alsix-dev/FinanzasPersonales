import { pasarMesATexto } from "../../barrel.js";

const FormatoFecha = (dia, mes) => {
    return `${dia} de ${pasarMesATexto(mes)}`
}

const FormatoHora = (min, hora) => {
    return `${hora}:${min}`;
}

const CrearFecha = () => {
    const fecha = new Date();
    const datos = {
        min: fecha.getMinutes(),
        hora: fecha.getHours(),
        dia: fecha.getDate(),
        mes: fecha.getMonth(),
        anio: fecha.getFullYear(),
    }

    return {
        datos, 
        mods: {
            fechaParse: FormatoFecha(datos.dia, datos.mes),
            horaParse: FormatoHora(datos.min, datos.hora)
        }
    }
}

const buscarFecha = (nuevaFecha, listado) => {
    return [...listado].find(fecha => {
        const textFecha = fecha.querySelector('h4').textContent;
        if(textFecha === nuevaFecha) return fecha;
    });
}

function ExisteFecha(){
    const fechaCreada  = CrearFecha();
    const { datos, mods } = fechaCreada;
    
    const listado = document.querySelectorAll(`
        .fecha-transacciones[data-mes="${datos.mes}"][data-anio="${datos.anio}"]
    `);

    const fecha = buscarFecha(mods.fechaParse, listado);
    
    return {
        fecha,
        datos,
        fechaParse: mods.fechaParse,
        horaParse: mods.horaParse
    };
}

export {
    ExisteFecha
}
