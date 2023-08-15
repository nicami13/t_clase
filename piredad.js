// Acorde con la edad de una persona,
// imprime el año en que nació. Por
// ejemplo “Naciste en 1985” utilizando

// funciones

function edad(edad){
    let añon
    añon=2023-edad;
    return añon
}
let bg = true
let condicion = 3
let cont=0

while (bg){
    let entrada = parseInt(prompt("Ingrese un dato mi hermano"))
    cont++
    console.log(edad(entrada))
    if (cont==condicion){
        bg=false
    }
}