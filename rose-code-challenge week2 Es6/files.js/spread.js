// spread operator

// joining arrays
let language = ["english", "luganda", "lusoga"];
let tribe = ["baganda", "basoga", ...language];
console.log(tribe)

// copying array
 let car = ["V8", "premio", "benz"]
 let copyCara = [...car];
 console.log(copyCara);

//  joining 2 arrays

let evenNumbers = [2, 4, 6, 8, 10];
let oddNumbers = [1, 3, 7,]
let combined = [...oddNumbers, ...evenNumbers];
console.log(combined);