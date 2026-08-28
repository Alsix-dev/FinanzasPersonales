import { tipoCatTransc } from "../crearTransaccion/gestionFormulario.js";

/* ==========================================================================
   GESTION FILTRACIONES
   ==========================================================================
   • [!] CAPAS:
        • ABRIR MENU
        • CERRAR MENU
   ========================================================================== */

const overlays = document.getElementById('overlays');
const btns_Filtrar = document.querySelectorAll('.btn-filtrar');

/* ==========================================================================
   ABRIR MENU
   ========================================================================== */
const abrirMenu = () => {
    overlays.classList.add('active-overlay');
    const menuFiltrar = overlays.querySelector('.modal-filtrar');
    menuFiltrar.classList.add('active-modal');
}

btns_Filtrar.forEach(button => {
    button.addEventListener('click', (event) => {
        if(!event.target.closest('button')) return

        abrirMenu();
    });
});

/* ==========================================================================
   CERRAR MENU
   ========================================================================== */
const cerrarMenu = () => {
    overlays.classList.remove('active-overlay');
    overlays.querySelector('.modal-filtrar').classList.remove('active-modal');
}

overlays.addEventListener('click', (event) => {
    const btn_closet = event.target.closest('.btn-closet');
    const isOverlays = event.target;
    if(btn_closet || isOverlays === overlays){
        cerrarMenu();
    }
});

/* ==========================================================================
   TIPO - CATEGORIA
   ========================================================================== */
const tipo = document.getElementById("i-filtrar-transaccion");
const categoria = document.getElementById("i-filtrar-categoria");

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
