import { pasarMesATexto } from "../genericas.js";

/* ==========================================================================
   GESTION TRANSACCION
   ==========================================================================
   • [!] CAPAS:
        • SELECT - TIPO
        • LEER - FORMULARIO
        • VERIFICAR - DATOS
        • BUSCAR - DATOS
   ========================================================================== */
const tipoCatTransc = {
    egreso: {
        color: "#FF0000",
        categoria: [
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
        ]
    },

    ingreso: {
        color: "#0FF000",
        categoria: [
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
    }
}; 

/* ==========================================================================
   SELECT - TIPO
   ========================================================================== */
const tipo = document.getElementById("tipo-transaccion");

function esTipoCategoria(){
    const categoria = document.getElementById("tipo-categoria");
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

/* ==========================================================================
   LEER - FORMULARIO
   ========================================================================== */
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

/* ==========================================================================
   VERIFICAR - DATOS
   ========================================================================== */
const verificarExisteDia = (hoy) => {
    const diaActual = hoy.getDate();
    const mesActual = hoy.getMonth() + 1;
    const anio = hoy.getFullYear();
    let fechaActual = diaActual + ' de ' + pasarMesATexto(mesActual);

    const listado = document.querySelectorAll(`
        .fecha-transacciones[data-mes="${mesActual}"][data-anio="${anio}"]
    `);
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

/* ==========================================================================
   BUSCAR - DATOS
   ========================================================================== */
const buscarCategoria = (transaccion, categoria) => {
    return tipoCatTransc[transaccion].categoria.find(cat => cat.value === categoria);
}

const buscarColorTransaccion = (transaccion) => {
    return tipoCatTransc[transaccion].color;
}

export {
    buscarColorTransaccion,
    buscarCategoria,
    verificarExisteDia,
    leerFormTransaccion,
    formConfTransccion,
    tipoCatTransc
}
