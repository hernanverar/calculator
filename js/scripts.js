// function saySomething(whatToSay) {
//     window.alert(whatToSay);
//   }
//   function add(number1, number2) {

//     return number1 + number2;

// }

// function subtract(number1, number2) {

//   return number1 - number2;

// }
// function multiply(number1, number2) {

//   return number1 * number2;

// }
// function divide(number1, number2) {

//   return number1 / number2;

// }

// let response1 = parseInt(prompt("Enter a number:"));
// let response2 = parseInt(prompt("Enter another number:"));
// saySomething('The addition of your numbers equals ' + add(response1,response2) + '. The subtration of your numbers equals ' + subtract(response1,response2) + '. The division of your numbers equals ' + divide(response1,response2) + '. And the multiplication of your numbers equals ' + multiply(response1,response2)+ '.');
// // saySomething(subtract(1, 6));
// // saySomething(multiply(2, 4));
// // saySomething(divide(2, 12));
// // saySomething(add(response1,response2));

function saySomething(response1,response2) 
{
  window.alert(add(response1,response2)+ subtract(response1,response2)+ multiply(response1,response2)+divide(response1,response2))
//  window.alert('The addition of your numbers equals ' + add(response1,response2) + '. The subtration of your numbers equals ' + subtract(response1,response2) + '. The division of your numbers equals ' + divide(response1,response2) + '. And the multiplication of your numbers equals ' + multiply(response1,response2)+ '.');
}
function add(number1, number2) {
  
  const result = number1 + number2;
  return `${number1} + ${number2} = ${result},
  `;

}

function subtract(number1, number2) {

  const result = number1 - number2;
  return `${number1} - ${number2} = ${result},
  `;

}
function multiply(number1, number2) {

  const result = number1 * number2;
  return `${number1} * ${number2} = ${result},
  `;

}
function divide(number1, number2) {

  const result = number1 / number2;
  return `${number1} / ${number2} = ${result}.`;

}

let response1 = parseInt(prompt("Enter a number:"));
let response2 = parseInt(prompt("Enter another number:"));
saySomething(response1,response2);
