// Función para guardar un dato en las cookies
function guardarDatoEnCookie(id) {
    document.cookie = id + "=guardar"+ "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
}

// Obtener el botón por su ID
var miBoton = document.getElementById("ejem");

// Agregar un evento de clic al botón
miBoton.addEventListener("click", function() {
    guardarDatoEnCookie("miDato", "ejemplo");
    alert("¡Dato guardado en la cookie con éxito!");
});

