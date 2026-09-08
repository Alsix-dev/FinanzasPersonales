import { tipoCatTransc } from "../Objetos/tipoCategoria.js";

/* ==========================================================================
   TIPO - CATEGORIA
   ========================================================================== */
const tipo = document.getElementsByName("tipo-transaccion")[1];
const categoria = document.getElementsByName("tipo-categoria")[1];

function esTipoCategoria(){
    categoria.innerHTML = "";
    tipoCatTransc[tipo.value].categoria.forEach(cat => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = cat.value;
        nuevaOpcion.textContent = cat.categoria;
        categoria.appendChild(nuevaOpcion);
    });
}

tipo.addEventListener("change", esTipoCategoria);
esTipoCategoria();
