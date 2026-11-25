const revisarNombre = document.getElementById("input-Nombre");
const revisarCorreo = document.getElementById("input-Correo");
const revisarEdad = document.getElementById("input-Edad");

const enviar = document.getElementById("boton");

const avisoNombre = document.getElementById("revNombre");
const avisoCorreo = document.getElementById("revCorreo");
const avisoEdad = document.getElementById("revEdad");

enviar.addEventListener("click", function(){

    //Para el campo de nombre
    if (revisarNombre.value.length===0){
        revisarNombre.classList.add('is-invalid');
        revisarNombre.classList.remove('is-valid');
        avisoNombre.textContent ="Escribe un nombre válido";
        avisoNombre.style.color ="red";
    } else {
        revisarNombre.classList.add('is-valid');
        revisarNombre.classList.remove('is-invalid');
        avisoNombre.textContent="";
    }

    //Para el campo de correo.
    if (
        revisarCorreo.value.length!==0 && 
        revisarCorreo.value.includes("@")
    ) {
        revisarCorreo.classList.add('is-valid');
        revisarCorreo.classList.remove('is-invalid');
        avisoCorreo.textContent="";
    } else {
        revisarCorreo.classList.add('is-invalid');
        revisarCorreo.classList.remove('is-valid');
        avisoCorreo.textContent =`Escribe un correo válido.Debe contener @`;
        avisoCorreo.style.color ="red";
    }

    //para el campo de edad.
    const edad = Number(revisarEdad.value);

    if (revisarEdad.value==="" || edad<18) {
        revisarEdad.classList.add('is-invalid');
        revisarEdad.classList.remove('is-valid');
        avisoEdad.textContent=`Su edad debe ser mayor o igual a 18 años.`;
        avisoEdad.style.color="red";
    }else{
        revisarEdad.classList.add('is-valid');
        revisarEdad.classList.remove('is-invalid');
        avisoEdad.textContent = "";
    }
});