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

export {
    quitarCaracteresPrecio,
    convertirPrecioNumerico
}