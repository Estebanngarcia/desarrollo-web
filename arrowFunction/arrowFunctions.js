/* las funciones son de los elementos que mas vamos a usar a la hora de programar en javaScript */

//las funciones arrow nos permiten escribirlas de una manera mas compacta.

/* pensemos en una funcion simple como la suma de numeros:*/
function sumar(a, b) { return a + b};


/* las arrowFunction son simpre anonimas, si queremos nombrarlas debemos escribirlas como una funcion expresada.
es decir, tenemos que asignarla como valor de una variable. */

/* ahora la pasamos a una funcion arrow */
let Sumar = (a, b) => a + b;

/* usamos parentesis para indicar los parametros, si la funcion no los recibe, debemos escribirlos igual. */

/* una particularida de estas funciones es que si tiene un unico parametro, podemos prescindir de los parentesis.*/
let doble = a => a*2;

/* la flecha la usamos para indicar a javaScript que es una funcion, sustituye la palabra reservada "function".
lo que esta a la izquierda es lo que va a entrar a la funcion(parametros), lo que esta a la derecha es la logica y el retorno.*/

/*si la funcion tiene una sola linea de codigo, no hacen falta las llaves ni la palabra return.
de lo contrario, vamos a utilizar ambas. eso normalmente pasa cuando tenemos mas de una linea de codigo en nuestra funcion. */

let esMultiplo = (a, b) => {
    let resto = a % b; //obtenemos el resto
    return resto == 0; //si el resto es cero, es multiplo
};
console.log(esMultiplo(10, 2));

let horaActual = () =>{
    let fecha = new Date();
    return fecha.getHours + ":" +
    fecha.getMinutes;
};

console.log(horaActual());
