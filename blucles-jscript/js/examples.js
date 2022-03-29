// Loops/Bucles
// countin by one to one
// let count = 0;
// while (count < 10){
//   console.log(count);
//   count++;
// }
// // console.log("El proframa seguira por aquí");
// let montDays = new Date(2022, 3, 0),
//   getDate;
// console.log(montDays);
// // March calendar
// let day =1;
// while(day <= montDays) {
//     console.log(day);
//     day++;
// }
// let number = 0;
// while(number == 10) {
//     console.log("esto no se verá enpantalla");
// }
// while(number <= 10) {
//     console.log("esto si se verá enpantalla");
// number= number+2;
// number+=2;
// // }

// // Counting back
// let counter = 10;
// while (counter >= 2) {
//   console.log(counter--);
// }

// for loop
// let end = 10;
// for(let start =1;start <= end;start++){
//     console.log(start);
// }
// let star, end;
// for(start=0, end=1000; start<end; start++, end--){
//     console.log(star, " ", end);
// }
// console.log("showing values after finishing the loop");
// console.log(start, " ", end);

// for(let num =0; num < 10; num++) {
//     console.log(num);
// }

// Ejercicio de multiplicacion
// let userValue= prompt("Enter your value");
//     for(let num =1; num <= 10; num++){
//     console.log(`${userValue} x ${num} = ${userValue * num}`);
// }

// let altura = 5;
// let space = altura -1;
// let ast = 1;
// let fila = "";
// for (let i = 0; i < altura; i++) {
//   for (let x = 0; x < space; x++) {
//     fila += "";
//   }
//   for (let y = 0; y < ast; y++) {
//       fila += "*"
// }
//   console.log(fila);
//   space -= 1;
//   ast -= 2;
//   fila = "";

// }
// space += 2;
// ast -= 4;
// for (let i = 0; i < altura -1; i++) {
//   for (let x = 0; x < space; x++) {
//     fila += "";
//   }
//   for (let y = 0; y < ast; y++) {
//     fila += "*";
//   }
//   console.log(fila);
//   space += 1;
//   ast -= 2;
//   fila = "";
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

// switch (option) {
//   case "1":
//     console.log("Hex code for red: #FF0000");
//     break;
//   case "2":
//     console.log("Hex code for green: #008000");
//     break;
//   case "3":
//     console.log("Hex code for blue: #0000FF");
//     break;
//   default:
//     console.log("Exiting, see you soon!");
//     break;
// }

// while (option != null && option != "0");

// OBJETOS /ARRAYS
// Object literal syntax
// let star = {
//     name: "Polaris",
//     constellation: "Ursa Minor",
//     type: "Double/Cepheid",
//     spectralClass:"F7",
//     mag: 2.0,
// };

// Escribe un objeto person, que contenga, nombre, apellidos, edad, dirección{tipoVia, nombreVia, num, cp,localidad},telefono

// let person= {
//     name:"Erika",
//     apellido: "Dominguez",
//     edad: 32,
//     direccion: {
//         tipoVia: "Calle",
//         nombreVia:"Mosaico",
//         numero:"17",
//         cp:"29591",
//         localidad:"Santa Rosalia",
//         telefono:"666 666 666",
//     }
// }

// let person= {
//     name:"John",
//     lastName: "Barella",
//     age: 32,
//     address: {
//         streetType: "Calle",
//         steetName:"Mosaico",
//         num: 17,
//         cp: 29591,
//         location:"Santa Rosalia",
//     },
//     phone: "+34 666 666 666",
// }
// person.address.location= "Madrid";
// console.log(person);

// person.phone = {
//     1:"+34 666 666 661",
//     2:"+34 666 666 662",
//     3:"+34 666 666 663",
// }

// // Crear un objeto llamado login con las propiedades y valores respectivamente.
// // id => Un número hexadecimal
// // state => {logged => verdadero o falso, onLine => verdadero o falso}
// // userName => "nombre"
// // loginAt: => fecha y hora

// let login = {
//     id: "a251fdf452",
//     state: {
//         logged: true,
//         online: true,
//     },
//     userName:"John",
//     loginAt:"2022/03/28 18:15:30",
// };

// // let useEmail= prompt(person.email("Enter your email"));
// // let usePassword=prompt(person.password("Enter you password"));

// // login.id = "b1225232sss";
// // console.log(login);

// person.email = "Johnbarela@gmial.com";
// person.password = "1234";
// console.log(person);
// let userEmail = prompt("Please, enter your email:");
// let userPassword = prompt("Please, enter your password:");
// if(userEmail == person.email && userPassword == person.password) {
//     login.state.logged = true;
//     login.state.logged = true;
//     let loginInfo = new Date();
//     let year = loginInfo.getFullYear();
//     let month = loginInfo.getMonth()+1;
//     let day = loginInfo.getDate();

