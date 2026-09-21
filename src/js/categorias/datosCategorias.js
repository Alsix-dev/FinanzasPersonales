// Borrar el evento de DOMContentLoaded luego de que quitemos la lista estatica y pase a ser solamente dinamica.
import { 
    RecuperarEstadisticas,
    actualizarCarteles
} from "../carteles/barrel_carteles.js";

import { 
    ObtenerCategoria
 } from "./barrel_categorias.js";

const categorias_datos = {
    egreso: {
        "Alimentación": {
            Total: 0,
            Porcentaje: 0
        },
        "Supermercado": {
            Total: 0,
            Porcentaje: 0
        },
        "Transporte": {
            Total: 0,
            Porcentaje: 0
        },
        "Combustible": {
            Total: 0,
            Porcentaje: 0
        },
        "Vivienda": {
            Total: 0,
            Porcentaje: 0
        },
        "Alquiler": {
            Total: 0,
            Porcentaje: 0
        },
        "Servicios": {
            Total: 0,
            Porcentaje: 0
        },
        "Internet": {
            Total: 0,
            Porcentaje: 0
        },
        "Telefonía": {
            Total: 0,
            Porcentaje: 0
        },
        "Salud": {
            Total: 0,
            Porcentaje: 0
        },
        "Educación": {
            Total: 0,
            Porcentaje: 0
        },
        "Ropa": {
            Total: 0,
            Porcentaje: 0
        },
        "Entretenimiento": {
            Total: 0,
            Porcentaje: 0
        },
        "Suscripciones": {
            Total: 0,
            Porcentaje: 0
        },
        "Tecnología": {
            Total: 0,
            Porcentaje: 0
        },
        "Restaurantes": {
            Total: 0,
            Porcentaje: 0
        },
        "Viajes": {
            Total: 0,
            Porcentaje: 0
        },
        "Compras": {
            Total: 0,
            Porcentaje: 0
        },
        "Mascotas": {
            Total: 0,
            Porcentaje: 0
        },
        "Deudas": {
            Total: 0,
            Porcentaje: 0
        },
        "Préstamos": {
            Total: 0,
            Porcentaje: 0
        },
        "Impuestos": {
            Total: 0,
            Porcentaje: 0
        },
        "Seguros": {
            Total: 0,
            Porcentaje: 0
        },
        "Regalos": {
            Total: 0,
            Porcentaje: 0
        },
        "Donaciones": {
            Total: 0,
            Porcentaje: 0
        },
        "Inversiones": {
            Total: 0,
            Porcentaje: 0
        },
        "Ahorro": {
            Total: 0,
            Porcentaje: 0
        },
        "Otros": {
            Total: 0,
            Porcentaje: 0
        }
    },

    ingreso: {
        "Salario": {
            Total: 0,
            Porcentaje: 0
        },
        "Trabajo independiente": {
            Total: 0,
            Porcentaje: 0
        },
        "Freelance": {
            Total: 0,
            Porcentaje: 0
        },
        "Negocio": {
            Total: 0,
            Porcentaje: 0
        },
        "Ventas": {
            Total: 0,
            Porcentaje: 0
        },
        "Inversiones": {
            Total: 0,
            Porcentaje: 0
        },
        "Intereses": {
            Total: 0,
            Porcentaje: 0
        },
        "Dividendos": {
            Total: 0,
            Porcentaje: 0
        },
        "Alquileres cobrados": {
            Total: 0,
            Porcentaje: 0
        },
        "Bonificación": {
            Total: 0,
            Porcentaje: 0
        },
        "Comisión": {
            Total: 0,
            Porcentaje: 0
        },
        "Reembolso": {
            Total: 0,
            Porcentaje: 0
        },
        "Regalo recibido": {
            Total: 0,
            Porcentaje: 0
        },
        "Premio": {
            Total: 0,
            Porcentaje: 0
        },
        "Venta de bienes": {
            Total: 0,
            Porcentaje: 0
        },
        "Transferencia recibida": {
            Total: 0,
            Porcentaje: 0
        },
        "Otros": {
            Total: 0,
            Porcentaje: 0
        }
    }
};

