let x = 10;
let y = 5;

let proposicao1;
let proposicao2;
let proposicao3;
let proposicao4;

let resposta;

proposicao1 = x > y;
console.log(`\nA proposicao1: ${proposicao1}`);

proposicao2 = x < y;
console.log(`\nA proposicao2: ${proposicao2}`);

proposicao3 = x != y;
console.log(`\nA proposicao3: ${proposicao3}`);

proposicao4 = x == y;
console.log(`\nA proposicao4: ${proposicao4}`);

console.log("\nConjunção");

resposta = proposicao1 && proposicao2;
console.log(`\nA resposta da conjunção entre proposicao1 e proposicao2 é: ${resposta}`); //CONJUNÇÃO



resposta = proposicao1 && proposicao3;
console.log(`\nproposicao1 e proposicao3: ${resposta}`);

resposta = proposicao2 && proposicao4;
console.log(`\nproposicao2 e proposicao4: ${resposta}`);

resposta = proposicao1 && proposicao2;
console.log(`\nproposicao1 e proposicao2: ${resposta}`);

resposta = proposicao3 && proposicao4;
console.log(`\nproposicao3 e proposicao4: ${resposta}`);

resposta = proposicao1 || proposicao2;
console.log(`\nA resposta da disjunção entre proposicao1 e proposicao2 é: ${resposta}`); 