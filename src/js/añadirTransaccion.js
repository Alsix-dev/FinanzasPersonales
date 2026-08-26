/* ==========================================================================
   AÑADIR TRANSACCION
   ==========================================================================
   • [!] CAPAS:
        • CERRAR MENU
        • ABRIR MENU
        • SELECT - TIPO CATEGORIA
        • GESTIONAR - INPUTS
        • CREAR = TRANSACCION
   ========================================================================== */
const overlays = document.getElementById('overlays');

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
   SELECT - TIPO CATEGORIA
   ========================================================================== */
const tipo = document.getElementById("tipo-transaccion");

const categorias = {
    egreso: [
        {
            value: "Alimentacion",
            categoria: "Alimentación",
            icono: "restaurant",
            color: "#FF7043"
        },
        {
            value: "Supermercado",
            categoria: "Supermercado",
            icono: "shopping_cart",
            color: "#66BB6A"
        },
        {
            value: "Transporte",
            categoria: "Transporte",
            icono: "directions_car",
            color: "#42A5F5"
        },
        {
            value: "Combustible",
            categoria: "Combustible",
            icono: "local_gas_station",
            color: "#FFA726"
        },
        {
            value: "Vivienda",
            categoria: "Vivienda",
            icono: "home",
            color: "#8D6E63"
        },
        {
            value: "Alquiler",
            categoria: "Alquiler",
            icono: "house",
            color: "#A1887F"
        },
        {
            value: "Servicios",
            categoria: "Servicios",
            icono: "bolt",
            color: "#FDD835"
        },
        {
            value: "Internet",
            categoria: "Internet",
            icono: "wifi",
            color: "#29B6F6"
        },
        {
            value: "Telefonia",
            categoria: "Telefonía",
            icono: "smartphone",
            color: "#7E57C2"
        },
        {
            value: "Salud",
            categoria: "Salud",
            icono: "medical_services",
            color: "#EF5350"
        },
        {
            value: "Educacion",
            categoria: "Educación",
            icono: "school",
            color: "#5C6BC0"
        },
        {
            value: "Ropa",
            categoria: "Ropa",
            icono: "checkroom",
            color: "#EC407A"
        },
        {
            value: "Entretenimiento",
            categoria: "Entretenimiento",
            icono: "movie",
            color: "#AB47BC"
        },
        {
            value: "Suscripciones",
            categoria: "Suscripciones",
            icono: "subscriptions",
            color: "#7E57C2"
        },
        {
            value: "Tecnologia",
            categoria: "Tecnología",
            icono: "devices",
            color: "#78909C"
        },
        {
            value: "Restaurantes",
            categoria: "Restaurantes",
            icono: "local_dining",
            color: "#FF5722"
        },
        {
            value: "Viajes",
            categoria: "Viajes",
            icono: "flight",
            color: "#26A69A"
        },
        {
            value: "Compras",
            categoria: "Compras",
            icono: "shopping_bag",
            color: "#FF4081"
        },
        {
            value: "Mascotas",
            categoria: "Mascotas",
            icono: "pets",
            color: "#8D6E63"
        },
        {
            value: "Deudas",
            categoria: "Deudas",
            icono: "credit_card",
            color: "#D32F2F"
        },
        {
            value: "Prestamos",
            categoria: "Préstamos",
            icono: "request_quote",
            color: "#E53935"
        },
        {
            value: "Impuestos",
            categoria: "Impuestos",
            icono: "account_balance",
            color: "#546E7A"
        },
        {
            value: "Seguros",
            categoria: "Seguros",
            icono: "shield",
            color: "#5C6BC0"
        },
        {
            value: "Regalos",
            categoria: "Regalos",
            icono: "redeem",
            color: "#E91E63"
        },
        {
            value: "Donaciones",
            categoria: "Donaciones",
            icono: "volunteer_activism",
            color: "#26A69A"
        },
        {
            value: "Inversiones",
            categoria: "Inversiones",
            icono: "trending_up",
            color: "#00897B"
        },
        {
            value: "Ahorro",
            categoria: "Ahorro",
            icono: "savings",
            color: "#43A047"
        },
        {
            value: "Otros",
            categoria: "Otros",
            icono: "more_horiz",
            color: "#90A4AE"
        }
    ],

    ingreso: [
        {
            value: "Salario",
            categoria: "Salario",
            icono: "payments",
            color: "#2E7D32"
        },
        {
            value: "Trabajo independiente",
            categoria: "Trabajo independiente",
            icono: "work",
            color: "#388E3C"
        },
        {
            value: "Freelance",
            categoria: "Freelance",
            icono: "computer",
            color: "#43A047"
        },
        {
            value: "Negocio",
            categoria: "Negocio",
            icono: "store",
            color: "#00897B"
        },
        {
            value: "Ventas",
            categoria: "Ventas",
            icono: "sell",
            color: "#00A86B"
        },
        {
            value: "Inversiones",
            categoria: "Inversiones",
            icono: "trending_up",
            color: "#00796B"
        },
        {
            value: "Intereses",
            categoria: "Intereses",
            icono: "percent",
            color: "#689F38"
        },
        {
            value: "Dividendos",
            categoria: "Dividendos",
            icono: "paid",
            color: "#558B2F"
        },
        {
            value: "Alquileres cobrados",
            categoria: "Alquileres cobrados",
            icono: "real_estate_agent",
            color: "#00695C"
        },
        {
            value: "Bonificacion",
            categoria: "Bonificación",
            icono: "card_giftcard",
            color: "#7CB342"
        },
        {
            value: "Comision",
            categoria: "Comisión",
            icono: "price_check",
            color: "#009688"
        },
        {
            value: "Reembolso",
            categoria: "Reembolso",
            icono: "currency_exchange",
            color: "#26A69A"
        },
        {
            value: "Regalo recibido",
            categoria: "Regalo recibido",
            icono: "redeem",
            color: "#AB47BC"
        },
        {
            value: "Premio",
            categoria: "Premio",
            icono: "emoji_events",
            color: "#F9A825"
        },
        {
            value: "Venta de bienes",
            categoria: "Venta de bienes",
            icono: "sell",
            color: "#2E7D32"
        },
        {
            value: "Transferencia recibida",
            categoria: "Transferencia recibida",
            icono: "account_balance",
            color: "#1565C0"
        },
        {
            value: "Otros",
            categoria: "Otros",
            icono: "more_horiz",
            color: "#78909C"
        }
    ]
};

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

