// ESTRUCTUTA FOR
// for(variable; contador bolean ; number++){

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
