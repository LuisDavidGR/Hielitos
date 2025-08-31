let contenedorRecibos = document.getElementById("recibos")
let historialRecibos = sessionStorage.getItem("historalRecibos")
let contenedorVacio = document.getElementById("div-vacio")

if(historialRecibos){
    contenedorRecibos.innerHTML = historialRecibos
} else{
    contenedorVacio.innerHTML = "<p>No hay recibos disponibles</p>"
}

function borrarHistorial(){
    sessionStorage.removeItem("historalRecibos")
    location.reload();
}

function descargarRecibos(){
    const elemento = document.getElementById("recibos");

    html2canvas(elemento).then(canvas => {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.download = "Recibos.png"; // Nombre del archivo
        enlace.href = canvas.toDataURL("image/png"); // Formato PNG
        enlace.click(); // Simular clic para descargar
    });
}
