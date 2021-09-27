const sum = (num1, num2 = 1) => {
    return num1 + num2
}

console.log(sum(4, 6));
console.log(sum(3));

module.exports = sum;