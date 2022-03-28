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

// let option = null;
// let colors = ["red", "green", "blue"];
// do{
//     console.log("please, choose a color");
//     for (let index = 0; index> colors.length; index++) {
//         console.log(index + 1 +" " + colors [index]);
//     }
//     console.log("press 0 to leave");
//     option = prompt("Make your choice");

// switch (option){
//     case "1":
//         console.log("Hex code for red: #FF0000");
//         break;
//         case "2":
//             console.log("Hex code for green: #008000");
//             break;
//             case "3":
//                 console.log("Hex code for blue: #0000FF");
//             break;
//             default:
//                 console.log("Exiting, see you soon!");
//                 break;
//             }

//         } while (option !=null && option !="0");

// copia ejercicios
// Pre definer functionas solution
// let today = new Date();
// let daysIncurrectMonth = new Date(
//  today.getFullYear(),
//  today.getMonth()+1,
//  0
// ) .getDate();
// console.log("this month has: ", daysIncurrectMonth, "days");
// let today2 = new Date();
// let getConcurretMonth = today2.getMonth();
// let answer = "The actual month has:";
// switch (1) {
//   case 0:
//     console.log(answer + 31 + "days");
//     break;
//   case 1:
//     console.log(answer + 28 + "days");
//     break;
//   case 2:
//     console.log(answer + 31 + "days");
//     break;
//   case 3:
//     console.log(answer + 30 + "days");
//     break;
//   case 4:
//     console.log(answer + 31 + "days");
//     break;
//   case 5:
//     console.log(answer + 30 + "days");
//     break;
//   case 6:
//     console.log(answer + 31 + "days");
//     break;
//   case 7:
//     console.log(answer + 31 + "days");
//     break;
//   case 8:
//     console.log(answer + 30 + "days");
//     break;
//   case 9:
//     console.log(answer + 31 + "days");
//     break;
//   case 10:
//     console.log(answer + 30 + "days");
//     break;
//   case 11:
//     console.log(answer + 31 + "days");
//     break;
//   default:
//     answer = "Unknown month";
//     console.log(answer);
//     break;
// }

// Exercise 2
// saving a given name by user
// let userChoice = prompt("please, enter a month name");
// console.log(userChoice);
// switch (userChoice.toLowerCase()) {
//   case "jannuary":
//     console.log(31);
//     // alert(31); another way to show the result
//     break;
//   case "february":
//     console.log(28);
//     break;
//   case "march":
//     console.log(31);
//     break;
//   case "april":
//     console.log(30);
//     break;
//   case "may":
//     console.log(31);
//     break;
//   case "june":
//     console.log(30);
//     break;
//   case "july":
//     console.log(31);
//     break;
//   case "august":
//     console.log(31);
//     break;
//   case "september":
//     console.log(30);
//     break;
//   case "october":
//     console.log(30);
//     break;
//   case "november":
//     console.log(30);
//     break;
//   case "decenber":
//     console.log(31);
//     break;

//   default:
//     console.log("That's not real month");
//     break;
// }

// // Exercise 3
// let temperature = prompt("What temperature is it out there");
// console.log(Typeof.temperature);
// switch (true) {
//   case temperature < 15:
//     alert("Warm up");
//     break;
//   case temperature >= 25:
//     alert("Enjoy the weather!");
//     break;
//   case temperature > 25:
//     alert("Cool down");
//     break;
//   default:
//     alert("White a real data!");
//     break;
// }
// if(temperature <15) {
//   alert("Warm up");
// } else if (temperature <= 25) {
//   alert("Enjoy the weather!");
// } else if (temperature > 25) {
//   alert("Cool down");
// } else {
//   alert("Write a real data!");
// }

// Exewrcise 4

// let isGreen = true;
// // trying the negate opetator
// if (!isGreen) {
//   console.log("Please await");
// } else {
//   console.log("Cross the road");
// }
// // more understandable and intuitive
// if (isGreen){
//   console.log("Cross the road");
// }else {
//   console.log("Please await");
// }

// Giovanna Solution
// let actualDate = new Date();
// let currentTime= actualDate.getMinutes();
// console.log(currentTime);
// // Checks if the minuter of the current time are odd or even.
// // if even, the lights are green, and if odd, the lights are red
// let isGreen = currentTime % 2 ==0;
// switch (isGreen){
//   case true:
//     console.log("Cross the road");
//     break;
//     case false:
//       console.log("Please await");
//       break
//       default:
//         console.log("watch out! The traffic lights are broken!");
// }

