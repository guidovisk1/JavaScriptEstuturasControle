const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Excelente')
            break // É necessário para sair do laço e executar o proximo
        case 8: case 7:
            console.log('Muito bom ')
            break
        case 6:
            console.log('Passou por pouco')
            break
        case 5: case 4:
            console.log('Fará outra prova')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default: 
            (console.log('Número invalido'))
            break // Necessário se o default estiver em outra posição
    }
}
imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(11)
