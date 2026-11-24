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
