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
// generar un progama que muestre la hora y una alerta con buenos dias/tarde/noche

// let year = actualDate.getFullYear();
// let month = actualDate.getMonth()+1;
// let day = actualDate.getDate();
// let actualHours= {
//     hour: actualDate.getHours(),
//     min: actualDate.getMinutes(),
//     seg: actualDate.getSeconds(),
// }

// if (actualHours){
// console.log(06:00:00<= 11:59
//     alert("¡Buenos días!");

// }
let hours = new Date().getHours();
if( hours >= 6 && hours <12){
    alert("");
        } else if {
           ;
        } else {
         ;
        }
    
// let actualHours= [hour = actualDate.getHours(),min = actualDate.getMinutes(),
//     seg = actualDate.getSeconds(),
// ]
// console.log(actualHours);
// let hora = actualHours.forEach((item, index,) => {
//     console.log(`${index}`);
// })

// console.log(hora);

//     let hour = loginInfo.getHours();
//     let min = loginInfo.getMinutes();
//     let seg = loginInfo.getSeconds();

//     let completeDate = `${year}/`;
//     