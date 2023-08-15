function separador_pares_impares(){
    let ia=0
    let iai=0
    for (i=0;i<=578934;i++){
        if(i%2==0)
        {
            ia+=i
    
    
        }
        else
        {
            iai=i+iai
        }
    }
    console.log(`sumatoria de pares ${ia} sumatoria de impares ${iai}`)

}

separador_pares_impares()