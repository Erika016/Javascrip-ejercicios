// ejercicio de prueba
// FUNCION
// function sum(num1, num2){
//     console.log(num1 + num2);
// };

// // FUNCION EXPRESSION
// const sum = function (num1, num2){
//     return num1 + num2;
// };
// // FUNCION FLECHA
// const sum = (num1, num2) =>{
//     return num1 + num2;
// };
// const square = x => x*x;
// console.log(square(4));
// const numero = (l,x) => l+x;
// console.log(numero(3,4));

// function sum (num1, num2){

//     return num1 * num2;
// }
// sum(2,3);
// sum(2,5);
// console.log(sum(2,2
//     ));

// COPIA DE EJERCICIOS
const exercise1 = () => {
  let minLimit = parseInt(prompt("Insert min number:"));
  let maxLimit = parseInt(prompt("Insert max number:"));
  let requirNumbers = 20;
  let randonNumbersList = new Array(requirNumbers);
  const numberGenerator = (maxLimit, minLimit) =>
    Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
  let minFound = maxLimit;
  let maxFonund = minLimit;
  for (let i = 0, temp = 0; i < requirNumbers; i++) {
    temp = numberGenerator(maxLimit, minLimit);
    randonNumbersList[i] = temp;
    if (temp < minFound) {
      minFound = temp;
    }
    if (temp > maxFound) {
      maxFonund = temp;
    }
  }
  console.log(randonNumbersList);
  console.log("Min value: ", minFound);
  console.log("Max value", maxFonund);
};
// exercise1();

//  EJERCICIO2
const exercise2 = () => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
//   let hour = 5;
//   let minutes = 59;
  console.log(hour, minutes);
  if (hour >= 6 && minutes >= 0 && hour <= 11 && minutes <= 59) {
    alert("¡Buenos días!");
  } else if (hour >= 12 && minutes >= 0 && hour <= 20 && minutes <= 59) {
    alert("¡Buenas tardes!");
  } else if ((hour >= 21 && minutes >= 0) || (hour <= 5 && minutes <= 59)) {
    alert("¡Buenas noches!");
  } else {
    console.log("system time is failing.");
  }
};
// exercise2();

// EJERCICIO 3
const exercise3 = () => {
    const generateColor = () => {
        let letters = "0123456789ABCDEF";
        let color= "#";
        for (let i = 0; i<6; i++){
            color += letters[Math.floor(Math.random()*16)];
        }
        return color;
    };
    for(let i = 1; i < 10; i++){
        console.log("%cHello World!", `color: ${generateColor()}`);
    };
};
// exercise3();

// EJERCICIO 4
const exercise4 = () => {
    let validLetters = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];

    // console.log(validLetters[22]);
    let dni = prompt("Please, enter your DNI:");
    let numbers = dni.substring(0, dni.length-1);
    let letters = dni.substring(dni.length-1);
    // console.log(letter);
    if(validLetters[parseInt(numbers) %23] == letter){
        alert("valid DNI");
    } else {
        alert("The data entered is wrong");
    }
    const dniGenerator = () => {
        let randonNumber = Math.floor(Math.random()*(100000000 - 10000000) +10000000);
        randonNumber += validLetters[randonNumber % 23];
        return randonNumber;
    };
    for(let index = 0; index <100; index++) {
        console.log(dniGenerator());
    }
}
// exercise4();

// Ejercicio 6
const exercise6 = () => {
    let quotes = [
      "The purpose of our lives is to be happy. — Dalai Lama",
      "Life is what happens when you’re busy making other plans. — John Lennon",
      "Get busy living or get busy dying. — Stephen King",
      "You only live once, but if you do it right, once is enough. — Mae West",
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison",
      "If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein",
      "Never let the fear of striking out keep you from playing the game.– Babe Ruth",
      "Money and success don’t change people; they merely amplify what is already there. — Will Smith",
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs",
      "Not how long, but how well you have lived is the main thing. — Seneca",
      "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
      "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.– Henry Ford",
      "In order to write about life first you must live it.– Ernest Hemingway",
      "The big lesson in life, baby, is never be scared of anyone or anything.– Frank Sinatra",
      "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth. – (Attributed to various sources)",
      "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. – Leo Burnett",
      "Life is not a problem to be solved, but a reality to be experienced.– Soren Kierkegaard",
      "The unexamined life is not worth living. — Socrates",
      "Turn your wounds into wisdom. — Oprah Winfrey",
      "The way I see it, if you want the rainbow, you gotta put up with the rain. —Dolly Parton",
    ];
let start = new Date;
let end = null;
setTimeout(() => {
    clearInterval(intervalId);
    end = new Date();
    console.log(
        "Operation took" + (end.getTime() - start.getTime()) + "msec");
}, 1000 *120);
let intervalId= setInterval(() =>{
    console.log(quotes[Math.floor(Math.random()* quotes.length)]);
}, 10000);
};
// exercise6();
// EJERCICIO 7
const exercise7 = () => {
    let numbers = new Array(100);
    for(let index = 0; index < numbers.length; index++){
        numbers[index] = Math.floor(Math.random() *501);
    }
    numbers= numbers.filter((number) => number %2 === 0);
    numbers = numbers.sort((a,b) => b-a);
    console.log(numbers)
};
// exercise7();
const juego= () =>{
let opcionRandon= ["piedra", "papel", "tijeras"];
let player1= Math.floor(Math.random()*opcionRandon.length);
let player2= Math.floor(Math.random()*opcionRandon.length);

if (player1 = 0 && player2 = 0 ){
    alert("empate");
} else if( player1 = 0 && player2 =1) {
alert("player2 gana");
}
console.log(player2);
}
juego();