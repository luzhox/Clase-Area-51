/*
Tipos de datos

Primitivas
- Números: enteros, decimales, hexadecimales, flotantes, reales

- Textos: cadenas(strings, text, varchar, nvarchar, char)

- Booleanos: True or False

- Fecha: date, datetime

Complejas

- Lista: arreglos(arrays)

- Objetos: JSON (Javascript object notation)

*/

//Aquí comenzamos a usar las variables

//Tipos de datos Primitivos
var nombre = "Luis" // Tipo string
var edad = 24 // Tipo número
var vivo = true //Tipo booleano
var fecha = new Date() //Tipo fecha

// Tipos de datos complejas

var alumnos = ["Luis","Sergio","Alberto"]; // tipo de arreglo, lista o array
var datos = [40,"zapato",true, false, 34];

var persona = {
    nombre : "Luis",
    estatura: 179,
    raza:"Mestizo",
    edad:24,
    peso:90
} // Tipo de dato JSON

console.log(nombre);
console.log(edad);
console.log(fecha);
console.table(persona);
console.log("Nombre del alumno",nombre)
console.time("proceso")
console.timeEnd("proceso")