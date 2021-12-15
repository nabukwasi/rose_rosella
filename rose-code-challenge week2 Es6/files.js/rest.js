
// rest parameters
// function rest(x,y, ...numbers){
//     console.log(numbers)
//     console.log(x)
//     console.log(y)
//     total = 0;

//     for(const n of numbers){
//         total += n
//     }
//     return total;
// }

// const add = rest(1,3,5,8,10)
// console.log(add)

// rest parameters
function rest1(...odds){

    console.log(odds)
}
rest1(10,30,60);

// rest parameter

function rest2(a,b,...abs){
    console.log(abs)
    console.log(a)
    console.log(b)
    let total = 0

    for(let m of abs){
        total +=m
    }
    return  total

}

rest2(1,2,3,4,5)




// export default class User{
//     constructor(name,email){
//         this.name = name
//         this.email = email

//     }
// }


// export function personName(user2){
//     console.log(`your name is ${user2.name}`)
// }

// export function personName(user3){
//     console.log(`your name is ${user2.email}`)
// }