/* 
npm install --save readline-sync
npm i -D @types/readline-sync
*/

import { question, questionInt } from "readline-sync";

type Operador = "+" | "-" | "*" | "/";

const calcular = (numero1: number, operador: Operador, numero2: number) => {
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
}

const numero1 = questionInt("Insira o primeiro numero: \n");
const operador: string = question("insira o operador: \n");
const numero2 = questionInt("Insira o segundo numero: \n");

try {
  const resultado = calcular(
    numero1,
    operador as Operador,
    numero2
  );
  console.log(resultado);
} catch (error) {
  console.error(error.message);
}
