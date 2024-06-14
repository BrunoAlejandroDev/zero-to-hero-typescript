/*
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Tipo String'
 * data: 14/06/2024
 * doc referência: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
 * Transpilação do arquivo: <Windows> CTRL + SHIFT + B -> tsc: build/watch
*/

let nomeCompleto: string = 'Bruno Alejandro';
console.log(nomeCompleto);

let funcaoEmpresa: string = 'BackEnd';
console.log(funcaoEmpresa);

let nomeEmpresa: string = 'Microsoft';
console.log(nomeEmpresa);

let dadosFuncionario: string = `Seja bem vindo, ${nomeCompleto}. Seu cargo na empresa ${nomeEmpresa} é ${funcaoEmpresa}`
console.log(dadosFuncionario);