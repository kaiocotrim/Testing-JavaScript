
let num = [23,89,44,5,8,10,11,225];

/*

num [6] = 78

num.push (25)

num.sort()

console.log (`a quantide de numeros q vão aparecer é de ${num}`)

console.log(`o vetor tem ${num.length} posição`)

console.log (`o quinto valor da posição do vetor é ${num[5]}`) */ 

/* 

for (let pos= 0 ; pos < num.length; pos++){
    console.log(`a posição ${pos} tem o valor ${num[pos]} `)
} 

*/
 
for (let pos in num){
    console.log(`A posição ${pos} ta associado com o valor ${num[pos]}`)
}
