/*
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo number e bigint'
 * data: 14/06/2024
 * doc referência: <number> https://www.typescriptlang.org/docs/handbook/basic-types.html#number
 * doc referência: <bigint> https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

// ==> Exemplos number
let num1: number = 23.0;
let num2: number = 0x78CF; 
let num3: number = 0o577;
let num4: number = 0b110001;

console.log('Number: tipo flutuante:', num1);
console.log('Number: tipo hexadecimal:', num2);
console.log('Number: tipo octal:', num3);
console.log('Number: tipo binário:', num4);

console.log();
// == Exemplos bigInt
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n;;
let big3: bigint = 0x20000000000003n;
let big4: bigint = 0o400000000000000003n;

console.log('BigInt:', big1);
console.log('BigInt - binário:', big2);
console.log('BigInt - hexadecimal:', big3);
console.log('BigInt - octal:', big4);