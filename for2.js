const notass = [2,3,4,5,8,7,6,7,9]

for(let i in notass){
    console.log(i, '= ' + notass[i])
}

const pessoa = {
    nome: 'Felipe',
    idade: 18,
    namorada: 'Mel'
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}