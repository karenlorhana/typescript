/*  \\\\\\\\

*/

type Operador = '+' | '-' | '*' | '/';

import { question } from 'readline-sync';

function main(): void {

  const numero1: string = question('Insira o primeiro numero: \n');
  const operador: string = question('insira o operador: \n');
  const numero2: string = question('Insira o segundo numero: \n');

  // const numero1: number = parseInt(numero1);
  // const numero2: number = parseInt(numero2);
  const resultado = calcular(numero1, operador as Operador, numero2)
  console.log(resultado);


  function calcular(numero1: number, operador: Operador, numero2: number) {
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