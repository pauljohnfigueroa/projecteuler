
let t0 = performance.now()

// Test if the number is a prime number
function isPrime(number){

    let count = 0
    

    for(let i = 1; i <= number; i++){
        number%i === 0 ? count++ : count
        if(count > 2) { 
            break
        } 
    }   
    return count > 2 ? false : true
}

function findPrime(target){
    
    let count = 0
    let testnum = 2

    while(count!=target){
        isPrime(testnum) ? count++ : count
        testnum++
    }

    return testnum - 1
}

console.log(`The target prime number is ${findPrime(10001)}`)

let t1 = performance.now()
console.log('Time is ' + (t1 -t0) + 'ms.')