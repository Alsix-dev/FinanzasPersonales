/* ==========================================================================
   GESTION TRANSACCION
   ==========================================================================
   • [!] CAPAS:
        • ABRIR MENU
        • CERRAR MENU
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
