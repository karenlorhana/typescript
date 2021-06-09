"use strict";
/*  \\\\\\\\

*/
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const calcular = (numero1, operador, numero2) => {
    switch (operador) {
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            if (numero2 == 0) {
                throw new Error("0 division");
            }
            return numero1 / numero2;
        default:
            throw new Error("invalid operation");
    }
};
const numero1 = readline_sync_1.questionInt("Insira o primeiro numero: \n");
const operador = readline_sync_1.question("insira o operador: \n");
const numero2 = readline_sync_1.questionInt("Insira o segundo numero: \n");
// const numero1: number = parseInt(numero1);
// const numero2: number = parseInt(numero2);
try {
    const resultado = calcular(numero1, operador, numero2);
    console.log(resultado);
}
catch (error) {
    console.error(error.message);
}
