// // EJERCICIO1
// let text="palindrome";
// // // console.log(typeof text);
// // text.charCodeAt();

// for (text.length; text.charAt = ; ){
// console.log(text.charAt(2) + text.length);
// }

// ESTRUCTUTA FOR
// for(variable; contador bolean ; INCREMENTEO O DECREMENTO VARIABLE number++){

// }

// // // EJERCICIO1
// let number =10;
// for (let text = 'palindrome';'text'.charAt() <= number; number++ ) {
//     console.log(text.charAt);
// }
// let text = "palindrome";
// for (let number = 0; number <= text.length - 1; number++) {
//   console.log(`${number + 1}. ${text[number]}`);
// }
// console.log("Letters quantity: " , text.length);

// // copia del ejercicio
// let text = "palindrome";
// for(let number =0; number<= text.length-1; number++){
// console.log(`${number+1}. ${text[number]}`);
// }
// console.log("Letter quantity:" , text.length);

// console.log(typeof text);

// // // Ejercicio 2
// let text = "no lemon, no melon";
// text.split ",";
// for(; ;){

// }

// console.log('text:', text);
// let reverse = 'text'.reverse();
// console.log('reverse:', reverse);
// console.log('text:' , text);
// function split("no lemon, no melon");

// let str = "no lemon, no melon";
// function reverse (str) {
//   if (str === "") {
//     return "";
//   } else {
//     return reverse(str.substr(1)) + str.charArt(0);
//   }
// }
// let reverseStrings = reverse ("no lemon, no melon");
// console.log(reverseStrings);

// // Ejercicio 3
// let asteriscos = "****";
// while (asteriscos < 4) {
//   console.log(asteriscos);
//   asteriscos++;
// }

// Ejercicio 4
// const mediaTemper = [
//     {malaga: "lunes", temperatura: 21,},
//     {malaga: "martes", temperatura: 24,},
//     {malaga: "miercoles", temperatura: 18,},
//     {malaga: "jueves", temperatura: 14,},
//     {malaga:"viernes", temperatura:27,},
//     {malaga:"sabado", temperatura: 20,},
//     {malaga: "domingo", temperatura: 23,}
// ]
// const temperatura= mediaTemper.map(x => x.temperatura)
// const resultado = suma (mediaTemper(temperatura))
// console.log(resultado /  temperatura.length);

// ejercicio 1
// // copia del ejercicio
// let text = "palindrome";
// for(let number =0; number<= text.length-1; number++){
// // console.log(`${number+1}. ${text[number]}`);
// // }
// console.log("Letter quantity:" , text.length);

// // Explicacion break blucles
// let num= 0;
// for (let i=0; i < 10; i++){
//     if (i%5 == 0) {
//         break
//     }
//     num++
// }
// console.log(num);

// ENCONTRAR NUMEROS PRIMO

// let isPrime = true;
// let num = 19;
// let counter = 0;
// for (let i = 2; i < num && isPrime == true; i++) {
// console.log(`iteration ${++counter}`);
// if (num % i == 0) {
// console.log("It's not a prime, divisible by: ", i);
// isPrime = false;
// // break;
// }
// }
// if (isPrime) {
// console.log(`the number ${num} is prime`);
// }

// Ejercicio 5
// let max =50;
// let max = 13;
// let min = 1;
// let randomNumber1 = Math.floor (Math.random()*max)+min;
// let randomNumber2 = Math.floor (Math.random()*max)+min;
// if (randomNumber1 > randomNumber2){
//   console.log("Player 1 cins!");
// } else if (randomNumber1 < randomNumber2){
//   console.log("player 2 wins!");
// } else {
//   console.log("Draw");
// }
// console-console.log((randomNumber1));

// Ejercicio 1
// let text = "palindrome";
// for(number =0; number <= text.length-1; number++){
// console.log(`${number+1}. ${text[number]}`)
// }
// console.log("Letter quantity:" , text.length);

// Ejercicio 2

// For (let numer =0; numer => frase.length; numer--){
// console.log(`${text[numer]}`);
// // }
// let frase = "no lemon, no melon";
//  for(let caracter = 19 ; caracter && frase.length-1; caracter--){
// console.log(`${frase[caracter]}`);
// }
// console.log(frase.length);

// // Exercise 5


// SOLUCIONES EJERCICIO BUCLES

// ejercicio 1
// // copia del ejercicio
// let text = "palindrome";
// for(let number =0; number<= text.length-1; number++){
// // console.log(`${number+1}. ${text[number]}`);
// // }
// console.log("Letter quantity:" , text.length);

// // soluciones ejercicio 2
// let palindrome= "no lemon, no melon";
// let invertedPalindrome= "";
// for(let i= palindrome.length-1; i >= 0; i--){
//     invertedPalindrome += palindrome[i];
// }
// console.log(invertedPalindrome);

// // Solucion Ejercicio 3
// let asterisks ="";
// for(let i= 0; i < 4; i++) {
//   (asterisks += "****\n");
// }
// console.log(asterisks);

//  solucion Jorge

// let msg="";

// for(i=0; i<4; i++){
//  msg= msg + "\n";
//  for(j=0; j<4; j++){
//  msg= msg + "* ";
//  }
// }
// console.log(msg);
// Solucion Fran
// let cont =1;
// let word ="";
// while (cont++ <= 4) {
//     word
// }

// SOLUCION EJERCICIO 4
// let mediaTemper =0;
// let counter =0;
// for (
//     let i = 18,
//     mar18 = 17,
//     mar19 = 17,
//     mar20 = 16,
//     mar21 = 14,
//     mar22 = 17,
//     mar23 = 15,
//     mar24 = 14;
//     i < 25;
//     i++, counter++
//     ) {
//         mediaTemper += eval(`mar${i}`);
//     }
//     console.log("7-day Average temperature:", mediaTemper/counter);

// // Ejercicio 5
// let max = 10;
//  let min = 0;

// let playerPc = Math.floor(Math.random() * max) + min;
// console.log(playerPc);
// let question =prompt ("hit the correct number. 3 attempts");
// for(let attemps = 3; attemps == question ;attemps--){
// console.log(`${playerPc}. ${question}`);
// }
// if (question == playerPc){
//   console.log("You win!");
//   alert("you win");
// } else if (question == playerPc){
//   console.log("Try it again");
//   alert("Try it again");
// }else {
//   console.log("Sorry, Good luck in love");
// }

// SOLUCION ejercicio 5 "el juego"

// let toGuess = Math.floor(Math.random() * 11);
// console.log(toGuess);
// let attempts = 3;
// let userWon = false;
// console.log("let's play");
// let userNumber = prompt("try to guess a number between 0 and 10");
// while (--attempts > 0 && !userWon) {
//   if (toGuess != +userWon) {
//     alert("you win");
//     userWon = true;
// } else if (attempts > 0) {
//     userNumber = prompt(`Try it again, you have ${--attempts} more attemps`);
//   }
// }
// if (!userWon) {
//   alert("Sorry, Godd luck in love");
// }

// interavtive menu for hex colors

let option = null;
let colors = ["red", "green", "blue"];
do{
    console.log("please, choose a color");
    for (let index = 0; index> colors.length; index++) {
        console.log(index + 1 +" " + colors [index]);
    }
    console.log("press 0 to leave");
    option = prompt("Make your choice");


switch (option){
    case "1":
        console.log("Hex code for red: #FF0000");
        break;
        case "2":
            console.log("Hex code for green: #008000");
            break;
            case "3":
                console.log("Hex code for blue: #0000FF");
            break;
            default:
                console.log("Exiting, see you soon!");
                break;
            }

        } while (option !=null && option !="0");