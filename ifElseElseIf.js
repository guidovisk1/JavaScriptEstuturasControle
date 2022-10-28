function notas(nota){
    if(nota > 9){
        console.log('Excelente')
    }
    else if(nota < 9 && nota >= 8){
        console.log('Muito bom')
    }
    else if(nota < 8 && nota >= 7){
        console.log('Voce passou')
    }
    else{
        console.log('Reprovado')
    }

    console.log('fim')
}

console.log(notas(6.9))