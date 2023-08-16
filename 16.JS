function leer(){
    let limite = parseInt(prompt("Ingresa el limite de la piramide"))
    return limite
}


function crear(lim){
    let a=""
    for(i=1;i<=lim;i++){
        b=i.toString()
        a=a+b
        console.log(a)
    }

}
crear(leer())