//7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
//while.

export function somaWhile100() {

    let num: number = 0
    let cont: number = 1
    while (cont <= 100) {
        num = cont + num
        console.log(num);
        cont++;
    }
}






