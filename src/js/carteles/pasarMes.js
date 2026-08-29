const cambiar_mes = document.querySelectorAll('.cmbr-mes-Calculado');

function retornarMes(mes, accion){
    const mesTexto = [
        "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"
    ];

    let retornar = "";

    if(mesTexto.indexOf(mes) === 11 && accion > 0){
        retornar = mesTexto[0];
    }
    else if(mesTexto.indexOf(mes) === 0 && accion < 0){
        retornar = mesTexto[11];
    } else {
        retornar = mesTexto[mesTexto.indexOf(mes) + accion];
    }

    return retornar;
}

cambiar_mes.forEach(cm => {
    cm.addEventListener('click', (event) => {
        if(!event.target.closest('button')) return
        const mes = event.target.closest('.ftr-PIE').querySelector('.mes_cartel');
        let nombreMes = mes.textContent.split(" ")[1];
        let nuevoMes = "";

        if(event.target.closest('.btn-back-Mes')){
            nuevoMes = retornarMes(nombreMes, -1);
        }

        if(event.target.closest('.btn-next-Mes')){
            nuevoMes = retornarMes(nombreMes, +1);
        }
        
        mes.textContent = `en ${nuevoMes}`;
    });
});
