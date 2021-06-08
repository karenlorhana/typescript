// variables

let nome: string = "karen lorhana";
console.log(nome);

// arrays

let animais: string[] = ['gato', 'cachorro', 'panda', 'pato'];
console.log(animais);

// objects

let carro: {
  nome: string;
  ano: number;
  preco: number
};

carro = { nome: 'toppin', ano: 2021, preco: 250000 }
console.log(carro)

// functions

function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumeros(5, 2));