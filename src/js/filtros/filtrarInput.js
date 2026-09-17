const input_buscar = document.getElementById('src-mov-input');

input_buscar.addEventListener('input', (event) => {
    const div_movimientos = input_buscar.closest('.main-movimientos');
    const li_transacciones = div_movimientos.querySelectorAll('.isTransaccion');

    const datos = event.target.value.trim().toLowerCase();
    li_transacciones.forEach(item => {
        const titulo = item.querySelector('.ttl-transaccion').textContent.trim().toLowerCase();
        const coincide = titulo.includes(datos) ? '' : 'none';
        const abuelo = item.closest('.fecha-transacciones');
        const padre = abuelo.querySelector('.mov-en-fecha');
        item.style.display = coincide;
        const hayHijos = [...padre.children].some(li => li.style.display !== 'none');
        abuelo.style.display = hayHijos ? '' : 'none';
    });
});
