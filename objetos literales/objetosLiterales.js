/* estructura basica */

//un objeto es una estructura de datos que puede contener propiedades y metodos.

//para crearlos usamos llave de apertura y de cierre{}.

let auto = {
    patente: 'lej 018',
};

//propiedad: definimos el nombre de la propiedad del objeto.

// dos puntos: separa el nombre de la propiedad, de su valor. 

//valor: puede ser cualquier tipo de dato que conocernos.



/* propiedades de un objeto */

/* un objeto puede tener la cantidad de propiedades que queramos.
si hay mas de una, las separamos con comas , .*/

//con la notacion objeto.propiedad accedemos al valor de cada una de ellas.

let tenista = {
    nombre: 'roger',
    apellido: 'federer'
};

console.log(tenista.nombre) //roger
console.log(tenista.apellido) //federer




/* metodos de un objeto */

//una propiedad puede almacenar cualquier tipo de dato.

//si una propiedad almacena una funcion, diremos que es un metodo del objeto.

let padelista = {
    nombre: 'lebron',
    edad: 36,
    activo: true,
    saludar: function() {
        return 'hola, me llamo lebron'
    }
};

console.log(padelista.nombre) // lebron
console.log(padelista.saludar()) // hola, me llamo lebron




/* ejecucion de un metodo de un objeto */

/* para ejecutar un metodo de un objeto usamos la notacion objeto.metodo().
los parentesis del final son los que hacen que el metodo se ejecute. */

/* let padelista = {
    nombre: 'lebron',
    edad: 36,
    activo: true,
    saludar: function() {
        return 'hola, me llamo lebron'
    }
};

console.log(padelista.saludar()) // hola, me llamo lebron */




/* trabajando dentro del objeto */

/* la palabra reservada this hace referencia al objeto en si donde estamos parados. es decir, el objeto en si donde escribimos la palabra. */

//con la notacion this.propiedad accedemos al valor de cada propiedad interna de ese objeto.

/* let padelista = {
    nombre: 'lebron',
    edad: 36,
    activo: true,
    saludar: function() {
        return 'hola, me llamo' + this.nombre;
    }
};

console.log(padelista.saludar()); // hola, me llamo lebron */