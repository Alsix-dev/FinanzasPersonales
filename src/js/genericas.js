function quitarCaracteresPrecio(cadena, ...elementos){
    let devolver = cadena;
    for(let i = 0; i < elementos.length; i++){
        devolver = devolver.replaceAll(elementos[i], "");
    }
    return devolver;
}

function convertirPrecioNumerico(valor){
    let valorNuevo = quitarCaracteresPrecio(valor.textContent, "$", ".");
    return Number(valorNuevo);
}

function capitalizarTexto(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function pasarMesATexto(mes){
    const mesTexto = [
        "enero","febrero","marzo","abril","mayo","junio","julio",
        "agosto","septiembre","octubre","noviembre","diciembre"
    ];
    return mesTexto[mes-1];
}

export {
    quitarCaracteresPrecio,
    convertirPrecioNumerico,
    capitalizarTexto,
    pasarMesATexto
}