function PrincipalesCategorias(tipo){
    const listado = Object.entries(categorias_datos[tipo]);
    const categorias = listado
        .sort(([,datos1], [,datos2]) => datos2.Porcentaje - datos1.Porcentaje )
        .splice(0, 5);

    return categorias;
}

function CrearCategoriaPorcentual(categoria, datos){    
    const color = categoria.color;
    const porcentaje = datos.Porcentaje.toPrecision(3);
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="material-symbols-outlined" style="color:${color};">${categoria.icono}</span>
        <div class="cat-porcentaje">
            <span class="text-Listado" style="color:${color};">${categoria.categoria}</span>
            <span class="text-Listado">${porcentaje}%</span>
        </div>
    `;

    return li;
}

function CargarPorcentajesCategorias(tipo){
    const graficos = document.querySelector(`[data-tipo-grafico=${tipo}]`);
    if(!graficos) return;
    const ul = graficos.querySelector('.items-cat');

    const listado = PrincipalesCategorias(tipo);

    listado.forEach(([cat, datos]) => {
        if(datos.Total > 0){
            const listado_cat = ObtenerCategoria(tipo, cat);
            const item = CrearCategoriaPorcentual(listado_cat, datos);
            ul.appendChild(item);
        }
    });
}


const CalcularPorcentaje = (tipo) => {
    const total = RecuperarEstadisticas(tipo);
    if(!total) return;

    const transaccion = categorias_datos[tipo];
    Object.values(transaccion).forEach(categoria => {
        categoria.Porcentaje = (categoria.Total*100)/total; 
    });
}

const SumarPorCategoria = (contenedor, tipo, categoria) => {
    let importe = contenedor.closest('.isTransaccion')
        .querySelector('.importe')
        .textContent;

    const importeNuevo = Number(importe.substring(1).replaceAll('.', ''));
    categorias_datos[tipo][categoria].Total += importeNuevo;
    actualizarCarteles(tipo, importeNuevo);
}

function RegistrarMovimientosEstaticos(){
    // Recordar quitar esta funcion luego, quedan las llamadas para crearTransaccion.js
    const listado_fechas = document.querySelector('.listado-fechas');
    const isTransaccion = listado_fechas.querySelectorAll('.cat-transaccion > span[name]');
    isTransaccion.forEach(item => {
        const categoria = item.textContent;
        const tipo = item.classList[1];
        SumarPorCategoria(item, tipo, categoria);
    });

    CalcularPorcentaje("egreso");
    CalcularPorcentaje("ingreso");

    CargarPorcentajesCategorias("egreso");
    CargarPorcentajesCategorias("ingreso");
}

// Esto es util mientras exista una lista estatica.
document.addEventListener('DOMContentLoaded', () => {
    RegistrarMovimientosEstaticos();
});

export {
    CalcularPorcentaje,
    SumarPorCategoria
}


//.. notas:
/* 
    ✓ ---- 1.- Ya tenemos todos los datos que se encuentran en pantalla y la suma por categoria.
    ✓ ---- 2.- Sacar porcentajes por categoria del total ingresado.
     ---- 3.- Sumar la cantidad y actualizar porcentajes de los ingresados dinamicamente.
    ✓ ---- 4.- Calcular las 5 categorias que mas ingresos/egresos tienen o porcentajes.
    ✓ ---- 5.- Asignar las 5 categorias mas consumidas con su nombre y porcentaje en los carteles.
     ---- 6.- Crear el grafico.
     ---- 7.- Recalcando el (3.-) hacer que se actualice por cada creacion las 5 principales categorias.
*/


    // console.log(tipo)
    // console.log(categorias_datos[tipo][ttl_categoria])
    // console.log(categorias_datos[tipo][ttl_categoria].Total)

        // console.log(tipo)
        // console.log('T: ', total)
        // console.log("I: ", categoria.Total)
        // console.log("P: ", categoria.Porcentaje)