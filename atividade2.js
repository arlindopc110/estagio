/*Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência 
ou pode ser previamente definido no código;*/ 

let number = parseInt(prompt("Informe um número: "));
if (isInFibonacciSequence(number)) {
    console.log(`O número ${number} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}

function isPerfectSquare(n) {
    let sqrt = Math.sqrt(n);
    return sqrt * sqrt === n;
}

function isInFibonacciSequence(number) {
    return isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);
}