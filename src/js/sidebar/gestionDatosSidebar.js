import { convertirPrecioNumerico } from "../genericas.js";

const sidebar = {
    estado: true,               // true: abierto || false: cerrado.
    preciosActuales: {},        // Hasta no tener una DB
    estadoAnterior: false,

    datos: {
        ingreso: 0,
        egreso: 0,
        cantidad: 0
    },

    Asignar(tipo, valor){ 
        this.datos[tipo] += valor;
    },
}

function RecuperarEstadoAnterior(){
    return sidebar.estadoAnterior;
}

function SetearEstadoAnterior(estado){
    sidebar.estadoAnterior = estado;
}

function RecuperarEstado(){
    return sidebar.estado;
}

function SetearEstado(estado){
    sidebar.estado = estado;

    document.dispatchEvent(
        new CustomEvent('sidebar:estado', {
            detail: {
                estado
            }
        })
    );
}

function RecuperarElementos(){
    const main_sidebar = document.querySelector('aside.main-sidebar');
    if(!main_sidebar) return;
    const datos = {
        h2: main_sidebar.querySelector('.ttl-Stats'),
        h4s:  main_sidebar.querySelectorAll('.lista-estadisticas h4'),
        iconos: main_sidebar.querySelectorAll('.lista-estadisticas .material-symbols-outlined'),
        cantidades: main_sidebar.querySelectorAll('.lista-estadisticas span.cantidad')
    }
    return datos;
}

function CambiarEstado(elemento, clase, estado){
    elemento.classList.toggle(clase, estado);
}

function CambiarEstadoLista(elementos, clase, estado){
    elementos.forEach(item => {
        item.classList.toggle(clase, estado);
    });
}

function RecuperarCantidades(){
    return {
        ingreso: document.getElementById('ingresoAnual'),
        egreso: document.getElementById('EgresoAnual'),
        cantidad: document.getElementById('movMes')
    }
}

function actualizarAbreviacionSidebar(){
    const { cantidades } = RecuperarElementos();
    const estado = RecuperarEstado();
    if(!estado) AbreviarDinero(cantidades);
}

function actualizarEstadisticas(tipo, importe){
    const nuevoImporte = Number(importe);
    sidebar.Asignar(tipo, nuevoImporte);
    const elementos = RecuperarCantidades();
    elementos[tipo].textContent = `$${sidebar.datos[tipo]}`;

    sidebar.datos.cantidad += 1;
    elementos.cantidad.textContent = sidebar.datos.cantidad;
    actualizarAbreviacionSidebar();
}

function guardarDatos(cantidad){
    //guardar la cantidad antes de la conversion de abreviar dinero.
    //para poder recuperar el formato luego.
    const id = cantidad.dataset.id;
    const valor = cantidad.textContent;
    sidebar.preciosActuales[id] = valor;
}

function AbreviarDinero(cantidades){
    const unidades = [
        { valor: 1e39, simbolo: "Dd" },
        { valor: 1e36, simbolo: "Ud" },
        { valor: 1e33, simbolo: "Dc" },
        { valor: 1e30, simbolo: "No" },
        { valor: 1e27, simbolo: "Oc" },
        { valor: 1e24, simbolo: "Sp" },
        { valor: 1e21, simbolo: "Sx" },
        { valor: 1e18, simbolo: "Qi" },
        { valor: 1e15, simbolo: "Q" },
        { valor: 1e12, simbolo: "T" },
        { valor: 1e9, simbolo: "B" },
        { valor: 1e6, simbolo: "M" },
        { valor: 1e3, simbolo: "K" }
    ];

    cantidades.forEach(cant => {
        guardarDatos(cant);
        const numero = convertirPrecioNumerico(cant);

        for(const unidad of unidades){
            if(numero >= unidad.valor){
                const resultado = numero/unidad.valor;

                const devolver = `
                ${resultado.toPrecision(3)
                    .replace(/\.00/, "")
                    .replace(/(\.\d)0$/, "")
                }${unidad.simbolo}
                `;
                cant.textContent = `$${devolver}`;
                return
            }
        }
    });
}

function QuitarAbreviacionDinero(cantidades){
    cantidades.forEach(cant => {
        const id = cant.dataset.id;
        const valor = sidebar.preciosActuales[id];
        cant.textContent = valor;
    });
}

export {
    RecuperarEstado,
    SetearEstado,
    RecuperarEstadoAnterior,
    SetearEstadoAnterior,
    RecuperarElementos,
    CambiarEstado,
    CambiarEstadoLista,
    actualizarEstadisticas,
    AbreviarDinero,
    QuitarAbreviacionDinero
}
