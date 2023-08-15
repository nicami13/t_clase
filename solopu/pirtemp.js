function edad(temp){
    let F
    añon=2023-edad;
    F = 32 + ( 9 * temp / 5)
    return F
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