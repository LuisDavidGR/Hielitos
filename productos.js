//---------------------------------------------------
let limite = document.getElementById("numero-productos").value

function mostrarCantidadProductos(event){
     event.preventDefault()

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
<legend>Producto: </legend>
<div>
<label>Precio: 
<input id="producto-precio${acumulador}" class="input-focus" type="number" name="fresa" placeholder="Ingrese numeros" required>
</label>
</div>`

newInput.innerHTML = insertarInput 
document.getElementById("contenedor-input").append(newInput)
}

 let array = []

//---------------------------------------------------

//for (let i = 1; i <= limite; i++) {
  //  pruebi = document.getElementById(`producto-precio${i}`).value
//array.push(Number(pruebi))
  //
//}



function calcularCostos(event){
    event.preventDefault()
   for (let i = 1; i <= limite; i++) {
     pruebi = document.getElementById(`producto-precio${i}`).value
     array.push(Number(pruebi))
   }
    console.log(array)

    let sumaCostos = 0

for (let i = 0; i < array.length; i++) {
    sumaCostos += array[i];
    
}

console.log(sumaCostos);

    let  mostrarTotal = document.createElement("h2")
     mostrarTotal.innerHTML = sumaCostos
     document.getElementById("resultado").append(mostrarTotal)
}


