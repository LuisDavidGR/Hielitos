let recibirHistorial = sessionStorage.getItem("reciboHistorial")

let recibo = document.createElement("div") 
recibo.className="acumulador-recibos"

recibo.innerHTML = recibirHistorial // creacion de html del recibo
document.getElementById("recibos").append(recibo)


