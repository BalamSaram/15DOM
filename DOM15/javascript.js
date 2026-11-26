const tarea = document.getElementById("tarea");
const prioridad = document.getElementById("prioridad");

const boton = document.querySelector("button");
const lista = document.querySelector("ul");
const cantidadTareas = document.querySelector("span");

let contadorTareas = 0;

function actContador(){
    cantidadTareas.textContent = `La cantidad de tareas pendientes es: ${contadorTareas}`;
}

actContador();

boton.addEventListener("click", function () {
    const nuevoLi = document.createElement("li");

    const textoTarea= document.createElement("span");
    textoTarea.textContent=`- ${tarea.value} Prioridad: ${prioridad.value}`;

    const completar = document.createElement("button");
    completar.type="button";
    completar.textContent = "Completado";
    completar.classList.add("btn", "btn-primary");

    const eliminar = document.createElement("button");
    eliminar.type="button";
    eliminar.textContent = "Eliminar";
    eliminar.classList.add("btn", "btn-danger");

    nuevoLi.classList.add("d-flex", "align-items-center", "justify-content-between");
    nuevoLi.appendChild(textoTarea);
    nuevoLi.appendChild(completar);
    nuevoLi.appendChild(eliminar);

    let pendiente = true;

    completar.addEventListener("click", function(){
        if (!pendiente) return;

        pendiente = false;
        textoTarea.classList.add("text-decoration-line-through");
        completar.disabled =true;
        contadorTareas -= 1;
        actContador();
    });

    eliminar.addEventListener("click", function () {
        if (pendiente) {
            pendiente = false;
            contadorTareas -= 1;
            actContador();
        }
        nuevoLi.remove();
    });

    contadorTareas += 1;
    cantidadTareas.textContent = `La cantidad de tareas pendientes es: ${contadorTareas}`;

    actContador();
    lista.appendChild(nuevoLi);
    tarea.value = "";
});