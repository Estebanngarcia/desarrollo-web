//propiedades y metodos de strings

/* para javaScript los strings son como un array de caracteres.

por esta razon disponemos de propiedades y metodos muy utiles a la hora de trabajar con la informacion que hay adentro.*/


/* los strings en javaSCript

en muchos sentidos, para javaScript, un string no es mas que un array de caracteres. al igual que en los arrays, la primera posicion siempre sera 0.

let nombre = 'f r a n';
              1 2 3 4
  para acceder a un caracter puntual de un string, nombramos al string y, dentro de los corchetes, escribimos el indice al cual queremos acceder.

nombre[2];
//accedemos a la letra a, el indice 2 del string. */



/*propiedad .length 

esta propiedad retorna la cantidad total de caracteres del string, incluidoslos espacios.

como es una propiedad, al invocarla, no necesitamos los parentesis. */


let miSerie = 'Mad Men';
miSerie.length; //devuelve 7

let arrayNombres = ['bart', 'lisa', 'moe']; 
arrayNombres.length; // devuelve 3

arrayNombres[0].length; // corresponde a 'bart'. devuelve 4




/* propiedad indexOf()
busca, en el string, el string que recibe como parametro.

*recibe un elemento a buscar en el array.
*retorna el primer indice donde encontro lo que buscabamos. si no lo encuentra, retorna un -1. */

let saludo = '¡hola! estamos programando';

saludo.indexOf('estamos'); //devuelve 7.
saludo.indexOf('vamos'); //devuelve -1, no lo encontro.
saludo.indexOf('o'); // encuentra la letra 'o' que esta en la posicion 2, devuelve 2 y corta la ejecucion.



/* metodo .slice()
corta el string y devuelve una parte del string donde se aplica.

*recibe 2 numeros como parametros(pueden ser negativos):
   + el indice desde donde inicia el corte.
   + el indice hasta donde hacer el corte (es opcional).
*retorna la parte correspondiente al corte.*/

let frase = 'breaking bad rules!';

//frase.slice(9,12); // devuelve 'bad' 
//frase.slice(13); // devuelve 'rules!'
frase.slice(-10); // devuelve bad rules!. empieza contando de atras hacia adelante.

console.log(frase.slice(-10));




/* METODO .TRIM()

elimina los espacios que existen al principio y al final de un string.
*no recibe parametros.
*no quita los espacios del medio. */

let nombre = '  homero simpson  ';
nombre.trim(); // devuelve 'homero simpson'

let nombreCompleto = '  homero  j.  simpson  ';
nombreCompleto.trim(); // devuelve 'homero  j.  simpson'




/* metodo .split()

divide un string en partes
*recibe un string que usara como separador de las partes.
*devuelve un array con las partes del string. */

let cancion = 'and bingo was his name, oh!';

cancion.split(' '); //devuelve ['and', 'bingo', 'was', 'his', 'name, ', 'oh!']

cancion.split(', '); //devuelve ['and bingo was his name', 'oh!']




/* metodo .replace()

reemplaza una parte del string por otra.
*recibe dos strings como parametros:
  +el string que queremos buscar.
  +el string que usaremos de reemplazo.
*retorna un nuevo string con el reemplazo. */

let cadenaTxt = 'aguante phyton';
cadenaTxt.replace('phyton', 'js'); //devuelve 'aguante js'
cadenaTxt.replace('phy', 'js'); //devuelve 'aguante jston'