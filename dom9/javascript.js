//Constantes para mostrar el nombre en la tarjeta
const campoNombre = document.getElementById("nombre");
const textoNombre = document.getElementById("name");

//const para mostrar la profesión en la tarjeta
const campoProfesion =document.getElementById("profesion");
const textoProfesion =document.getElementById("prof");

//const para mostrar la imagen en la tarjeta.
const campoFoto= document.getElementById("imagen");
const mostrarImagen = document.querySelector("img")

campoNombre.addEventListener("input", function(){
    textoNombre.textContent = `${campoNombre.value}`;
}
)
campoProfesion.addEventListener("input", function(){
    textoProfesion.textContent=`${campoProfesion.value}`;
})
campoFoto.addEventListener("input", function(){
    mostrarImagen.src=campoFoto.value;
})



//const texto = tarea.value.trim();
//const nuevoLi = document.createElement("li");
//nuevoLi.textContent = `${tarea.value}`;
//lista.appendChild(nuevoLi);
//tarea.value = "";
//aviso.textContent = ``;
//return;


//agregar.addEventListener("click", agregarTarea);

//tarea.addEventListener("keydown", function (event) {
//    if (event.key === "Enter") {
//        agregarTarea();
//        tarea.value = "";
//    }
//})

//alert("funciona al menos hasta aqui");
//const texto = tarea.value.trim();

//if (texto === ""){
//  return;
//}

//    const nuevoLi = document.createElement("li");
//      nuevoLi.textContent=`${tarea.value}`;
//        lista.appendChild(nuevoLi);

//tarea.value=""; //Esta línea limpia el input para la próxima adiciónnn.
//})




//Script del DOM 3 de escuchar el input en vivo//
//const ingreso = document.getElementById("ingresado");
//const parrafo = document.getElementById("previously");

//ingreso.addEventListener("input", function () {
//    parrafo.textContent = `${ingreso.value}`;
//})