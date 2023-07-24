//10. Faça um programa que receba um número do usuário e continue
//a pedir o número se o numero for diferente de 0.

import promptSync from "prompt-sync";
const prompt = promptSync();

export function numParDifZero1a10(){
    

let numero:number;

do {
    numero = parseInt(prompt("digite um numero: "));
} while (numero !=0);

}

