
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
let listapape=[1,2,3,4,5,6,7,8,9];

console.log(recorer(listapape,10))