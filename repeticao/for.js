import leia from 'readline-sync';

let numero = leia.questionInt("Digite um número: ");

for(let contador = 0; contador <= 10; contador++){
    console.log(`${numero} x ${contador} = ${contador * numero}`)
}