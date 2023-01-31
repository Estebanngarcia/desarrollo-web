/* javaScript nos proporciona un objeto nativo JSON con dos metodos,
 que nos permiten convertir el formato de un archivo JSON a objeto literal o array, y viceversa.*/

 // metodo JSON.parse()
 //convierte un texto con formato JSON al tipo de dato equivalente javaScript.
 // *recibe una cadena de texto con formato JSON

 let datosJson = '{"club": "independiente", "barrio": "avellaneda"}';

 let datosConvertidos = JSON.parse(datosJson);

 console.log(datosConvertidos);
 //se vera en la consola un objeto literal
 // {club: 'independiente', barrio: 'avellaneda'}




 // metodo JSON.stringify()
 // *convierte un tipo de dato de javaScript en un texto en formato JSON.
 // *devuelve una cadena de texto con formato JSON.

 let objetoLiteral = {nombre: 'carla', pais: 'argentina'};

 let objetoConvertido = JSON.stringify(objetoLiteral); 
 
 console.log(datosConvertidos); 
 //se veran en la consola los datos en un string de tipo JSON
 // '{"nombre": "carla", "pais": "argentina"}'
