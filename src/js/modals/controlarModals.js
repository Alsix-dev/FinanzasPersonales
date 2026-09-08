const overlays = document.getElementById('overlays');

const abrirMenu = (modal) => {
    overlays.classList.add('active-overlay');
    modal.classList.add('active-modal');
}

document.addEventListener('click', (event) => {
    const boton = event.target.closest('[data-boton-modal]');
    if(!boton) return;
    const tipoModal = boton.dataset.botonModal;
    const modal = overlays.querySelector(`[data-tipo-modal=${tipoModal}]`);
    if(!modal);
    abrirMenu(modal);
});

const cerrarMenu = (modal) => {
    overlays.classList.remove('active-overlay');
    modal.classList.remove('active-modal');
}

overlays.addEventListener('click', (event) => {
    const btn_closet = event.target.closest('.btn-closet');
    const isOverlay = event.target;
    let modal;

    if(btn_closet){
        modal = btn_closet.closest('.modal');
    } else if(isOverlay === overlays){
        modal = overlays.querySelector('.modal.active-modal');
    }

    if(!modal) return;
    cerrarMenu(modal);
});