// Exercise 5

// let temperatura = "Freezing Point";
// switch (temperature) {
//   case "absolute Zero":
//     console.log(-273.15 * 9) / 5 + 32;
//     break;
//   case "Freezing Point":
//     console.log((0 * 9) / 5 + 32);
//     break;
//   case "Body Temperature":
//     console.log((37 * 9) / 5 + 32);
//     break;
//   case "Boiling Point":
//     console.log((100 * 9) / 5 + 32);
//     break;
//   default:
//     console.log("There are more grades in my beer!");
// }

// // Exercise 6
// let email = "tolkien@lordofrings.com";
// let password = "aNBR6ZeWPY";
// let userEmail = prompt("Please, enter your email.");
// let userPassword = prompt("Please, enter your email");
// if (email == userEmail && password == userPassword) {
//   alert("Welcome Mr Tolkien");
// } else{
//   alert("Wrong password or email");
// }

// // solucion Julio
// let email =prompt("Please, enter your email");
// let password = prompt("Please, enter your password");
// if(email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
//   alert ("Welkome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

// // Exercise 7
// let money = 500;
// let converTo = "libra";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franc = 1.03;
// switch (converTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is:`, money * dollar);
//     break;
//   case "yen":
//     console.log(`The value of ${money} in yen is`, money * yen);
//     break;
//   case "libra":
//     console.log(`The value of ${money} in libra`, money * libra);
//     break;
//   case "franc":
//     console.log(`The value of ${money} in franc`, money * franc);
//     break;
// }

// // Exercise 8
// let num1 = parseFloat(prompt("Please enter the firts number:"));
// let num2 = parseFloat(prompt("Please enter the second number:"));
// let operation = prompt(
//   "Please choose one option: add, subtract, multiply, divide"
// );

// switch (operation) {
//   case "add":
//     console.log(num1 + num2);
//     break;
//   case "subtract":
//     console.log(num1 - num2);
//     break;
//   case "multiply":
//     console.log(num1 * num2);
//     break;
//   case "divide":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Please choose a valid option.");
// // }
// // solucion kai
// let x = prompt("Introduce un numerito");
// let y = prompt("Introduce otro numerito");
// let calculo= prompt("que calculo quieres hacer?");

// if(calculo == "suma"){
//   console.log(parseFloat(x) + parseFloat(y));
// } else if (calculo == "resta") {
//   console.log(parseFloat(x) - parseFloat(y));
// }else if (calculo == "multiplicacion") {
//   console.log(parseFloat(x) * parseFloat(y));
// } else if (calculo == "division"){
//   console.log(parseFloat(x) * parseFloat(y));
// } else {
//   console.log( "nada de lo introducido es correcto");
// }

// Exercise 9
// let data = prompt("please enter DNI or NIE");
// // Verify data length
// if (data.lenchg == 9) {
//   // checking if data begins by T or X
//   if(data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88){
//     if (data.charCodeAt(data.length - 1) >= 65 && data.charCodeAt(data.length -1) <= 90 &&
//     data.charCodeAt(data.length-1)<= 65)
//     data.charCodeAt(data.length - 1) >= 90) {

