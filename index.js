// JavaScript basic
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const excercise1 = () => {
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
};

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const excercise3 = () => {
  const hoy = new Date();

  const dia = hoy.getUTCDate();
  const mes = hoy.getUTCMonth();
  const año = hoy.getUTCFullYear();

  console.log(`${mes}-${dia}-${año}`);
  console.log(`${mes}/${dia}/${año}`);
  console.log(`${dia}-${mes}-${año}`);
};

// 4. Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.

const excercise4 = () => {
  const lado1 = 5;
  const lado2 = 6;
  const lado3 = 7;

  const s = (lado1 + lado2 + lado3) / 2;

  const area = Math.sqrt(s * ((s - lado1) * (s - lado2) * (s - lado3)));
  console.log(area);
};

// 5. Write a JavaScript program to rotate the string 'w3resource' in right
// direction by periodically removing one letter from the end of the string
// and attaching it to the front.

const excercise5 = () => {
  const str = "w3resource";
  console.log(str.split("").reverse().join(""));
};

// 6. Write a JavaScript program to determine whether a given year is
// a leap year in the Gregorian calendar.
const excercise6 = (año) => {
  if (año % 4 === 0 && año % 400 === 0) {
    console.log(`El año ${año} es bisiesto`);
  } else {
    console.log(`El año ${año} NO es bisiesto`);
  }
};

// 8. Write a JavaScript program where the program takes a random
// integer between 1 to 10, the user is then prompted to input a guess
// number. If the user input matches with guess number, the program will
// display a message "Good Work" otherwise display a message "Not matched"

const excercise8 = (number) => {
  const rndNumber = Math.floor(Math.random(1, 10) * 10);
  number === rndNumber ? console.log("Good Work") : console.log("Not matched");
};
// 9. Write a JavaScript program to calculate days left until
// next Christmas.

const excercise9 = () => {
  const hoy = new Date();
  let = hoy.getUTCFullYear();
  const navidad = new Date(año, 11, 25);

  console.log(Math.ceil(Math.abs(hoy - navidad) / (1000 * 60 * 60 * 24)));
};

// 10. Write a JavaScript program to calculate multiplication and division
// of two numbers

const excercise10 = (num, num2) => {
  return `Resultado división: ${num / num2}, Resultado multiplicación: ${
    num * num2
  }`;
};

// 11. Write a JavaScript program to convert temperatures to and
// from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

const excercise11 = () => {
  const fahrenheit = Number(
    prompt("Ingrese Fahrenheit,ó ingrese 0 para Celsius")
  );
  const celsius = Number(prompt("Ingrese Celsius"));
  if (fahrenheit !== 0) {
    console.log(`Celsius: ${(fahrenheit - 32) * (5 / 9)}`);
  }
  if (fahrenheit === 0) {
    console.log(`Fahrenheit: ${celsius * (9 / 5) + 32}`);
  }
};

// 13. Write a JavaScript exercise to create a variable using a user-defined name

const excercise13 = () => {
  let varName = prompt("Ingrese nombre de la variable");
  let number = 120;
  this[varName] = number;
  console.log(this[varName]);
};

// 14. Write a JavaScript exercise to get the extension of a filename.

const excercise14 = (string) => {
  return string.split(".")[1];
};

// 15. Write a JavaScript program to get the difference between a given number and 13, if the
// number is greater than 13 return double the absolute difference.

const excercise15 = (number) => {
  return number <= 13 ? 13 - number : Math.abs(number - 13) * 2;
};

// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values
// are same, then returns triple their sum.

const excercise16 = (num, num2) => {
  if (num === num2) {
    return (num + num2) * 3;
  } else {
    return num + num2;
  }
};

// 17. Write a JavaScript program to compute the absolute difference
// between a specified number and 19. Returns triple their absolute
// difference if the specified number is greater than 19

const excercise17 = (number) => {
  return number <= 19 ? Math.abs(19 - number) : Math.abs(19 - number) * 3;
};

// 18. Write a JavaScript program to check two given numbers and return
// true if one of the number is 50 or if their sum is 50.

const excercise18 = (num, num2) => {
  let sum = num + num2;
  if (sum === 50 || num === 50 || num2 === 50) {
    return true;
  }
  return false;
};
// 19. Write a JavaScript program to check whether a given
// integer is within 20 of 100 or 400.

const excercise19 = (number) => {
  return Math.abs(100 - number) <= 20 || Math.abs(400 - number) <= 20;
};

// 20. Write a JavaScript program to check from two given integers,
// whether one is positive and another one is negative.

const excercise20 = (num, num2) => {
  if ((num > 0 && num2 < 0) || (num < 0 && num2 > 0)) {
    return true;
  }
  return false;
};

// 21. Write a JavaScript program to create a new string adding "Py" in
// front of a given string. If the given string begins with "Py" then return
// the original string.

const excercise21 = (string = "") => {
  const regExp = /^Py/g;
  if (regExp.test(string)) {
    return string;
  }
  return `Py${string}`;
};

// 22. Write a JavaScript program to remove a character at the specified
// position of a given string and return the new string

const excercise22 = (character, string) => {
  const index = string.lastIndexOf(character);
  if (index !== -1) {
    return `${string.slice(0, index)}${string.slice(index + 1, string.length)}`;
  }
};

// 23. Write a JavaScript program to create a new string from a given
// string changing the position of first and last characters. The string
// length must be greater than or equal to 1.

const excercise23 = (string) => {
  const firstChar = string[0];
  const lastChar = string[string.length - 1];
  if (string.length < 1) {
    return;
  } else {
    return `${lastChar}${string.slice(1, -1)}${firstChar}`;
  }
};

// 24. Write a JavaScript program to create a new string from a given
// string with the first character of the given string added at the front
// and back.

const excercise24 = (string) => {
  const firstChar = strinh[0];
  return `${firstChar}${string}${firstChar}`;
};
