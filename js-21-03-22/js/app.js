// ejercicio1.month
// let actualMonth = getMonth();
// console.log (actualMonth)
// let actualMonth = new Month();
// // console.log(actualMonth);
// let actualDate = new Date();
// // console.log(actualDate);
// Date.actualDate = new montName();
// console.log(actualDate);

// let actualMonth = actualDate.getMonth();
// // let actualDate = new Date();
// // console.log(actualDate);
// let actualMonth = actualDate.getMonth();
// console.log("Mes actual:", actualMonth);
// ejercicio1.month
// getting real actualMonth
let actualDate = new Date();
console.log(actualDate);
let actualMonth = actualDate.getMonth();
console.log("Mes actual: ", actualMonth);
switch (actualMonth) {
  case 0:
    console.log("Enero tiene 31 días");
    break;
  case 1:
    console.log("febrero tiene 28 días");
    break;
  case 2:
    console.log("Marzo tiene 31 días");
    break;
  case 3:
    console.log("Abril tiene 30 días");
    break;
  case 4:
    console.log("Mayo tiene 31 días");
    break;
  case 5:
    console.log("Junio tiene 30 días");
    break;
  case 6:
    console.log("Julio tiene 31 días");
    break;
  case 7:
    console.log("Agosto tiene 31 días");
    break;
  case 8:
    console.log("Septiembre tiene 30 días");
    break;
  case 9:
    console.log("Octubre tiene 31 días");
    break;
  case 10:
    console.log("Noviembre tiene 30 días");
    break;
  case 11:
    console.log("Diciembre tiene 31 días");
    break;

  default:
    console.log("That's not a real month!");
    break;
}
// ejercicio 2

// let questionMonth = prompt ("¿Que mes es?");
// console.log(prompt);
// let questionDays = prompt ("¿Cuantos días tiene Marzo?");
// if (questionMonth == 31){
//     alert("correcto");
// } else {
//     alert("No es correcto!");

//     }
// let questionDays = prompt (That s Not a Real Month!);

// If(actualMonth == 31 ) {
// alert(actualMonth == 31);
// else {
//     alert(That sNotaRealMonth!);
// }
// CORRECTION EJERC.2
// let userChoice = prompt("Please, enter a month name:");
// console.log(userChoice);
// switch (userChoice.toLowerCase()) {
//   case "january":
//     console.log(31);
//     break;
//   case "february":
//     console.log(28);
//     break;
//   case "marchs":
//     console.log(31);
//     break;
//   case "apryl":
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
//     console.log(31);
//     break;
//   case "november":
//     console.log(30);
//     break;
//   case "december":
//     console.log(31);
//     break;
//   default:
//     "No correct";
//     break;
// }

// EJERCICIO 3

let temperature = prompt("¿What temperature is it?");
console.log(temperature);
switch (true) {
  case temperature < "15":
    alert("Warm up");
    break;
  case temperature >= "15" && temperature <= "25":
    alert("Enjoy the weather!");
    break;
  case temperature >= "25":
    alert("Cool down");
    break;
  default:
    break;
}
