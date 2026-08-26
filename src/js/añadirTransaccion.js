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
            value: "alimentacion",
            categoria: "Alimentación",
            icono: "restaurant"
        },
        {
            value: "supermercado",
            categoria: "Supermercado",
            icono: "shopping_cart"
        },
        {
            value: "transporte",
            categoria: "Transporte",
            icono: "directions_car"
        },
        {
            value: "combustible",
            categoria: "Combustible",
            icono: "local_gas_station"
        },
        {
            value: "vivienda",
            categoria: "Vivienda",
            icono: "home"
        },
        {
            value: "alquiler",
            categoria: "Alquiler",
            icono: "house"
        },
        {
            value: "servicios",
            categoria: "Servicios",
            icono: "bolt"
        },
        {
            value: "internet",
            categoria: "Internet",
            icono: "wifi"
        },
        {
            value: "telefonia",
            categoria: "Telefonía",
            icono: "smartphone"
        },
        {
            value: "salud",
            categoria: "Salud",
            icono: "medical_services"
        },
        {
            value: "educacion",
            categoria: "Educación",
            icono: "school"
        },
        {
            value: "ropa",
            categoria: "Ropa",
            icono: "checkroom"
        },
        {
            value: "entretenimiento",
            categoria: "Entretenimiento",
            icono: "movie"
        },
        {
            value: "suscripciones",
            categoria: "Suscripciones",
            icono: "subscriptions"
        },
        {
            value: "tecnologia",
            categoria: "Tecnología",
            icono: "devices"
        },
        {
            value: "restaurantes",
            categoria: "Restaurantes",
            icono: "local_dining"
        },
        {
            value: "viajes",
            categoria: "Viajes",
            icono: "flight"
        },
        {
            value: "compras",
            categoria: "Compras",
            icono: "shopping_bag"
        },
        {
            value: "mascotas",
            categoria: "Mascotas",
            icono: "pets"
        },
        {
            value: "deudas",
            categoria: "Deudas",
            icono: "credit_card"
        },
        {
            value: "prestamos",
            categoria: "Préstamos",
            icono: "request_quote"
        },
        {
            value: "impuestos",
            categoria: "Impuestos",
            icono: "account_balance"
        },
        {
            value: "seguros",
            categoria: "Seguros",
            icono: "shield"
        },
        {
            value: "regalos",
            categoria: "Regalos",
            icono: "redeem"
        },
        {
            value: "donaciones",
            categoria: "Donaciones",
            icono: "volunteer_activism"
        },
        {
            value: "inversiones",
            categoria: "Inversiones",
            icono: "trending_up"
        },
        {
            value: "ahorro",
            categoria: "Ahorro",
            icono: "savings"
        },
        {
            value: "otros",
            categoria: "Otros",
            icono: "more_horiz"
        }
    ],

    ingreso: [
        {
            value: "salario",
            categoria: "Salario",
            icono: "payments"
        },
        {
            value: "trabajo_independiente",
            categoria: "Trabajo independiente",
            icono: "work"
        },
        {
            value: "freelance",
            categoria: "Freelance",
            icono: "computer"
        },
        {
            value: "negocio",
            categoria: "Negocio",
            icono: "store"
        },
        {
            value: "ventas",
            categoria: "Ventas",
            icono: "sell"
        },
        {
            value: "inversiones",
            categoria: "Inversiones",
            icono: "trending_up"
        },
        {
            value: "intereses",
            categoria: "Intereses",
            icono: "percent"
        },
        {
            value: "dividendos",
            categoria: "Dividendos",
            icono: "paid"
        },
        {
            value: "alquileres_cobrados",
            categoria: "Alquileres cobrados",
            icono: "real_estate_agent"
        },
        {
            value: "bonificacion",
            categoria: "Bonificación",
            icono: "card_giftcard"
        },
        {
            value: "comision",
            categoria: "Comisión",
            icono: "price_check"
        },
        {
            value: "reembolso",
            categoria: "Reembolso",
            icono: "currency_exchange"
        },
        {
            value: "regalo_recibido",
            categoria: "Regalo recibido",
            icono: "redeem"
        },
        {
            value: "premio",
            categoria: "Premio",
            icono: "emoji_events"
        },
        {
            value: "venta_bienes",
            categoria: "Venta de bienes",
            icono: "sell"
        },
        {
            value: "transferencia_recibida",
            categoria: "Transferencia recibida",
            icono: "account_balance"
        },
        {
            value: "otros",
            categoria: "Otros",
            icono: "more_horiz"
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

const verificarExisteDia = (hoy) => {
    const diaActual = hoy.getDate();
    const mesActual = hoy.getMonth() + 1;
    let fechaActual = diaActual + ' de ' + mesActual;

    const listado = document.querySelectorAll('.fecha-transacciones');
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

const buscarIconoCat = (transaccion, categoria) => {
    return categorias[transaccion].find(cat => cat.value === categoria);
}

function crearFecha(nuevaTransaccion, hoy){
    const dd = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    let diaMes = dd + ' de ' + mes;

    const li = document.createElement('li');
    li.className = 'fecha-transacciones';

    li.innerHTML = `
        <h4>${diaMes}</h4>
        <ul class="mov-en-fecha"></ul>
        <div class="divider"></div>
    `;

    li.querySelector('.mov-en-fecha').appendChild(nuevaTransaccion);

    return li;
}

function crearTransaccion(items, hoy){
    let name = capitalizarTexto(items.leerNameTransc);
    let transaccion = items.leerTipoTransc;
    let categoria = items.leerTipoCatTransc;
    let importe = items.leerImporteTransc;
    let icono = buscarIconoCat(transaccion, categoria).icono;

    const hh = hoy.getHours();
    const mm = hoy.getMinutes();
    let horario = hh + ':' + mm;

    const li = document.createElement('li');
    li.className = "isTransaccion";
    li.innerHTML = `
        <span class="text-Listado ttl-transaccion">${name}</span>
        <div class="cat-transccion">
        <span class="material-symbols-outlined">${icono}</span>
        <span class="text-Listado">${categoria}</span>
        </div>
        <div class="extras-transaccion">
        <span class="text-Listado egreso-dinero">$${importe}</span>
        <span class="text-Listado">${horario}</span>
        </div>
    `;
    return li;
}

formConfTransccion.obtenerFormTransc.addEventListener('submit', generarTransaccion);
