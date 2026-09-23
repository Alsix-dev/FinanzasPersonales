const overlays = document.getElementById('overlays');

function ExpandirMovimientos(contenedor, activador){
    const origen = activador.closest('.contenedor_mov');
    const cartelActivo = activador.closest('.cartel-categoria');
    const copia = origen.cloneNode(true);

    copia.querySelectorAll('.cartel-categoria').forEach(cartel => {
        if (cartel.dataset.tipoGrafico !== cartelActivo.dataset.tipoGrafico) {
            cartel.remove();
        }
    });

    copia.querySelector('.mov-expandir')?.remove();
    contenedor.innerHTML = copia.innerHTML;
}

const abrirMenu = (modal) => {
    overlays.classList.add('active-overlay');
    modal.classList.add('active-modal');

    modal.dispatchEvent(
        new CustomEvent('modal:abierto', {
            bubbles: true,
            detail: {
                modal            
            }
        })
    );
}

document.addEventListener('click', (event) => {
    const boton = event.target.closest('[data-boton-modal]');
    if(!boton) return;

    const tipoModal = boton.dataset.botonModal;
    const modal = overlays.querySelector(`[data-tipo-modal=${tipoModal}]`);
    if(!modal) return;
    abrirMenu(modal);

    if(modal.dataset.tipoModal !== "expandir") return;
    ExpandirMovimientos(modal, boton);
});

const cerrarMenu = (modal) => {
    overlays.classList.remove('active-overlay');
    modal.classList.remove('active-modal');

    modal.dispatchEvent(
        new CustomEvent('modal:cerrar', {
            bubbles: true,
            detail: {
                modal 
            }
        })
    );
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
