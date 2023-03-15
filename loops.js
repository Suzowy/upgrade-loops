"use strict";

//Iteración #1: Usa includes

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
function showProducts() {
    for (let i = 0; i < products.length; i++) {
      if (products[i].includes("Camiseta")) {
        console.log(products[i]);
      }
    }
  }
  showProducts(products);

//iteración #2: Condicionales avanzados
//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.
//Puedes usar este array para probar tu función:
let alumns = [
  {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true},
];
for (let index = 0; index < alumns.length; index++) {
  let persona = alumns[index];

  let notas = 0;
  notas = persona.T1 ? notas + 1 : notas;
  notas = persona.T2 ? notas + 1 : notas;
  notas = persona.T3 ? notas + 1 : notas;
  persona.isApproved = notas >= 2 ? true : false;
}

console.log(alumns);

//Iteración #3: Probando For...of
//Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
//Puedes usar este array:
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const value of placesToTravel) {
  console.log(value);
}

//Iteración #4: Probando For...in
//Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (const key in alien) {
  console.log("la propiedad " + key + " tiene el valor: " + alien[key]);
}
