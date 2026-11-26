const presupuestoInicial = document.getElementById('presupuestoInicial');
const lista = document.querySelector('ul');
const cantidad = document.getElementById('gastoCantidad');
const tipo = document.getElementById('tipoGasto');

const boton = document.getElementById('enviar');

const mostrarPresupuestoInicial = document.getElementById('mostrarPresupuestoInicial');
const total = document.getElementById('TotalGastado');
const restante = document.getElementById('Restante');
const extra = document.getElementById('Extra');

let sumaTotalGastado = 0;
//let cantidadRestante = presupuestoInicial.value;//Esta línea aquí está mal porque ocasiona que cantidadRestante capture el valor de presupuestoInicial muy pronto.

function Presupuesto() {
    //En esta parte de la función se obtiene únciamente los valores de cantidad y de tipo (obtenidos del input), y se agregan a la lista. (esta parte es reciclada del dom 5 donde también se pedía añadir elementos a una lista)
    const valorcantidad = cantidad.value;
    const nombreGasto = tipo.value;
    const nuevoGasto = document.createElement("li");
    nuevoGasto.textContent = `${nombreGasto}. Precio: $${valorcantidad}`;
    lista.appendChild(nuevoGasto);

    //La siguiente parte es para el resumen.
    //Mostrar el presupuesto inicial:
    mostrarPresupuestoInicial.textContent = `Su presupuesto inicial es: $${presupuestoInicial.value}`;
};

boton.addEventListener("click", () => {
    Presupuesto();
    //Total gastado
    sumaTotalGastado += Number(cantidad.value);
    total.textContent = `Su gasto total es: $${sumaTotalGastado}`;

    //Presupuesto restante
    const cantidadRestante = presupuestoInicial.value - sumaTotalGastado;
    restante.textContent = `La cantidad restante para usted es: $${cantidadRestante}`;
    if (cantidadRestante < 0) {
        extra.textContent = `Has superado tu presupuesto.`
        extra.style.color = "red";
    }
}); //Para que la función se efectúe presionando click sobre el botón, normal

cantidad.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        Presupuesto();
        sumaTotalGastado += Number(cantidad.value);
        total.textContent = `Su gasto total es: $${sumaTotalGastado}`;

        //Presupuesto restante
        const cantidadRestante = presupuestoInicial.value - sumaTotalGastado;
        restante.textContent = `La cantidad restante para usted es: $${cantidadRestante}`;
        if (cantidadRestante < 0) {
            extra.textContent = `Has superado tu presupuesto.`
            extra.style.color = "red";
        }
    }
})//Para que la función se efectúe presionando enter al ingresar el último elemento del input. auqnue si se presiona enter cuando sólo se ha ingresado este campo, también se acciona D: , entonces de pronto convendría quitarla jijjsjjs)