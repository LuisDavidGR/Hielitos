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


/*let recibirHistorial = sessionStorage.getItem("reciboHistorial")

let recibo = document.createElement("div") 
recibo.className="acumulador-recibos"

recibo.innerHTML = recibirHistorial // creacion de html del recibo
document.getElementById("recibos").append(recibo)
*/

