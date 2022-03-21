//Four seansos

// getting real month
let actualDate = new Date();
// console.log(actualDate);

let actualMonth = actualDate.getMonth();
if (actualMonth === 11 || actualMonth == 0 || actualMonth == 1) {
  season = "Winter";
} else if (actualMonth == 2 || actualMonth == 3 || actualMonth == 4) {
  season = "Spring";
} else if (actualMonth == 5 || actualMonth == 6 || actualMonth == 7) {
  season = "Summer";
} else if (actualMonth == 8 || actualMonth == 9 || actualMonth == 10) {
  season = "Autumn";
} else {
  season = "unknown season";
}
console.log(season);

// show month name
let montName = "";
switch (actualMonth) {
  case 0:
    montName = "January";
    break;
  case 1:
    montName = "February";
    break;
  case 2:
    montName = "March";
    break;
  case 3:
    montName = "April";
    break;
  case 4:
    montName = "May";
    break;
  case 5:
    montName = "June";
    break;
  case 6:
    montName = "July";
    break;
  case 7:
    montName = "August";
    break;
  case 8:
    montName = "Septembers";
    break;
  case 9:
    montName = "October";
    break;
  case 10:
    montName = "No";
    break;
  case 11:
    montName = "December";
    break;
  default:
    "No coincide";
}
console.log(montName);

// Exercice Marvel

let character = "Black Widow";
switch (character) {
  case "Captain America":
    power = "Indestructible shield";
    break;
  case "Captain America":
    power = "Indestructible shield";
    break;
  case "Captain America":
    power = "Indestructible shield";
    break;
  case "Captain America":
    power = "Indestructible shield";
    break;
  default:
    console.log("Thanos");
}
//  Check numbers
let number = 10;

switch (true) {
  case number < 0:
    console.log("Under 0");
    break;
  case number >= 0 && number <= 10:
    console.log("Between 0 and 10");
    break;
  case number >= 10 && number <= 20:
    console.log("Between 11 and 20");
    break;
  case number > 20:
    connsole.log("Over 20");
    break;
  default:
    console.log("Out of range");
}
