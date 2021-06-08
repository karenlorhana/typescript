// example 01  -   number 

let num1: number = 14.0; //number
let num2: number = 0x37FC;  //hexadecimal
let num3: number = 0o377;  //octal
let num4: number = 0b111001;  //binario

console.log("Number (ponto flutuante) - ", num1);
console.log("Hexadecimal - ", num2);
console.log("Octal - ", num3);
console.log("Binário - ", num4);


// example 02  -  bigint
/*
 obs1: precisa alterar no tsconfig o target para 'esnext'
 obs2: o tipo bigint só é disponível a partir do es2020 ou ESNEXT 
 */
let big1: bigint = 900655465n;
let big2: bigint = 0b10000000000000000000000000000000011n;
let big3: bigint = 0x20000000000000003n
let big4: bigint = 0o400000000000003n;

console.log("Bigint - ", big1);
console.log("Binário - ", big2);
console.log("Hexadecimal - ", big3);
console.log("Octal - ", big4);
