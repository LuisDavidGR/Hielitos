/*
class Sabores{
    constructor (fresa,rompope,limon,jamaica){
        this.fresa = fresa
    }
    
    funcFresa(){
        console.log("Fresa") // INPUT DE FRESA
    }
}
*/



// OBJETO PARA GUARDAR EL PRECIO DE LOS HIELITOS


const hielitosObject = {
    fresa: 0, // ESTADO DEFAULT DE TODOS LOS HIELITOS, PRECIO
    oreo: 0,
    jamaica: 0,
    rompope: 0,
    limon: 0,
    mango: 0,
    maria: 0,
    coco: 0,
}

// FIN DEL OBJETO


// H2 PARA RESALTAR LA ZONA EN DONDE SE PONDRAN LOS RECIBOS

let resultado = document.createElement("h2"); // crea un elemento h2
resultado.innerText = "Resultado:"; // pone el texto al h2 creado

let acomodar = document.querySelector("section"); 
acomodar.appendChild(resultado);

//---

// CREACION DEL RECIBO DE LOS HIELITOS VENDIDOS
function crearRecibo(){
let masRecienteRecibo = document.getElementById("recibos")
masRecienteRecibo.innerHTML = ""

let recibo = document.createElement("div") // 
recibo.className="acumulador-recibos"
recibo.id = "enviarHistorial"

// RECIBO CON TODOS LOS SABORES DE HIELITO QUE FUERON VENDIDOS
    const miFecha = new Date()
    const año = miFecha.getFullYear()
    const mes = String(miFecha.getMonth() + 1).padStart(2, '0')
    const dia = String(miFecha.getDate()).padStart(2, '0')
    let hora =  miFecha.toLocaleTimeString() 

    const fechaFormateada = `${año}-${mes}-${dia}`;




let reciboMarco = ` 
<div id="descargarDiv" class= "card">
<div class= "card-body">
<h5 class= "card-title"> RECIBO ${fechaFormateada}</h5>
<span>Hora de creación: ${hora}</span>
<p>
<div class="total-individual">
Hielitos de fresa vendidos: ${hielitosObject.fresa} <!-- Valor del objeto que dependera si hubo vendidos o no -->
</div>
<div class="total-individual">
Hielitos de oreo vendidos: ${hielitosObject.oreo}
</div>
<div class="total-individual">
Hielitos de jamaica vendidos: ${hielitosObject.jamaica}
</div>
<div class="total-individual">
Hielitos de rompope vendidos: ${hielitosObject.rompope}
</div>
<div class="total-individual">
Hielitos de limon vendidos: ${hielitosObject.limon}
</div>
<div class="total-individual">
Hielitos de mango vendidos: ${hielitosObject.mango}
</div>
<div class="total-individual">
Hielitos de galleta maria vendidos: ${hielitosObject.maria}
</div>
<div class="total-individual">
Hielitos de coco vendidos: ${hielitosObject.coco}
</div>
<div id="dinero">
Total (Dinero obtenido): $${hielitosObject.suma}
</div>
</p>
</div>
</div>`

let descargarRecibo = `
<button  class="btn btn-primary" onclick="convertirImagen()"> Descargar</button>
`
//---

recibo.innerHTML = reciboMarco // creacion de html del recibo
document.getElementById("recibos").append(recibo) //document.getElementById("recibo").innerHTML = "" BORRAR
//html que sera insertado en el div recibos del index  

}

// FIN DE LA CREACION DEL RECIBO DE LOS HIELITOS VENDIDOS



// CREACION DE INPUTS PARA INGRESAR LA CANTIDAD QUE FUERON VENDIDOS

function crearInput(){

let newInput = document.createElement("fieldset")

let insertarInput = `
<legend>Hielitos de Fresa</legend>
<div>
<label>Cantidad de hielitos vendidos:
<input id="fresa" class="input-focus" type="number" name="fresa" placeholder="Ingrese numeros" required>
</label>
</div>`

newInput.innerHTML = insertarInput 
document.getElementById("contenedor-input").append(newInput)

}

