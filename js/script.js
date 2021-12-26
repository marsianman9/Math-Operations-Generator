alert("Let's do some Math!");

let main = document.querySelector('main');
let num1,
    num2,
    message;

    num1 = prompt("Enter a number");
    num1 = parseFloat(num1);

    num2 = prompt("Enter another number");
    num2 = parseFloat(num2);

    
if(num2 === 0) {
    alert("The second number cannot be 0. Reload and try again.");
} else if(isNaN(num1) || isNaN(num2)) {
    alert("At least one of the values you typed is not a number. Reload and try again.");
} else {
    message = `
        <h1>Math with the numbers ${num1} and ${num2}:</h1>
        <p>${num1} * ${num2} = ${num1 * num2}</p>
        <p>${num1} / ${num2} = ${num1 / num2}</p>
        <p>${num1} + ${num2} = ${num1 + num2}</p>
        <p>${num1} - ${num2} = ${num1 - num2}</p>
    `;
    main.innerHTML = message;
}