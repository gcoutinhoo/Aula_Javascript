const leia = require('readline-sync');

let numero1;
let numero2;
let resultado;

numero1 = leia.questionInt("Digite o primeiro número: ");
numero2 = leia.questionInt("Digite o segundo número: ");

resultado = numero1 % numero2;

console.log(`O resultado da sobra da divisão entre ${numero1} e ${numero2} é ${resultado}`);