//     let hour = loginInfo.getHours();
//     let min = loginInfo.getMinutes();
//     let seg = loginInfo.getSeconds();

//     let completeDate = `${year}/`;
//     if(month < 10){
//         completeDate += `0${month}/`;
//     } else {
//         completeDate += `${month}/`;
//     }
//     if (day < 10) {
//         completeDate += `0${day}`;
//     } else {
//         completeDate += `${day}`;
//     }
//     if (hour<10){
//         completeDate += `0${hour}`;
//     } else {
//         completeDate += `0${hour}`;
//     }
//     if (min<10){
//         completeDate += `0${min}`;
//     } else {
//         completeDate += `0${min}`;
//     }
//     if (seg<10){
//         completeDate += `0${seg}`;
//     } else {
//         completeDate += `0${seg}`;
//     }

//     alert(`Welcome ${person.name}, you logged in correctly.`);
// } else{
//     alert(`You login data are incorrect.`)
// }
// let x =5;
// let y = x;
// y = 7;
// let hero = {
//   character: "Iron Man",
//   charecter: "Thor",
//   name: "Tony Stark",

// powers:[
//     "Genius-level intelet",
//     "Multiple powered armor suits",
//     "Ability to fly",
// ],
// info: {
//     yearCreated: 1963,
//     powerOringin: "From his suit",
//     weapons: ["repulsor rays", "uni-beam projector", "lasers"],
//     didYouKknow:
//     "Tony Stark created and built one of Spider-Man's upgraded suits known as the Orin Spider Suit. We got a small glimpse of it in Spider-Man: Homecoming!",
// },
// };
// EJERCICIO DE CARRITO
// let shoppingCart = {
//   0: {
//     product_id: 0,
//     name: "Nike Air Max",
//     price: "125$",
//     quantity: 1,
//   },
//   1: {
//     product_id: 6,
//     name: "Nike Air Pegasus",
//     price: "155$",
//     quantity: 4,
//   },
//   2: {
//     product_id: 4,
//     name: "Nike Min Jordan",
//     price: "185$",
//     quantity: 1,
//   },
//   3: {
//     product_id: 3,
//     name: "Nike blazer 1.3 Blue",
//     price: "49$",
//     quantity: 2,
//   },
// };
// SOLUCION

// for (let i = 0; i < Object.keys(shoppingCart).length; i++) {
//     let id = shoppingCart[i].product_id;
//     let name = shoppingCart[i].name;
//     console.log("id: ", id, " name: ", name);
//     }

// let original =[1,2,3];
// let originalIncreased =[0, ...original,4];
// let copy = [...original];
// console.log(copy);
// copy[copy.length] =[1,2,3,4,5];
// console.log(copy);
// let elements = new Array();
// console.log(elements);
// let single = Array.of(10);
// console.log(typeof elements);

// let colors= ["red", "blue","green"];
// alert(colors[4]);
// colors[2]= "black";
// colors[3]= "pink";
// alert(colors.length);
// colors[colors.length] = "black";
// colors[colors.length] = "white";

// let number =[1,2,3,];
// number.push(5);
// console.log(number);
// number.pop();
// console.log(number);
// number.push(7,8);
// console.log(number);
// number.pop(2);
// console.log(number);

// colors[colors.length] = "white";
// number.pop(); saca elemento por el final
// number.push(5); añade por el final

// let colors = ["red","green","blue"];
// colors.shift(); saca elemento por el principio
// colors.unshift("orange");añade por el principio

// let numbers=[1,2,3,4,5];
// numbers.reverse();
// console.log(numbers);
// let moreNumbers = [0,1,5,10,15];
// moreNumbers.sort();
// console.log(moreNumbers);
// function compare(value1, value2) {
//   if (value1 < value2) {
//     return -1;
//   } else if (value1 > value2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// moreNumbers.sort(compare);
// // alert(moreNumbers);
// console.log(moreNumbers);

// var numbers = [4, 2, 5, 1, 3, 7, 7, 9, -1];
// let counter = 0;
// // numbers.sort(function (a, b) {
// //   counter++;
// //   console.log("a:", a);
// //   console.log("b:", b);
// //   console.log(a - b);
// //   return a - b;
// // });
// console.log(numbers);
// console.log(counter);

let numbers = [3, 9, 8, 1, 4];
for (let index = 0; index < numbers.length - 2; index++) {
  for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      aux = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = aux;
    }
  }
}
console.log(numbers);
