// JavaScript basic
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function exercise1() {
  const diasDeLaSemana = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  let hoy = new Date();

  const amPm = (date) => {
    return date >= 12 ? `${date - 12} PM ` : `${date} AM`;
  };
  console.log(`Hoy es: ${diasDeLaSemana[hoy.getDay() - 1]}`);
  console.log(
    `La hora actual es: ${amPm(
      hoy.getHours()
    )} : ${hoy.getMinutes()} : ${hoy.getSeconds()}`
  );
}

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function exercise3() {
  let hoy = new Date();

  let dia = hoy.getUTCDate();
  let mes = hoy.getUTCMonth();
  let año = hoy.getUTCFullYear();

  console.log(`${mes}-${dia}-${año}`);
  console.log(`${mes}/${dia}/${año}`);
  console.log(`${dia}-${mes}-${año}`);
}

// 4. Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.

function exercise4() {
  const lado1 = 5;
  const lado2 = 6;
  const lado3 = 7;

  const s = (lado1 + lado2 + lado3) / 2;

  const area = Math.sqrt(s * ((s - lado1) * (s - lado2) * (s - lado3)));
  console.log(area);
}

// 5. Write a JavaScript program to rotate the string 'w3resource' in right
// direction by periodically removing one letter from the end of the string
// and attaching it to the front.

function exercise5() {
  const str = "w3resource";
  console.log(str.split("").reverse().join(""));
}

// 6. Write a JavaScript program to determine whether a given year is
// a leap year in the Gregorian calendar.

function exercise6(año) {
  if (año % 4 === 0 && año % 400 === 0) {
    console.log(`El año ${año} es bisiesto`);
  } else {
    console.log(`El año ${año} NO es bisiesto`);
  }
}

// 8. Write a JavaScript program where the program takes a random
// integer between 1 to 10, the user is then prompted to input a guess
// number. If the user input matches with guess number, the program will
// display a message "Good Work" otherwise display a message "Not matched"

function exercise8(guess) {
  const rndNumber = Math.floor(Math.random(1, 10) * 10)(guess === rndNumber)
    ? console.log("Good Work")
    : console.log("Not matched");
}
// 9. Write a JavaScript program to calculate days left until
// next Christmas.

function exercise9() {
  const hoy = new Date();
  let = hoy.getUTCFullYear();
  const navidad = new Date(año, 11, 25);

  console.log(Math.ceil(Math.abs(hoy - navidad) / (1000 * 60 * 60 * 24)));
}

// 10. Write a JavaScript program to calculate multiplication and division
// of two numbers

function exercise11(num1, num2) {
  console.log(`Resultado división: ${num1 / num2}`);
  console.log(`Resultado multiplicación: ${num1 * num2}`);
}

// 11. Write a JavaScript program to convert temperatures to and
// from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function exercise11() {
  const fahrenheit = Number(
    prompt("Ingrese Fahrenheit,ó ingrese 0 para Celsius")
  );
  const celsius = Number(prompt("Ingrese Celsius"));
  debugger;
  if (fahrenheit !== 0) {
    console.log(`Celsius: ${(fahrenheit - 32) * (5 / 9)}`);
  }
  if (fahrenheit === 0) {
    console.log(`Fahrenheit: ${celsius * (9 / 5) + 32}`);
  }
}

// 13. Write a JavaScript exercise to create a variable using a user-defined name
function exercise13() {
  let varName = prompt("Ingrese nombre de la variable");
  let number = 120;
  this[varName] = number;
  console.log(this[varName]);
}
