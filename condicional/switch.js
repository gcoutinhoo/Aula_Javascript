import leia from "readline-sync";

let num1;
let num2;
let operador;

num1 = leia.questionFloat("\nDigite o primeiro número: ");
operador = leia.question("\nDigite o operador: ");
num2 = leia.questionFloat("\nDigite o segundo número: ");

switch(operador){
    case "+":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("Operador inválido!");
}
