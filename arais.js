let j=[];

function recorer(listapu,valorfijopu){
let resultadopu=[]
    for (i=0;i<listapu.length;i++){
        for (z= i+1;z<listapu.length;z++){
            if(listapu[i]+listapu[z]===valorfijopu){
                resultadopu.push([listapu[i],listapu[z]])
            }
        }

    }
    return resultadopu
}
function llenar(cantidad){

    for(h=0;h<cantidad;h++){
        entrada = parseInt(prompt("Ingrese un dato mi hermano"))
        j.push(entrada)
    }
    return j

}

tar=parseInt(prompt("ingresar valor a verificar"))
can=parseInt(prompt("Ingresar cantidad de datos mi hermano"))


// console.log(llenar(can))

console.log(recorer(llenar(can),tar))