const num = document.getElementById("num");
const boton = document.getElementById("enviar");
const tabloide = document.getElementById("tabla");

function GenerarTabla() {
    const numero = Number(num.value);

    for (let i=0; i<11; i++){
        const resultado = numero * i;
        const fila =document.createElement('tr');

        for (const arreglo of [`${numero} *`, `${i}`, `=${resultado}`]){
            const cada=document.createElement("td");
            cada.textContent=arreglo;
            fila.appendChild(cada);
        }
        tabloide.appendChild(fila);
}}

boton.addEventListener("click", GenerarTabla);
num.addEventListener("keydown", function(event){
    if (event.key ==="Enter"){
        GenerarTabla();
        num.value="";
    }
})