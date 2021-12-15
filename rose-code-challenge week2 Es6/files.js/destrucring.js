
// destructuring
let names = ["Anisha", "Micheal", "Doreen"];

let [tall, short, brown] = names

console.log(tall)
console.log(short)
console.log(brown)


let placeHoldersNumbers = [9, 10, 27, 20];

let [x, y, z, a] = placeHoldersNumbers
console.log(x)
console.log(y)
console.log(z)
console.log(a)

// for(var i = 0; i<placeHoldersNumbers.length; i++){
//     console.log(placeHoldersNumbers[i])
// }


// destructuring assignment with function
function details(){

    return [2,4,6,8];
}
let [p, q, r, s] = details();
console.log(p)
console.log(q)
console.log(r)
console.log(s)

// destructuring assignment with objects
let personalDetails = {
    personName: "Rose",
    country: "uganda",
    job: "developer",
    email: "rose01@gmail.com"
}

let {personName, country, job, email} = personalDetails
console.log(personName)
console.log(country)
console.log(job)
console.log(email)


