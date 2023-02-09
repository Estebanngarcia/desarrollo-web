/* a diferencia de un if tradicional, el if ternario se escribe de forma horizontal, al igual que el if tradicional tienen el mismo flujo. en caso de haber mas condiciones, no es necesario escribir la falabra if, ni else. */

//condicion ? primera expresion : segunda expresion.
//si es verdadera, ejecuta la primera si no lo es ejecuta segunda.
//para el if ternario es obligatorio poner codigo en la segunda expresion, si queremos que no realice nada, ponemos un string vacio (" ")



/* el switch esta compuesto por una expresion a evauar, seguida de diferentes casos, tantos como queramos, cada uno contemplando un escenario diferente. 

los casos deberan terminar con la palabra break para evitar que se ejecute el proximo bloque.*/

/* switch(expresion) {
    case valorA:
        //codigo a ejecutar si la expresion es igual a valorA
        break;
    case valorB
        //codigo a ejecutar si la expresion es igual a valorB
        break;
} */


/* el switch tambien nos permite agrupar casos y ejecutar un mismo bloque de codigo.

switch(expresion) {
    case valorA:
    case valorB:    
        //codigo a ejecutar si la expresion es igual a valorA o B
        break;
    case valorC:
        //codigo a ejecutar si la expresion es igual a valorC
        break;
*/

let edad = 5;

switch (edad) {
    case 20:
       console.log("¡tiene 20 años!");
        break;
    case 5:
        console.log("¡tiene 5 años!");
        break;   
}

/* en caso de que ninguno de los casos sea correcto podemos usar la palabra default, y luego el codigo a ejecutar que necesitemos.

switch(expresion) {
    case valorA:
        //codigo a ejecutar si la expresion es igual a valorA
        break;
    case valorB:    
        //codigo a ejecutar si la expresion es igual a valorB
        break;
    default:
        //codigo a ejecutar
        
normalmente el default lo utilizariamos al final, de ser asi no es necesario escribir la plabra break*/