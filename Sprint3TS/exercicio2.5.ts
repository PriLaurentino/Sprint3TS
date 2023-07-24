
//5. Imprimir os primeiros 10 números da sequência de Fibonacci.

// 0 1 1 2 3 5 8 13 21 43

export function Fibonacci() {

    let pn: number = 0;
    let sn: number = 1;

    console.log(pn);
    console.log(sn);
    for (let index: number = 3; index < 11; index++) {
        let tn: number = pn + sn
        pn = sn
        sn = tn
        console.log(tn);
    }
}
