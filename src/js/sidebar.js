import { 
    convertirPrecioNumerico,
} from "../js/genericas.js";

/* ==========================================================================
    SIDEBAR
   ========================================================================== 
   • [!] CAPAS:
        . FUNCIONES - DESHABILITAR
        . FUNCIONES - HABILITAR
        . FUNCIONES
        . EVENTOS
   ========================================================================== */
const show_sidebar_main = document.getElementById('show-sidebar-main');


/* ==========================================================================
    FUNCIONES - DESHABILITAR
   ========================================================================== 
   • [!] Al deshabilitar el h2 y los h4, solo se habilitan los iconos
   ========================================================================== */

const deshabilitar_h2 = (hijo) => {
    hijo.classList.remove('full');
}

const deshabilitar_h4 = (hijos) => {
    hijos.forEach(h4 => { h4.classList.remove('full'); });
}

const habilitar_iconos = (hijos) => {
    hijos.forEach(icono => { icono.classList.add('full'); });
}

/* ==========================================================================
    FUNCIONES - HABILITAR
   ========================================================================== 
   • [!] Al habilitar el h2 y los h4, solo se deshabilitan los iconos
   ========================================================================== */

const habilitar_h2 = (hijo) => {
    hijo.classList.add('full');
}

const habilitar_h4 = (hijos) => {
    hijos.forEach(h4 => { h4.classList.add('full'); });
}

const deshabilitar_iconos = (hijos) => {
    hijos.forEach(icono => { icono.classList.remove('full'); });
}

/* ==========================================================================
    FUNCIONES
   ========================================================================== */
const preciosActuales = {}; // hasta no tener base de datos o local.
const sidebar = {
    estado: false
};

function recuperarEstado(){
    return sidebar.estado;
}

function alternar_sideBar(main_sidebar){
    if(main_sidebar.querySelector('.ttl-Stats').classList.contains('full')){
        comprimirSidebar(main_sidebar);
        sidebar.estado = false;
    } else {
        expandirSidebar(main_sidebar);
        sidebar.estado = true;
    }
}

function comprimirSidebar(main_sidebar){
    const { h2, h4s, iconos, cantidades } = recuperarElementos(main_sidebar);
    deshabilitar_h2(h2);
    deshabilitar_h4(h4s);
    habilitar_iconos(iconos);
    abreviarDinero(cantidades);
}

function expandirSidebar(main_sidebar){
    const { h2, h4s, iconos, cantidades } = recuperarElementos(main_sidebar);
    habilitar_h2(h2);
    habilitar_h4(h4s);
    deshabilitar_iconos(iconos);
    quitarAbreviacionDinero(cantidades);
}

function recuperarElementos(elemento){
    const h2 = elemento.querySelector('.ttl-Stats');
    const h4s = elemento.querySelectorAll('.lista-estadisticas h4');
    const iconos = elemento.querySelectorAll('.lista-estadisticas .material-symbols-outlined');
    const cantidades = elemento.querySelectorAll('.lista-estadisticas span.cantidad');
    return { h2, h4s, iconos, cantidades }
}

function guardarDatos(cantidad){
    const id = cantidad.dataset.id;
    const valor = cantidad.textContent;
    preciosActuales[id] = valor;
}

function abreviarDinero(cantidades){
    const unidades = [
        { valor: 1e12,  simbolo: "T" },
        { valor: 1e9,   simbolo: "B"},
        { valor: 1e6,   simbolo: "M"},
        { valor: 1e3,   simbolo: "K"}
    ];

    cantidades.forEach(cantidad => {
        guardarDatos(cantidad);
        const numero = convertirPrecioNumerico(cantidad);

        for(const unidad of unidades){
            if(numero >= unidad.valor){
                const resultado = numero/unidad.valor;

                const devolver = `
                ${resultado.toFixed(2)
                    .replace(/\.00/, "")
                    .replace(/(\.\d)0$/, "")
                }${unidad.simbolo}
                `;
                cantidad.textContent = `$${devolver}`;
                return
            }
        }
    });
}

function quitarAbreviacionDinero(cantidades){
    cantidades.forEach(cantidad => {
        const id = cantidad.dataset.id;
        const valor = preciosActuales[id];
        cantidad.textContent = valor;
    });
}

/* ==========================================================================
    EVENTOS
   ========================================================================== */

show_sidebar_main.addEventListener('click', () => {
    const main_sidebar = document.querySelector('aside.main-sidebar');
    alternar_sideBar(main_sidebar);
});

export {
    expandirSidebar,
    comprimirSidebar,
    recuperarEstado
}