function crearInput2(){
let newInput = document.createElement("fieldset")
let insertarInput = `
<legend>Hielitos de Oreo</legend>
<div>
<label>Cantidad de hielitos vendidos:
<input id="oreo" class="input-focus" type="number" name="oreo" placeholder="Ingrese numeros" required>
</label>
</div>`

newInput.innerHTML = insertarInput
document.getElementById("contenedor-input2").append(newInput)
}

function crearInput3(){
    let newInput = document.createElement("fieldset")
    let insertarInput = `
    <legend>Hielitos de Jamaica</legend>
    <div>
    <label>Cantidad de hielitos vendidos:
    <input id="jamaica" class="input-focus" type="number" name="jamaica" placeholder="Ingrese numeros" required>
    </label>
    </div>`
    
    newInput.innerHTML = insertarInput
    document.getElementById("contenedor-input3").append(newInput)
}

function crearInput4(){
    let newInput = document.createElement("fieldset")
    let insertarInput = `
    <legend>Hielitos de Rompope</legend>
    <div>
    <label>Cantidad de vendidos:
    <input id="rompope" class="input-focus" type="number" name="rompope" placeholder="Ingrese numeros" required>
    </label>
    </div>`
    
    newInput.innerHTML = insertarInput
    document.getElementById("contenedor-input4").append(newInput)
}

function crearInput5(){
    let newInput = document.createElement("fieldset")
    let insertarInput = `
    <legend>Hielitos de Limon</legend>
    <div>
    <label>Cantidad de hielitos vendidos:
    <input id="limon" class="input-focus" type="number" name="limon" placeholder="Ingrese numeros" required>
    </label>
    </div>`
    
    newInput.innerHTML = insertarInput
    document.getElementById("contenedor-input5").append(newInput)
}

function crearInput6(){
    let newInput = document.createElement("fieldset")
    let insertarInput = `
    <legend>Hielitos de Mango</legend>
    <div>
    <label>Cantidad de hielitos vendidos:
    <input id="mango" class="input-focus" type="number" name="mango" placeholder="Ingrese numeros" required>
    </label>
    </div>`
    
    newInput.innerHTML = insertarInput
    document.getElementById("contenedor-input6").append(newInput)
}

function crearInput7(){
    let newInput = document.createElement("fieldset")
    let insertarInput = `
    <legend>Hielitos de Galleta maria</legend>
    <div>
    <label>Cantidad de hielitos vendidos:
    <input id="maria" class="input-focus" type="number" name="maria" placeholder="Ingrese numeros" required>
    </label>
    </div>`
    
    newInput.innerHTML = insertarInput
    document.getElementById("contenedor-input7").append(newInput)
}

function crearInput8(){
    let newInput = document.createElement("fieldset")
    let insertarInput = `
    
    <legend>Hielitos de Coco</legend>
    <div>
    <label>Cantidad de hielitos vendidos:
    <input id="coco" class="input-focus" type="number" name="coco" placeholder="Ingrese numeros" required>
    </label>
    </div>`
    
    newInput.innerHTML = insertarInput
    document.getElementById("contenedor-input8").append(newInput)
}

// FIN DE CREACION DE INPUTS  

let arrayCantidades = []
let guardarCeros = []



// PONER VALORES EN LOS INPUTS - ANTES DE CREAR RECIBO
// FUNCION PARA AÑADIR EL VALOR DE LOS INPUTS EN EL OBJETO

