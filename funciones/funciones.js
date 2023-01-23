//una funcion es un bloque de codigo que nos permite agrupar funcionalidad para usar todas las veces que necesitemos.

//normalmente realiza una tarea especifica y retorna un valor como resultado.

//estructura basica

function sumar (a, b) {
    return a + b;
};

//parametros se escribe dento del parentesis, si hay mas de uno se los separa con ","

//funciones declaradas son aquellas que se declaran usando la estructura basica, pueden recibir un nombre a continuacion de la palabra reservada function, a traves del cul podemos invocarla.

function sumar (a, b){
    return a + b;
};

/*funciones expresadas, son aquellas que se asignan como valor de una variable. en este caso, la funcion en su no tiene nombre, es una funcion anonima.
para invocarla podremos usar el nombre de la variable que declaremos.*/

let saludar = function(hola){
    return hola;
};

/*invocacion 
la forma de invocar (tambien se puede llamar o ejecutar) una funcion es escribiendo su nombre seguido de apertura y cierre de parentesis.

POR EJEMPLO:
  saludar()  
  
  //si la funcion tiene parametros, se los podemos pasar dentro de los parentesis
  
  POR EJEMPLO:
  saludar(hola)

  */

  //podemos definir valores por defecto, si agregamos un igual = luego de un parametro, podremos especificar su valor en caso de que no llegue ninguno.

/* function saludar(nombre = "visitante", apellido = "anonimo"){
    return "hola" + nombre + " " + apellido}; */