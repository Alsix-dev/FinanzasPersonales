const meses = {
    mes: [
        "enero","febrero","marzo","abril",
        "mayo","junio","julio","agosto",
        "septiembre","octubre","noviembre","diciembre"
    ],
    direccion: {
        siguienteMes(indice){ 
            return indice+1;
        },
        anteriorMes(indice){ 
            return indice-1;
        }
    }
}

function pasarMesATexto(mes){
    return meses.mes[mes];
}

function RetornarMes(mes, direccion){
    // Si es 0 y direccion -1 --> Devuelve 11 (Diciembre).
    // Si es 11 y direccion +1 --> Devuelve 0 (Enero).
    const { 
        mes:MesTextual,
        direccion:DesplazarMes
    } = meses;

    const indice = MesTextual.indexOf(mes);
    const nuevoIndice = DesplazarMes[direccion](indice);
    const cantMeses = MesTextual.length;
    const mesActual = (nuevoIndice + cantMeses) % cantMeses;
    return pasarMesATexto(mesActual);
}

export {
    RetornarMes,
    pasarMesATexto
}
