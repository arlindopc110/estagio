/*5) Escreva um programa que inverta os caracteres de um string.*/

let string = "quero ser aprovado";

function inverterString(parametro) {
    let stringInvertida = '';
    for (let i = parametro.length - 1; i >= 0; i--) {
        stringInvertida += parametro.charAt(i);
    }
    return stringInvertida;
}

let stringInvertida = inverterString(string);
console.log(stringInvertida);
