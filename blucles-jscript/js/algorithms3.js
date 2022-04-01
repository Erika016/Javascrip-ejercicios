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
const exercise3 = () => {
  const generateColor = () => {
let letters = "0123456789ABCDEF";
let color = '#';
for(var i =0; i < 6; i++){
  color += letters[(Math.floor(Math.random()*16))];
  }
// console.log(color);
}
return color;
for(let i = 1; 1 <= 10; i++){
  console.log("%cHello Worl",`color: ${generateColor()}`);
};
// exercise3();

// Exercise 4
// let dni = prompt("Please, enter your DNI");
// let min = 0;
// let max = 9;
// let numAle = Math.floor(Math.random() * (max - min + 1));
// ;
// console.log(numAle)