//     }if (
//         data.charCodeAt(1) >= 48 &&
//         data.charCodeAt(1) <= 57 &&
//         data.charCodeAt(2) >= 48 &&
//         data.charCodeAt(2) <= 57 &&
//         data.charCodeAt(3) >= 48 &&
//         data.charCodeAt(3) <= 57 &&
//         data.charCodeAt(4) >= 48 &&
//         data.charCodeAt(4) <= 57 &&
//         data.charCodeAt(5) >= 48 &&
//         data.charCodeAt(5) <= 57 &&
//         data.charCodeAt(6) >= 48 &&
//         data.charCodeAt(6) <= 57 &&
//         data.charCodeAt(7) >= 48 &&
//         data.charCodeAt(7) <= 57
//       ) {
//         console.log("valid NIE");
//       } else {
//         console.log("Please, check your NIE");
//       }
//     }
//     // if NIE fails, then check the DNI
//   } else if (
//     data.charCodeAt(0) >= 48 &&
//     data.charCodeAt(0) <= 57 &&
//     data.charCodeAt(1) >= 48 &&
//     data.charCodeAt(1) <= 57 &&
//     data.charCodeAt(2) >= 48 &&
//     data.charCodeAt(2) <= 57 &&
//     data.charCodeAt(3) >= 48 &&
//     data.charCodeAt(3) <= 57 &&
//     data.charCodeAt(4) >= 48 &&
//     data.charCodeAt(4) <= 57 &&
//     data.charCodeAt(5) >= 48 &&
//     data.charCodeAt(5) <= 57 &&
//     data.charCodeAt(6) >= 48 &&
//     data.charCodeAt(6) <= 57 &&
//     data.charCodeAt(data.length - 1) >= 65 &&
//     data.charCodeAt(data.length - 1) <= 90
//   ) {
//     console.log("valid DNI");
//   } else {
//     console.log("Please, check your DNI");
//   }
// } else {
//   console.log("Please enter valid data");
// }

//   }
// }
// Exercise 10
// Setting mas and min possible values
// let max = 6;
// let min = 1;
// // generating a random number between max and min
// let randomNumber1= (Math.floor(Math.random()*10)&6)+1;
// let randomNumber1 = Math.floor(Math.random() *max) +min;
// let randomNumber2 = Math.floor(Math.random() *max) +min;
// console.log(randomNumber1);
// console.log(randomNumber2);
// if(randomNumber1 > randomNumber2) {
//   console.log("Player1 wins!");
// }else {
//   console.log("Draw");
// }

// COPIA ejercicio Bucles

// // Exercise 1
// let text = "palindrome";
// for (let number = 0; number <= text.length-1; number++) {
//   console.log(`${number+1}. ${text[number]}`);
// }
// console.log("Letters quantity:" , text.length);

// let nombre = "Erika";
// for(let number = 0; number <= nombre.length-1 ; number++) {
// console.log(`${number+1}, ${nombre[number]}`);
// }
// console.log("Letter quantuty:" , nombre.length);

// Exercise 2
// let palindrome = "no lemon, no melon";
// let invertdPalindrome= "";
// for (let i = palindrome.length-1; i>=0 ; i--) {
//   invertdPalindrome += palindrome[i];
// }
// console.log(invertdPalindrome);

// Exercise 3

// let asterisks = "";
// for (let i = 0; i < 4; i++){
//   asterisks += "****\n";
// }
// console.log(asterisks);

// Cometa de asteriscos

// let asterisks = "";
// for (let i = 0; i < 1; i++){

//   asterisks += "    * \n ";
//   asterisks += "  * * \n ";
//   asterisks += " * * * \n ";
//   asterisks +="* * * * \n";
//   asterisks += " * * * *\n";
//   asterisks += "  * * *\n ";
//   asterisks += "  * *\n ";
//   asterisks += "   *\n ";}
// // console.log(asterisks);
// let contador = 1;
// let ast = "";
// while( contador++ <3){
//   ast += "   *\n   ";
//   ast += "  *\n  ";
//   ast += " *\n ";
//   ast += "*\n";
//   ast += " *\n ";
//   ast += " *\n ";
//   ast += "  *\n  ";
// }
// console.log(asterisks + ast);

// // Exercise 4
// let mediaTemper = 0;
// let counter= 0;
// for (
//   let i = 18,
//   mar18= 17,
//   mar19 = 16,
//   mar20 = 16,
//   mar21 = 14,
//   mar22 = 17,
//   mar23 =15,
//   mar24 = 14;
//   i < 25; i++, counter++){
//     mediaTemper += eval(`mar${i}`);
//   }
//   console.log("7-Day Averge Tenmperature:", mediaTemp / counter);

// Exercise 5
let toGues =Math.floor(Math.random() *11);
console.log(toGues);
let attemps = 3;
let userWon = false;
console.log("Let's play");
let userNumber = prompt("Try to guess a number between 0 and 10");
while (--attemps >= 0 && !userWon){
  if (toGues == +userNumber){
    alert("your win!");
    userWon = true;
  } else if (attemps > 0) {
    userNumber= prompt(`Try it again, you have ${attemps} more attemps`);
  }
}
if (!userWon) {
  alert("Sorry, Good luck in love");
}