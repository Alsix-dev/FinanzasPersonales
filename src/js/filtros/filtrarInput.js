const ul_fechas = document.querySelector('.listado-fechas');
const li_listado_items = document.querySelectorAll('.fecha-transacciones');
const input_buscar = document.getElementById('src-mov-input');

// const listItems_trasc = [];

input_buscar.addEventListener('input', (event) => {
    // const lista_de_fechas = []
    const div_movimientos = input_buscar.closest('.main-movimientos');
    // const li_fechas = div_movimientos.querySelectorAll('.fecha-transacciones');
    const li_transacciones = div_movimientos.querySelectorAll('.isTransaccion');

    // const fecha = li_fechas.forEach(fecha => {

    // });
    const datos = event.target.value.trim().toLowerCase();
    li_transacciones.forEach(item => {
        const titulo = item.querySelector('.ttl-transaccion').textContent.trim().toLowerCase();
        const coincide = titulo.includes(datos);
        item.style.display = coincide ? '' : 'none';
    });
});
