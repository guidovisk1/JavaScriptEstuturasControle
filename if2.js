function test1(numero){
    if(numero > 7)
    console.log(`O ${numero} é maior que sete`)  //Aceita uma linha sem chaves!

console.log('Final...')  //Padrão da função, executará sempre!
}

test1(8)

function teste2(number){
    if(number > 7);  // Nao colocar ';' em estruturas de controle
    console.log(`O número é ${number}`) // Se repetirá sempre por conta do if ja ter acabado no ';'
}

teste2(6)
teste2(8)