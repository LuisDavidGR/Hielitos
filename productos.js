//---------------------------------------------------


function mostrarCantidadProductos(event){
     event.preventDefault()
     let eliminar = document.getElementById("contenedor-input")
     eliminar.innerHTML = ""
    
    let limite = document.getElementById("numero-productos").value
    let  mostrarCantidad = document.createElement("h2")
     mostrarCantidad.innerHTML = document.getElementById("numero-productos").value
     document.getElementById("prueba").append(mostrarCantidad)

    for (let i = 1; i <= limite; i++) {
        rellenarCostos(i)
    }


}

//---------------------------------------------------

function rellenarCostos(acumulador){ //inputs
let newInput = document.createElement("fieldset")

let insertarInput = `
<legend>Producto numero ${acumulador}: </legend>
<div>
<label>Nombre: 
<input id="producto-nombre${acumulador}" class="input-focus" type="text" name="" placeholder="Ingrese el nombre" required>
</label>
<label>Precio: 
<input id="producto-precio${acumulador}" class="input-focus" type="number" name="" placeholder="Ingrese numeros" required>
</label>
</div>`

newInput.innerHTML = insertarInput 
document.getElementById("contenedor-input").append(newInput)
}



//---------------------------------------------------

//for (let i = 1; i <= limite; i++) {
  //  pruebi = document.getElementById(`producto-precio${i}`).value
//array.push(Number(pruebi))
  //
//}



function calcularCostos(event){
    event.preventDefault()
     let array = []

  let limite = document.getElementById("numero-productos").value

   for (let i = 1; i <= limite; i++) {
     pruebi = document.getElementById(`producto-precio${i}`).value
     let nombreProductos = document.getElementById(`producto-nombre${i}`).value
     console.log(nombreProductos+pruebi)
     let mostrarNombre = document.createElement("h2")
      mostrarNombre.innerHTML = "Nombre del producto: "+nombreProductos+", coste: "+pruebi
     document.getElementById("resultado").append(mostrarNombre)

     array.push(Number(pruebi))
   }
    console.log(array)

    let sumaCostos = 0

for (let i = 0; i < array.length; i++) {
    sumaCostos += array[i];
    
}

console.log(sumaCostos);

    let  mostrarTotal = document.createElement("h2")
     mostrarTotal.innerHTML = "Total de compras: "+sumaCostos
     document.getElementById("resultado").append(mostrarTotal)
}


