/* funcione constructoras */

/* javaScript nos da una opcion mas para crear un objeto, a traves del uso de una funcion constructora. */

/* la funcion constructora nos permite armar un molde y luego crear todos los objetos que necesitemos.

la funcion recibe un parametro por cada propiedad que queramos asignarle al objeto.*/

function Auto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
};

/* la funcion construtora Auto() espera dos parametros: marca y modelo.
para crear un objeto Auto debemos usar la palabra reservada new y llamar a la funcion pasandole los parametros que espera. */

let miAuto = new Auto ('ford', 'falcon');

/* cuando ejecutamos el metodo new para crear un objeto, lo que nos devuelve es una isntancia. es decir, en la variable tendremos almacenada una instancia del objeto auto.
usando la misma funcion, podemos instanciar cuantos autos queramos. */
 console.log(miAuto)