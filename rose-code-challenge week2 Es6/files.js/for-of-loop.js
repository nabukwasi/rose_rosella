
// for of loop 

const loopNumber = [4,9,8,3,21]

for(const f of loopNumber){


    console.log(f)
}


// for of  loop 
function rest2(d,f,...abs){
    
    let total = 0

    for(let m of abs){
        total +=m
    }
    return  total

}

let result = rest2(2,4,6,8)
console.log(result)

// for of loop

let sum = 0;
for(let u of loopNumber){

    sum+=u
    sum++
    console.log(sum)
}