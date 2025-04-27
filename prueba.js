let array = []

let objectr = {

}

array.push(1)
array.push(1)
array.push(1)
array.push(1)
array.push(1)

let suma = 0

for(valor of array){
    suma += array[valor]
}

objectr.suma = suma

console.log(objectr)

let arrayCantidades = []

arrayCantidades.push(2)
arrayCantidades.push(2)
arrayCantidades.push(2)
arrayCantidades.push(2)
arrayCantidades.push(2)

let suma1 = 0
for(let i = 0; i < arrayCantidades.length; i++){
    suma1 += arrayCantidades[i]
}

console.log(arrayCantidades)
console.log(suma1)

/*
hielitosObject.suma = suma   //(cantidadFresa + cantidadOreo + cantidadJamaica + cantidadRompope + cantidadLimon + cantidadMango + cantidadMaria + cantidadCoco)
console.log(hielitosObject)*/