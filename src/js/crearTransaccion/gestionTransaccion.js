import { categorias } from "../crearTransaccion/gestionFormulario.js";

/* ==========================================================================
   GESTION TRANSACCION
   ==========================================================================
   • [!] CAPAS:
        • ABRIR MENU
        • CERRAR MENU
        • SELECT - TIPO CATEGORIA
   ========================================================================== */
const overlays = document.getElementById('overlays');

/* ==========================================================================
   ABRIR MENU
   ========================================================================== */
const abrirMenu = (element) => {
    element.classList.add('active-overlay');
}

document.addEventListener('click', (event) => {
    if(event.target.closest('#btn-Add')){
        abrirMenu(overlays);
    }
});

/* ==========================================================================
   CERRAR MENU
   ========================================================================== */
const cerrarMenu = (element) => {
    element.classList.remove('active-overlay');
}

overlays.addEventListener('click', (event) => {
    const btn_closet = event.target.closest('.btn-closet');
    const isOverlays = event.target;
    if(btn_closet || isOverlays === overlays){
        cerrarMenu(overlays);
    }
});

/* ==========================================================================
   SELECT - TIPO CATEGORIA
   ========================================================================== */
const tipo = document.getElementById("tipo-transaccion");

function esTipoCategoria(){
    const categoria = document.getElementById("tipo-categoria");
    categoria.innerHTML = "";
    categorias[tipo.value].forEach(cat => {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = cat.value;
        nuevaOpcion.textContent = cat.categoria;
        categoria.appendChild(nuevaOpcion);
    });
}

tipo.addEventListener("change", esTipoCategoria);
esTipoCategoria();
