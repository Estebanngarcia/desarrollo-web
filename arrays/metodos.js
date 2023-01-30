/* para javaScript los arrays son un tipo especial de objetos.

por esta razon disponemos de muchos metodos utiles a la hora de trabajar con la informacion que hayy dentro.

cuando una funcion pertenece a un objeto, en este caso nuestro array, la llamamos metodo.*/



/* Metodo ".push()"
agrega uno o varios elementos al final del array.

*recibe uno o mas elementos como parametros.
*retorna la nueva longitud del array. */

let colores = ["rojo", "naranja", "azul"];
colores.push("violeta"); //retorna 4
console.log(colores); //["rojo", "naranja", "azul", "violeta"]

colores.push("gris", "oro");
console.log(colores);
//["rojo", "naranja", "azul", "violeta", "gris", "oro"]




/* Metodo ".pop()"
elimina el utltimo elemento de un array.

*no recibe parametros.
*devuelve el elemento eliminado. */

let series = ["mad men", "breaking bad", "the sopranos"];
 //creamos una variable para almacenar lo que devuelve .pop()
 let ultimaSerie = series.pop();
  console.log(series); // ["mad men", "breaking bad"]
  console.log(ultimaSerie); // ["the sopranos"]


/* Metodo ".shift()"
elimina el primer elemento de un array.

*no recibe parametros.
*devuelve el elemento eliminado. */

let nombres = ["frida", "diego", "sofia"];
//creamos una variable para almacenar lo que devuelve .shift()

let primerNombre = nombres.shift();

console.log(nombres) // ["diego", "sofia"]
console.log(primerNombre) // ["frida"]



/* Metodo ".unshift()"
agrega uno o varios elementos al principio de un array.

*recibe uno o mas elementos como parametros.
*retorna la nueva longitud del array. */

let marcas = ['audi'];

marcas.unshift('ford');
console.log(marcas); //['ford', 'audi']

marcas.unshift('ferrari', 'bmw')
console.log(marcas); //['ferrari', 'bmw','ford', 'audi']




/* Metodo ".join()"
une los elementos de un array utilizando el separador que le especifiquemos.
si no lo especificamos, utiliza comas.

*recibe un separador (string), es opcional.
*retorna un string con los elementos unidos. */

let dias = ['lunes', 'martes', 'jueves'];
let separadosPorComas = dias.join()

console.log(dias); //'lunes, martes, jueves'

let separadosPorGuion = dias.join('-')
console.log(dias); // 'lunes - martes - jueves'




/* Metodo ".indexOf()"
busca en el array el elemento que recibe como parametro.

*recibe un elemento a buscar en el array
*retorna el primer indice donde encontro lo que buscamos. si no lo encuentra retorna -1. */

let frutas = ['manzana', 'naranja', 'pera'];

frutas.indexOf('pera')
// encontro lo que buscaba. devuelve 1 el indice del elemento.

frutas.indexOf('banana')
//no encontro lo que buscaba. devuelve -1




/* Metodo ".lastIndexOf()"
similar a .indexOf(), con la salvedad de que empieza buscando el elemento por el final del array (de atras hacia adelante).

en caso de haber elementos repetidos, devuelve la posicion del primero que encuentre (o sea el ultimo si miramos desde el principio ).*/

let clubes = ['racing', 'boca', 'lanus', 'boca']; 

clubes.lastIndexOf('boca');
//encontro lo que buscaba, devuelve 3

clubes.lastIndexOf('river');
//no encontro lo que buscaba, devuelve -1




/* Metodo ".includes()"
tambien similar a .indexOf(), con la salvedad que retorna un booleano.

*recibe un elemento a buscar en el array
*retorna true si encontro lo que buscabamos, false en caso contrario. */

let Frutas = ['manzana', 'pera', 'frutilla'];

Frutas.includes('manzana');
//encontro lo que buscaba, retorna true.

Frutas.includes('banana');
//no encontro lo que buscaba, retorna false.