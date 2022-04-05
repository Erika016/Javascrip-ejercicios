// Ejercicio 1
// Numero maximo y min. Creamos un Array de 20 variables aleatorias..
const exercise1 = () => {
  let max = parseInt(prompt("Insert max number:"));
  let min = parseInt(prompt("Insert min number:"));
  let requiredNumbers = 20;
  let randomNumbers = new Array(requiredNumbers);
  const numberGenerator = (max, min) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let maxFound = max;
  let minFound = min;
  for (let i = 0, generatedNum = 0; i < requiredNumbers; i++) {
    temp = numberGenerator(max, min);
    randomNumbers[i] = temp;
    if (temp < minFound) {
      minFound = temp;
    }
    if (temp > maxFound) {
      maxFound = temp;
    }
  }
  console.log(randomNumbers);
  console.log("Max value:", minFound);
  console.log("Min value:", maxFound);
};
// solucion Fran.
// randomNumbers.sort((a,b) => a-b)
// console.log("Max value:", randomNumbers[0]);
// console.log("Min value:", randomNumbers[randomNumbers.lengt[-1]);
//  exercise1();

// Exercise2
const exercise2 = () =>{
let hours = new Date().getHours();
if( hours >= 6 && hours <12){
    alert("¡Buenos días!");
        } else if (hours >= 12 && hours < 21 ) {
          alert("¡Buenas tardes!");
        } else {
          alert("¡Buenas noches!");
        }
        console.log(hours);
      };
// exercise2();

// Exercise 3
// const exercise3 = () => {
//   const generateColor = () => {
// let letters = "0123456789ABCDEF";
// let color = '#';
// for(let i =0; i < 6; i++){
//   color += letters[Math.floor(Math.random()*16)];
//   }
// // console.log(color);
// }
// return color;
// };
// for(let i = 1; 1 <= 10; i++){

//   console.log("%cHello Worl!",`color: ${generateColor()}`);
// }

// solucion alternativa
// setInterval(() => {
//   for (let i = 1; i < 10, i++) {
//     console.log( "%cHello World!", `color: #${Math.floor(Math.random() * 16777215).toString(16)}`
//     );
//   }
//  }; 100);
// };

//  exercise3();

// // Exercise 4
// const exercise4 = () => {
//   let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S','Q', 'V', 'H', 'L', 'C', 'K'];
//   let dni= prompt("Please, enter your DNI: ");
//   let numbers = dni.substrings(0,dni.length-1);
//   let letter = dni.substrings(dni.length-1);
// if(validLetters[parseInt(numbers)%23] == letter){
//   alert("Valid DNI");
// } else {
//   alert ("The adara entered ir wrong");
// }

// const dniGenerator = () =>{
//   let randomNumber = Math.floor(Math.random()*(99999999-100000000)+10000000);
// ;
// return randomNumber;
// }
// for(let index = 0; index < 10; index++){
//   console.log(dniGenerator());

// }

// let numbers =parseInt(prompt("Please, enter your DNI"));
// if(numbers > "99999999"){
//   // si el numero introducido es mayor sale alerte de error
//   alert("Invalid DNI error ")
// }
// else{
//   // el usuario inserta la letra del DNI
// let letra_dni = prompt("Enter the letter of your DNI").toUpperCase();

// // calculo para verificar la letra correcta
// let resto= numbers %23;
// let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S','Q', 'V', 'H', 'L', 'C', 'K'];
// letras = letras.join("");
// let encontrado = letras.charAt(resto);
// if(letra_dni == encontrado) {
//   alert( numbers+letra_dni + " Valid DNI");
// }
// else{
//   alert(numbers + letra_dni + " The data entered is wrong");
// };
// }
// };
// exercise4();
// Crear DNI aleatorio

// function formatNumberLength(num, length) {
//   let r = "" + num;
//   while (r.length < length) {
//     r = "0" + r;
//   }
//   return r;
// }
// function charDNI (dni) {
//   let chain = "TRWGMYFPDXBNJZSQVHLCKT";
//   let pos = dni % 23;
//   var letter = chain.substring(pos, pos + 1);
//   return letter;
// }
// function rand_dni() {
//   num = Math.floor( (Math.random() * 100000000 ));
//   sNum = formatNumberLength( num,8);
//   return sNum + charDNI( sNum );
// }
// console.log(num);


// EJERCICIO 5

