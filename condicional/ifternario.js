import leia from "prompt-sync";

let nota1, nota2, media;

nota1 = leia.questionflot("Digite a primera nota: ");
nota2 = leia.questionflot("Digite a segunda nota: ");

media = (nota1 + nota2) /2; 

console.log(media >= 7 ? "Aprovado" : "Reprovado");