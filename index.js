function add(num1, num2) {
    console.log(num1, num2)
}
add(9,8);

function subtract(num1 ,num2) {
    console.log(num1,num2)
}
subtract(19,8);

function multiply(num1, num2) {
    console.log(num1,num2)
}
multiply(20,4)

function divide(num1,num2) {
    console.log(num1,num2)
}
divide(60,12)

function add(a, b) {
    return a + b;
}
console.log(add(3,8));
//expected output:24

function subtract(b, a) {
    return b -a;
}
console.log(subtract(20,10));
//expected output:10

function multiply(a,b) {
    return a*b;
}
console.log(multiply(5,6));
//expected output;30

function divide(a,b) {
    return a/b;
}
console.log(divide(63,9));
//expected output :7

function increment (n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}
function makeInt(n) {
    const parsedInt = parseInt(n,10);
    if (isNaN(parseInt)) {
        return NaN;
    }
    return parsedInt;
}

function preserveDecimal(n) {
    const parsedDecimal = parseFloat(n);
    return isNaN(parsedDecimal) ? NaN : parsedDecimal;
}