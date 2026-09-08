import { controlarTransaccion } from "../../barrel.js";

const overlay = document.getElementById('overlays');

const formularios = {
    'f-añadir-transaccion': controlarTransaccion
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

overlay.addEventListener('submit', (event) => {
    event.preventDefault();
    const isForm = event.target;
    if(!isForm) return;

    const idForm = isForm.dataset.form;
    const ejecutarForm = formularios[idForm];
    if(!ejecutarForm) return;
    ejecutarForm(isForm);
});

export {
    DatosFormulario,
}
