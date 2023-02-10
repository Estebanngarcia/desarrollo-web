/* en este ejemplo vamos a contar desde 1 hasta 5 */
function contar(numero){
 for (let vuelta = 1; vuelta < numero; vuelta ++ ) {
     console.log('dando la vuelta numero ' + vuelta);
 };
}
 console.log(contar(5))



 function noParesDeContarImparesHasta(numero) {
    let conteo = 0;
    for (let i =0; i <= numero; i++){
        if ((i % 2)  !== 0){
           conteo = conteo + 1
        }
    }
    return conteo
}
console.log(noParesDeContarImparesHasta(6))