/* ==========================================================================
   GESTIONAR - INPUTS
   ========================================================================== */
const listado_fechas = document.querySelector('.listado-fechas');

const formConfTransccion = {
    obtenerFormTransc: document.getElementById('f-añadir-transaccion'),
    obtenerNameTransc: document.getElementById('i-name-transaccion'),
    obtenerTipoTransc: document.getElementById("tipo-transaccion"),
    obtenerTipoCatTransc: document.getElementById("tipo-categoria"),
    obtenerImporteTransc: document.getElementById("i-importe-transaccion")
}

const leerFormTransaccion = () => {
    return {
        leerNameTransc: formConfTransccion.obtenerNameTransc.value.trim(),
        leerTipoTransc: formConfTransccion.obtenerTipoTransc.value,
        leerTipoCatTransc: formConfTransccion.obtenerTipoCatTransc.value,
        leerImporteTransc: formConfTransccion.obtenerImporteTransc.value
    }
}

function pasarMesATexto(mes){
    const mesTexto = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    return mesTexto[mes-1];
}

const verificarExisteDia = (hoy) => {
    const diaActual = hoy.getDate();
    const mesActual = hoy.getMonth() + 1;
    const anio = hoy.getFullYear();
    let fechaActual = diaActual + ' de ' + pasarMesATexto(mesActual);

    const listado = document.querySelectorAll(`
        .fecha-transacciones[data-mes="${mesActual}"][data-anio="${anio}"]
    `);
    console.log(listado);
    const flag = {
        siExiste: false,
        fecha: null
    };

    [...listado].find(fecha => { 
        let diaEnLista = fecha.querySelector('h4').textContent;
        if(fechaActual === diaEnLista){
            flag.siExiste = true;
            flag.fecha = fecha;
            return true;
        }

        return false;
    });

    return flag;
}

function generarTransaccion(event){
    event.preventDefault();
    const hoy = new Date();

    const {
        siExiste,
        fecha
    } = verificarExisteDia(hoy);

    let valoresInputs = leerFormTransaccion();
    const nuevaTransaccion = crearTransaccion(valoresInputs, hoy);
    
    if(siExiste){
        const mov_en_fecha = fecha.querySelector('.mov-en-fecha');
        mov_en_fecha.prepend(nuevaTransaccion);
    } else {
        const nuevaFecha = crearFecha(nuevaTransaccion, hoy);
        listado_fechas.prepend(nuevaFecha);
    }
}

/* ==========================================================================
   CREAR = TRANSACCION
   ========================================================================== */

function capitalizarTexto(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

const buscarCategoria = (transaccion, categoria) => {
    return categorias[transaccion].find(cat => cat.value === categoria);
}

function crearFecha(nuevaTransaccion, hoy){
    const dd = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const aa = hoy.getFullYear();
    let diaMes = dd + ' de ' + pasarMesATexto(mes);

    const li = document.createElement('li');
    li.className = 'fecha-transacciones';

    li.innerHTML = `
        <h4>${diaMes}</h4>
        <ul class="mov-en-fecha"></ul>
        <div class="divider"></div>
    `;

    li.querySelector('.mov-en-fecha').appendChild(nuevaTransaccion);
    li.dataset.mes = String(mes);
    li.dataset.anio = String(aa);

    return li;
}

function crearTransaccion(items, hoy){
    let name = capitalizarTexto(items.leerNameTransc);
    let transaccion = items.leerTipoTransc;
    let categoria = items.leerTipoCatTransc;
    let importe = items.leerImporteTransc;
    const nuevaCategoria = buscarCategoria(transaccion, categoria);
    let icono = nuevaCategoria.icono;
    let color = nuevaCategoria.color;

    const hh = hoy.getHours();
    const mm = hoy.getMinutes();
    let horario = hh + ':' + mm;

    const li = document.createElement('li');
    li.className = "isTransaccion";
    li.innerHTML = `
        <span class="text-Listado ttl-transaccion">${name}</span>
        <div class="cat-transaccion"">
            <span class="material-symbols-outlined">${icono}</span>
            <span class="text-Listado">${categoria}</span>
        </div>
        <div class="extras-transaccion">
        <span class="text-Listado egreso-dinero">$${importe}</span>
        <span class="text-Listado">${horario}</span>
        </div>
    `;

    li.querySelector('.cat-transaccion').style.color = color;
    return li;
}

formConfTransccion.obtenerFormTransc.addEventListener('submit', generarTransaccion);
