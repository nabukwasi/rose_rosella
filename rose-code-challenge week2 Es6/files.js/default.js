
// default parameters

let add = (num1 = 7,num2 = 3 ,num3 = 4) => {

    
    let multipy = num1 * num2 * num3;
    console.log(multipy)
}

add(2,2.3,7);


// default parameters
function name1(name = "Rose"){

    return name
}
console.log(name1())

// default parameters
let adding = (a = 8) => a + 2
console.log(adding())