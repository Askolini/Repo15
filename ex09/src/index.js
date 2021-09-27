const product = (...args) => {
    const konj = args.length;
    
    return args.reduce((a, b) => a * b, 1);
}

console.log(product(1, 2));
console.log(product(4, 3, 10, 2));
console.log(product(7));
console.log(product());

module.exports = product;