// generar matricula aleatoria
// const exercise5 = () => {
//   const letters = ["B","C","D","F","G","H","J","K","L","M","N","P","R","S","T","V","W","X","Y","Z"];
//   let howMany = parseInt(prompt("How many number plates do you want?"));
//   let arrOfPlates = [];
//   function genPlates() {
//     let plateNum = [];
//     do {
//       let index = Math.floor(Math.random() * 10);
//       plateNum.push(index);
//     } while (plateNum.length < 4);
//     do {
//       let index = letters[Math.floor(Math.random() * letters.length)];
//       plateNum.push(index);
//     } while (plateNum.length < 7);
//     plateNum.splice(4, 0, " ");
//     arrOfPlates.push(plateNum.join(""));
//   }

//   do {
//     genPlates();
//   } while (arrOfPlates.length < howMany);
//   console.log(arrOfPlates);
// };

// exercise5();
// const exercise5 = () => {
// const generateMatricula = () => {
// let num = "0123456789";
// let letras = "BCDFGHJKLMNPRSTWXYZ";
// let numbers= "";
// let letter = "";
// let matriculas = parseFloat(prompt("¿Cuantas matriculas desea generar?"));
// for(let i =0; i < 4; i++) {
//   numbers += num[Math.floor(Math.random() *10)];
// };
// for(let x = 0; x < 3; x++) {
// letter += letras[Math.floor(Math.random()*21)];
// }

// console.log(numbers + letter);
// };
// generateMatricula() += (numbers + letter);
// // for(let j = 0; x < matriculas; j++) {
// //   console.log(numbers + letter);
// };
// exercise5();

// Ejercicio 6
const exercise6 = () => {
// Generar 20 citas aleatorias y representarla por intervalos de 10" durenta 2'

let citas = [
"«Sin tele y sin cerveza, Homer pierde la cabeza».  Homero.",
 "«Cállate, cerebro. Ahora tengo amigos, ya no te necesito». Lisa.",
  "«Para todo lo que usaré esa cama es para dormir, comer, y tal vez construir un pequeño fuerte»  Homero.", 
"«Solo porque no me importa no significa que no lo entienda» Homero.", 
"«¿No podemos tener una reunión que no termine con desenterrar un cuerpo?»  El Alcalde.",
"«Nada de lo que nos dices nos molesta, somos la generación MTV»  Bart.",
"«¿Donuts? Te dije que no me gustaba la comida étnica»  Charles Montgomery Plantagenet Schicklgruber Burns.",
"«Soy el hado mágico de la felicidad, vengo del país fantástico de la felicidad» Homero.",
"«¡Todo marcha bien, Milhouse!» Milhouse",
"«¡¿Alguien por favor quiere pensar en los niños?!» Elena Alegría",
"«¡En esta casa obedecemos las leyes de la termodinámica!» Homero.",
"«Si estás en el cielo, ¡sálvame por favor Superman!»  Homero.",
"«Operadora, deme el número para el 911».  Homero.",
"«Me voy al asiento trasero de mi coche, con la mujer que amo, ¡Y no volveré en 10 minutos!». Homero.",
"«¡Multiplícate por cero!» Bart.",
"«Smithers, suelta a los perros» Burns.",
"«¡No conquistas nada con una ensalada… No conquistas nada con una ensalada!» Homero, Bart y Lisa.",
"«Mátalos a todos y que Dios los seleccione» Marge.",
"«Golpe de remo»  Bart.",
"«Gracias, vuelvan prontos» Apu.",
]
let start = new Date();
let end = null;
setTimeout(() =>{
  clearInterval(intervalId)
  end =new Date();
  console.log(
    `Operation took ${end.getTime() - start.getTime()} miliseconds.`);
},10000)
let intervalId = setInterval(() =>{
console.log(citas[Math.floor(Math.random()* citas.length)]);
},1000);
};

//  exercise6();

// Ejercicio 7
// Crear una Array de 100 numeros aleatorios del 0 a 500 y ordenarlo de >
const exercise7 = () =>{
let numbers = new Array(100);
for(let inicio =0;inicio < numbers.length;inicio++) {
  numbers[inicio] = Math.floor(Math.random()*501);
}
numbers = numbers.filter((num)=> num % 2 ==  0);
numbers.sort((a,b) => b-a);
console.log(numbers);
};
//  exercise7();