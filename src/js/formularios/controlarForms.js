import { 
    controlarTransaccion, 
    DesplegarCategorias
} from "../../barrel.js";

const overlay = document.getElementById('overlays');

const formularios = {
    'transaccion': controlarTransaccion
    // 'f-filtrar': filtrarMovimientos
}

function DatosFormulario(formulario){
    const datos = new FormData(formulario);

    return {
        leerName: datos.get('nombre-transaccion').trim(),
        leerTransc: datos.get('tipo-transaccion'),
        leerCat: datos.get('tipo-categoria'),
        leerImp: datos.get('importe-transaccion'),
        leerFecha: datos.get('fecha-transacciones')
    }
}

const InicializarFormulario = (formulario) => {
    const transaccion = formulario.querySelector('[name="tipo-transaccion"]');
    const categoria = formulario.querySelector('[name="tipo-categoria"]');

    if(!transaccion || !categoria) return;

    DesplegarCategorias(categoria, transaccion.value);
}

overlay.addEventListener('submit', (event) => {
    event.preventDefault();
    const isForm = event.target;
    if(!isForm) return;

    const idForm = isForm.dataset.form;
    const ejecutarForm = formularios[idForm];
    if(!ejecutarForm) return;
    ejecutarForm(isForm);
});

overlay.addEventListener('change', (event) => {
    const transaccion = event.target.closest('[name="tipo-transaccion"]');
    if(!transaccion) return;

    const form = transaccion.closest('form');
    if(!form) return;
    InicializarFormulario(form)
});

overlay.addEventListener('modal:abierto', (event) => {
    const modal = event.detail.modal;
    const form = modal.querySelector('form');
    if(!form) return;
    InicializarFormulario(form);
});

export {
    DatosFormulario
}
