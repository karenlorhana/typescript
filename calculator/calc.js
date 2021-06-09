"use strict";
/*  \\\\\\\\

*/
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const numero1 = readline_sync_1.question('Insira o primeiro numero: \n');
    const operador = readline_sync_1.question('insira o operador: \n');
    const numero2 = readline_sync_1.question('Insira o segundo numero: \n');
    // const numero1: number = parseInt(numero1);
    // const numero2: number = parseInt(numero2);
    const resultado = calcular(numero1, operador, numero2);
    console.log(resultado);
    function calcular(numero1, operador, numero2) {
        switch (operador) {
            case '+':
                return numero1 + numero2;
            case '-':
                return numero1 - numero2;
            case '*':
                return numero1 * numero2;
            case '/':
                return numero1 / numero2;
        }
    }
}
main();