function modificarValores(event){
    //console.log(event)
    arrayCantidades = []

    event.preventDefault() //Detiene la accion de refrescar
     
    let aparece = document.getElementById("contenedor-input") // variable que almacena un elemento id del index
    let aparece2 = document.getElementById("contenedor-input2")
    let aparece3 = document.getElementById("contenedor-input3")
    let aparece4 = document.getElementById("contenedor-input4")
    let aparece5 = document.getElementById("contenedor-input5")
    let aparece6 = document.getElementById("contenedor-input6")
    let aparece7 = document.getElementById("contenedor-input7")
    let aparece8 = document.getElementById("contenedor-input8")

    if(aparece.innerHTML.includes("<fieldset>")){ // con base a la variable correspondiente se hace una evaluacion 
        hielitosObject.fresa = document.getElementById("fresa").value // el valor obtenido del input se guardara en el objeto creado al principio
        cantidadFresa = Number(hielitosObject.fresa) // el valor del objeto se convierte a numero y a partir de eso se almacena en una variable
        arrayCantidades.push(cantidadFresa) //la cantidad ahora puedo ser añadida al array de cantidades
    } else if(!(aparece.innerHTML.includes("<fieldset>"))){ // Contradiciendo el primer comentario 
        document.getElementById("contenedor-input").innerHTML = "" //Si el input no existe se añadira un espacio en blanco
        hielitosObject.fresa = 0 // su valor en el objeto sera el de 0
    }

  /*  if(!(hielitosObject.fresa == 0)){
        document.getElementById("total-fresa").style.display = "block"
    }*/

    if(aparece2.innerHTML.includes("<fieldset>")){
        hielitosObject.oreo = document.getElementById("oreo").value
        cantidadOreo = Number(hielitosObject.oreo)
        arrayCantidades.push(cantidadOreo)
    } else if(!(aparece2.innerHTML.includes("<fieldset>"))){
        document.getElementById("contenedor-input2").innerHTML = ""
        hielitosObject.oreo = 0
    }

    if(aparece3.innerHTML.includes("<fieldset>")){
        hielitosObject.jamaica  = document.getElementById("jamaica").value
        cantidadJamaica = Number(hielitosObject.jamaica)
        arrayCantidades.push(cantidadJamaica)
    } else if(!(aparece3.innerHTML.includes("<fieldset>"))){
        document.getElementById("contenedor-input3").innerHTML = ""
        hielitosObject.jamaica = 0
    }

    if(aparece4.innerHTML.includes("<fieldset>")){
        hielitosObject.rompope  = document.getElementById("rompope").value
        cantidadRompope = Number(hielitosObject.rompope)
        arrayCantidades.push(cantidadRompope)
    } else if(!(aparece4.innerHTML.includes("<fieldset>"))){
        document.getElementById("contenedor-input4").innerHTML = ""
        hielitosObject.rompope = 0
    }

    if(aparece5.innerHTML.includes("<fieldset>")){
        hielitosObject.limon  = document.getElementById("limon").value
        cantidadLimon = Number(hielitosObject.limon)
        arrayCantidades.push(cantidadLimon)
    } else if(!(aparece5.innerHTML.includes("<fieldset>"))){
        document.getElementById("contenedor-input5").innerHTML = ""
        hielitosObject.limon = 0
    }

    if(aparece6.innerHTML.includes("<fieldset>")){
        hielitosObject.mango  = document.getElementById("mango").value
        cantidadMango = Number(hielitosObject.mango)
        arrayCantidades.push(cantidadMango)
    } else if(!(aparece6.innerHTML.includes("<fieldset>"))){
        document.getElementById("contenedor-input6").innerHTML = ""
        hielitosObject.mango = 0
    }
    
    if(aparece7.innerHTML.includes("<fieldset>")){
        hielitosObject.maria  = document.getElementById("maria").value
        cantidadMaria = Number(hielitosObject.maria)
        arrayCantidades.push(cantidadMaria)
    } else if(!(aparece7.innerHTML.includes("<fieldset>"))){
        document.getElementById("contenedor-input7").innerHTML = ""
        hielitosObject.maria = 0
    }

    if(aparece8.innerHTML.includes("<fieldset>")){
        hielitosObject.coco  = document.getElementById("coco").value
        cantidadCoco = Number(hielitosObject.coco)
        arrayCantidades.push(cantidadCoco)
    } else if(!(aparece8.innerHTML.includes("<fieldset>"))){
        document.getElementById("contenedor-input8").innerHTML = ""
        hielitosObject.coco = 0
    }
        
    let suma = 0 // variable que sumara cada uno de las opciones que fueron marcadas como true y se ingreso valrores
    for(let i = 0; i < arrayCantidades.length; i++){
        suma += arrayCantidades[i]*20
    }

    console.log(arrayCantidades)
    
    hielitosObject.suma = suma   //(cantidadFresa + cantidadOreo + cantidadJamaica + cantidadRompope + cantidadLimon + cantidadMango + cantidadMaria + cantidadCoco)
    console.log(hielitosObject)
    sessionStorage.setItem("enviarValores",suma)

    // propiedad del objeto que mostrara el total de dinero generado
    crearRecibo()
    /*for(let key in hielitosObject){
        if(hielitosObject[key] == 0){
            guardarCeros.push(key)
        }
    }
    guardarCeros.pop()
    console.log(guardarCeros)

    for(borrarCeros of guardarCeros){
        if(borrarCeros.includes("oreo")){
            console.log(borrarCeros+"XD")
        }
    }*/
eliminarValores()
let primerHistorialDeRecibos = document.getElementById("enviarHistorial")

let historalRecibos = sessionStorage.getItem("historalRecibos")

if(historalRecibos){
    historalRecibos += primerHistorialDeRecibos.outerHTML
} else {
    historalRecibos = primerHistorialDeRecibos.outerHTML
}

sessionStorage.setItem("historalRecibos", historalRecibos)

// FIN PONER VALORES EN LOS INPUTS

// FUNCION QUE ELIMINA DEL RECIBO TODOS AQUELLOS HIELITOS QUE NO FUERON SELECCIONADOS OSEA CON EL VALOR 0
function eliminarValores(){
    const elementos = document.querySelectorAll('.total-individual')
    // cilo que recorrera todos los div que tengan la clase total-individual (principio del codigo)
    elementos.forEach(function(div){
        if(div.textContent.includes('vendidos: 0')){ //Si el texto del recibo aparece de esta forma
            div.style.display = 'none'; // su display sera none osea desaparecera 
        } else {
            div.style.display = 'block'; // pero si no es asi su display sera normal y aparecera
        }
    });    
} 

//---

}

