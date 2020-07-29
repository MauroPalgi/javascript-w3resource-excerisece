// JavaScript basic
// https://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

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
  `La hora actual es: ${amPm(hoy.getHours())} : ${hoy.getMinutes()} : ${hoy.getSeconds()}`
);
