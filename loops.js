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

//**teración #5: Probando For**
//Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un ***console log*** el array. Puedes usar este array:

const placesToGo = [
  {id: 5, name: 'Japan'}, 
  {id: 11, name: 'Venecia'}, 
  {id: 23, name: 'Murcia'}, 
  {id: 40, name: 'Santander'}, 
  {id: 44, name: 'Filipinas'}, 
  {id: 59, name: 'Madagascar'}
]
for (let index = 0; index < placesToGo.length; index ++) {
  const pais = placesToGo[index];
  if( pais.id == 11 || pais.id == 40 ){
    placesToGo.splice(index, 1);
  }
}
console.log(placesToGo);

//**Iteración #6: Mixed For... e includes**

//Usa un bucle **for...** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función ***.includes()*** para comprobarlo.Puedes usar este array:
const toys = [
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato felix'}
  ]
  for (let index = 0; index < toys.length; index ++) {
    const juguete = toys[index];
    if ( juguete.name.includes("gato")){
      toys.splice(index, 1);
      index --;
    }
  }
  console.log(toys);

  