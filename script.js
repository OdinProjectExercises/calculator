let first;
let second;
let operator;

let expression = "";

function add(a, b){return a + b};

function substract(a, b){return a + b};

function multiply(a, b){return a * b};

function divide(a, b){return a / b};

function operate(first, operator, second){
    if (operator === "+"){return add(first, second)};

    if (operator === "-"){return substract(first, second)};

    if (operator === "x"){return multiply(first, second)};

    if (operator === "/"){return divide(first, second)};
};

const one = document.querySelector(".one");
one.addEventListener('click', () =>{
    expression += '1';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const two = document.querySelector(".two");
two.addEventListener('click', () =>{
    expression += '2';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const three = document.querySelector(".three");
three.addEventListener('click', () =>{
    expression += '3';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const four = document.querySelector(".four");
four.addEventListener('click', () =>{
    expression += '4';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const five = document.querySelector(".five");
five.addEventListener('click', () =>{
    expression += '5';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const six = document.querySelector(".six");
six.addEventListener('click', () =>{
    expression += '6';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const seven = document.querySelector(".seven");
seven.addEventListener('click', () =>{
    expression += '7';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const eight = document.querySelector(".eight");
eight.addEventListener('click', () =>{
    expression += '8';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const nine = document.querySelector(".nine");
nine.addEventListener('click', () =>{
    expression += '9';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const zero = document.querySelector(".zero");
zero.addEventListener('click', () =>{
    expression += '0';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const plus = document.querySelector(".plus");
plus.addEventListener('click', () =>{
    expression += '+';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const  minus = document.querySelector(".minus");
minus.addEventListener('click', () =>{
    expression += '-';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const product = document.querySelector(".product");
product.addEventListener('click', () =>{
    expression += 'x';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const division = document.querySelector(".division");
division.addEventListener('click', () =>{
    expression += '/';
    const show = document.querySelector(".display");
    show.innerText = expression;
});
const clean = document.querySelector(".C");
clean.addEventListener('click', () =>{
    const show = document.querySelector(".display");
    expression = ""
    show.innerText = expression;
});
const equal = document.querySelector(".equal");
equal.addEventListener('click', () =>{
    
});