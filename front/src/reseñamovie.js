// Función para abrir el tráiler en una nueva pestaña
function verTrailer() {
    window.open("https://youtu.be/3QbfHIKyd4I?si=wojcTiOiziNSsiq3", "_blank"); 
}

// Función para mostrar el formulario de reseña
function mostrarFormulario() {
    document.getElementById("formularioResena").style.display = "block";
}

// Función para cerrar el formulario de reseña
function cerrarFormulario() {
    document.getElementById("formularioResena").style.display = "none";
}

// Función para guardar la reseña
function guardarResena() {
    let resena = document.getElementById("resenaTexto").value;
    
    if (resena.trim() !== "") {
        alert("Reseña guardada: " + resena);
        document.getElementById("resenaTexto").value = "";  // Limpiar el campo de texto
        cerrarFormulario();  // Cerrar el formulario después de guardar
    } else {
        alert("Escribe una reseña antes de guardar.");
    }
}