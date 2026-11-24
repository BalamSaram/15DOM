const luzVerde= document.getElementById("btn-verde");
const luzAmarilla =document.getElementById("btn-amarillo");
const luzRoja =document.getElementById("btn-rojo");

const accVerde =document.getElementById("act-verde");
const accAmarillo =document.getElementById("act-amarillo");
const accRojo = document.getElementById("act-rojo");

const letrero=document.getElementById("aviso");

accVerde.addEventListener("click", () => {
    luzVerde.classList.toggle("btn-verde-on");
    luzAmarilla.classList.replace("btn-amarillo-on","btn-amarillo-off");
    luzRoja.classList.replace("btn-rojo-on", "btn-rojo-off");
    letrero.textContent=`Puedes avanzar.`;
    letrero.style.color="green";
});

accAmarillo.addEventListener("click", () => {
    luzAmarilla.classList.toggle("btn-amarillo-on");
    luzVerde.classList.replace("btn-verde-on", "btn-verde-off");
    luzRoja.classList.replace("btn-rojo-on", "btn-rojo-off");
    letrero.textContent=`Precaución`;
    letrero.style.color="yellow";
});

accRojo.addEventListener("click", () => {
    luzRoja.classList.toggle("btn-rojo-on");
    luzVerde.classList.replace("btn-verde-on", "btn-verde-off");
    luzAmarilla.classList.replace("btn-amarillo-on","btn-amarillo-off");
    letrero.textContent=`Detente`;
    letrero.style.color="red";
});