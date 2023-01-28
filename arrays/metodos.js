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