// OBTENER EL BOOLEANO DE UN CHECKBOX



//  FIN DE OBTENER EL BOOLEANO DE UN CHECKBOX



// CLASE (EXPERIMENTAL PORQUE NO SIRVE PARA NADA, APRENDIENDO XD) QUE VALIDA SI EL CHECKBOX DEPENDIENDO DE SU ESTADO LLAMARA A LA FUNCION PARA CREAR INPUTS
class BuscarSeleccion{
    
    constructor(selectorFresa){
        this.selectorFresa = selectorFresa
    }

    static buscarSeleccionFresa(event){
        let verificar = document.getElementById("seleccionar-fresa") // si el checkbox con este id aparece como true
        if(verificar.checked == true ){
            crearInput() // se llamara a la funcion para que cree este input
 
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input").innerHTML = "" //Al contrario, este borrara todo lo que este adentro del input con el id correspondiente
        
        }

    }
    static buscarSeleccionOreo(event){
        let verificar = document.getElementById("seleccionar-oreo")
        
        if(verificar.checked == true ){
            crearInput2()
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input2").innerHTML = ""
        
        }
    }

    static buscarSeleccionJamaica(event){
        let verificar = document.getElementById("seleccionar-jamaica")
        
        if(verificar.checked == true ){
            crearInput3()
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input3").innerHTML = ""
        
        }
    }

    static buscarSeleccionRompope(event){
        let verificar = document.getElementById("seleccionar-rompope")
        
        if(verificar.checked == true ){
            crearInput4()
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input4").innerHTML = ""
        
        }
    }

    static buscarSeleccionLimon(event){
        let verificar = document.getElementById("seleccionar-limon")
        
        if(verificar.checked == true ){
            crearInput5()
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input5").innerHTML = ""
        
        }
    }

    static buscarSeleccionMango(event){
        let verificar = document.getElementById("seleccionar-mango")
        
        if(verificar.checked == true ){
            crearInput6()
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input6").innerHTML = ""
        
        }
    }

    static buscarSeleccionMaria(event){
        let verificar = document.getElementById("seleccionar-maria")
        
        if(verificar.checked == true ){
            crearInput7()
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input7").innerHTML = ""
        
        }
    }

    static buscarSeleccionCoco(event){
        let verificar = document.getElementById("seleccionar-coco")
        
        if(verificar.checked == true ){
            crearInput8()
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input8").innerHTML = ""
        
        }
    }
}


function convertirImagen() {
    const elemento = document.getElementById("descargarDiv");

    html2canvas(elemento).then(canvas => {
        // Crear un enlace para descargar la imagen
        const enlace = document.createElement("a");
        enlace.download = "Recibo.png"; // Nombre del archivo
        enlace.href = canvas.toDataURL("image/png"); // Formato PNG
        enlace.click(); // Simular clic para descargar
    });
}