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

//let sabores = new Sabores()

// CREAR OBJETO PARA GUARDAR LOS HIELITOS

const hielitosObject = {
    fresa: 0,
    oreo: 0,
    jamaica: 0,
    rompope: 0,
    limon: 0,
    mango: 0,
    maria: 0,
    coco: 0,
}

// FIN DE CREAR OBJETO PARA GUARDAR LOS HIELITOS

let resultado = document.createElement("h2");
resultado.innerText = "Resultado:";


let acomodar = document.querySelector("section");
acomodar.appendChild(resultado);

// CREACION DEL RECIBO DE LOS HIELITOS VENDIDOS
function crearRecibo(){
let recibo = document.createElement("div")
recibo.className="enEspera"

let reciboMarco = `
<div class= "card">
<div class= "card-body">
<h5 class= "card-title"> RECIBO </h5>
<p>
<div id="total-fresa">
Hielitos de fresa vendidos: ${hielitosObject.fresa}
</div>
<div>
Hielitos de oreo vendidos: ${hielitosObject.oreo}
</div>
<div>
Hielitos de jamaica vendidos: ${hielitosObject.jamaica}
</div>
<div>
Hielitos de rompope vendidos: ${hielitosObject.rompope}
</div>
<div>
Hielitos de limon vendidos: ${hielitosObject.limon}
</div>
<div>
Hielitos de mango vendidos: ${hielitosObject.mango}
</div>
<div>
Hielitos de galleta maria vendidos: ${hielitosObject.maria}
</div>
<div>
Hielitos de coco vendidos: ${hielitosObject.coco}
</div>
<div>
${hielitosObject.suma}
</div>
</p>
<button class="btn btn-primary" onclick="eventoClick(event)"> Descargar</button>
</div>
</div>`

recibo.innerHTML = reciboMarco
document.getElementById("recibos").append(recibo) //document.getElementById("recibo").innerHTML = "" BORRAR
}
// FIN DE LA CREACION DEL RECIBO DE LOS HIELITOS VENDIDOS

// CREACION DE INPUTS  

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



// PONER VALORES EN LOS INPUTS
function modificarValores(event){
    //console.log(event)
    
    event.preventDefault() //Detiene la accion de refrescar
    

    hielitosObject.fresa = document.getElementById("fresa").value
    hielitosObject.oreo  = document.getElementById("oreo").value
    hielitosObject.jamaica  = document.getElementById("jamaica").value
    hielitosObject.rompope  = document.getElementById("rompope").value
    hielitosObject.limon  = document.getElementById("limon").value
    hielitosObject.mango  = document.getElementById("mango").value
    hielitosObject.maria  = document.getElementById("maria").value
    hielitosObject.coco  = document.getElementById("coco").value

    cantidadFresa = Number(hielitosObject.fresa)
    cantidadOreo = Number(hielitosObject.oreo)
    cantidadJamaica = Number(hielitosObject.jamaica)
    cantidadRompope = Number(hielitosObject.rompope)
    cantidadLimon = Number(hielitosObject.limon)
    cantidadMango = Number(hielitosObject.mango)
    cantidadMaria = Number(hielitosObject.maria)
    cantidadCoco = Number(hielitosObject.coco)
    
    
    hielitosObject.suma = "Total: "+(cantidadFresa*20 + cantidadOreo*20 + cantidadJamaica*20 + cantidadRompope*20+ cantidadLimon*20+cantidadMango*20+cantidadMaria*20+cantidadCoco*20)
    crearRecibo()
}

function eliminarValores(event){
}
// FIN PONER VALORES EN LOS INPUTS


// OBTENER EL BOOLEANO DE UN CHECKBOX

/*  FUNCION SEMI-REMPLAZADA PARA LOGRAR PONER LOS INPUTS EN EL FORM
function buscarSeleccion(event){
    
    let verificar = document.getElementById("seleccionar-fresa")
    //console.log(verificar.checked)
    if(verificar.checked == true){
        crearInput()
    }

}*/

//  FIN DE OBTENER EL BOOLEANO DE UN CHECKBOX

//let verificar = document.getElementById("seleccionar-fresa")

class BuscarSeleccion{
    
    constructor(selectorFresa){
        this.selectorFresa = selectorFresa
    }

    static buscarSeleccionFresa(event){
        let verificar = document.getElementById("seleccionar-fresa") 
        if(verificar.checked == true ){
            crearInput()
 
        } else if(verificar.checked == false){
            document.getElementById("contenedor-input").innerHTML = ""
        
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

/* NADA
function eventoClick(event){
    console.log(event)
}*/


