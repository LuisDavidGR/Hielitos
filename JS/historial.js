let contenedorRecibos = document.getElementById("recibos")
let historialRecibos = sessionStorage.getItem("historalRecibos")

if(historialRecibos){
    contenedorRecibos.innerHTML = historialRecibos
} else{
    contenedorRecibos.innerHTML = "<p>No hay recibos</p>"
}

function borrarHistorial(){
    sessionStorage.removeItem("historalRecibos")
    location.reload();
}


