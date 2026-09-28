// window.addEventListener('load', () => {
//     const preloader = document.querySelector('#preloader');
//     preloader.classList.add("is-hidder");

//     preloader.addEventListener("transitionend", () => {
//         preloader.remove();
//     }, { once: true });
// });

async function iniciarAplicacion(){
    const preloader = document.querySelector('#preloader');
    preloader.classList.add("is-hidder");

    preloader.addEventListener("transitionend", () => {
        preloader.remove();
    }, { once: true });  
}

iniciarAplicacion();
