//8. Faça um programa que receba a idade do usuário, enquanto a
//resposta do usuário for menor que 18 anos continue a solicitar a
//idade e mostre uma mensagem quando a idade do usuário for
//maior que 18.

import promptSync from "prompt-sync";
const prompt = promptSync();

export function confirmarIdade() {

    let idade: number;

    do {
        idade = parseInt(prompt("digite sua idade: "))
    } while (idade < 18)

    console.log("Usuário maior de 18 anos")
}

//confirmarIdade();

//export function verificarMaiorIdade() {

