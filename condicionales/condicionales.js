//condicional simple

if(condicion) {
    //codigo a ejecutar si la condicion es verdadera
};



//condicional con bloque else

if(condicion){
    //codigo a ejecutar si la condicion es verdadera
}

else{
    //codigo a ejecutar si la condicion es falsa
};



//condicional con bloque else if

if(condicion) {
    //codigo a ejecutar si la condicion es verdadera
} else if (otraCondicion) {
    //codigo a ejecutar si la condicion anterior es verdadera
} else{
   //codigo a ejecutar si las condiciones anteriores son falsas
};


//funcionamiento de un if

let edad= 19;

let acceso= "";

if(edad < 16 ) {
    acceso = "prohibido"
} else if (edad >= 16 && edad <= 18) {
    acceso = "permitido solo con un mayor acompañante"
} else{
    acceso = "permitido"
};