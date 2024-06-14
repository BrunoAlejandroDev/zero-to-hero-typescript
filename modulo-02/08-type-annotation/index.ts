/*
 * arquivo: index.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Type Annotation'
 * doc referência: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/


// ==> Variáveis [Type Annotations]
let nome: string = "Bruno Alejandro"
console.log(nome);

// ==> Arrays [Type Annotations]
let animais: string[] = ["Cavalo", "Tubarão", "Cachorro", "Passaro"];
console.log(animais);

// ==> Objetos [Type Annotations]
let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = {nome: 'Mercedes GLA 200', ano: 2021, preco: 300000};
console.log(carro);

// ==> Functions [Type Annotation]
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}
console.log(multiplicarNumeros(2, 5));