const botones = document.querySelectorAll('button');
const principal = document.querySelector('.principal');
//const imagen = document.querySelectorAll('img');
const titulo = document.querySelector('h3');

botones.forEach((botonActual) => {
    //boton.classList.replace("on", "off");
    botonActual.addEventListener("click", () => {
        botones.forEach((boton) => {
            boton.classList.replace("on", "off");
            //alert("funciona");//Esta alerta se ejecuta tres veces, correspondiente a cada botón.
        });
        botonActual.classList.replace("off", "on");
        const imagen = botonActual.querySelector('img'); //el boton.queryselector permite que el queryselector busque únicamente la img que se encuentra dentro de el botón que haya sido accionado mediante el click :O
        principal.src=imagen.getAttribute('src');
        titulo.textContent=imagen.getAttribute('alt');
    })
})