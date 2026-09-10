import { RetornarMes } from '../fecha/barrel_fecha.js';

const CambiarMes = (boton, mesActual) => {
    let mes = "";
    if(boton.matches('.btn-back-Mes')){
        mes = RetornarMes(mesActual, "anteriorMes");
    } else if(boton.matches('.btn-next-Mes')){
        mes = RetornarMes(mesActual, "siguienteMes");
    }
    return mes
}

document.addEventListener('click', (event) => {
    const boton = event.target.closest('button');
    if(!boton) return;

    const contenedor = boton.closest('.cartel-PIE');
    if(!contenedor) return;
    const mes_cartel = contenedor.querySelector('.mes_cartel');
    const mes = mes_cartel.textContent.split(" ")[1];
    
    let mes_retornar = CambiarMes(boton, mes);
    mes_cartel.textContent = `en ${mes_retornar}`;
});
