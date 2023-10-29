/* 
By listing the first six prime numbers: 2,3,5,7,11 and 13, we can see that the 6th prime is 13.
What is the 10,001st prime number? 
*/

/* 
What is a prime number?
    A whole number greater than 1 that cannot be exactly divided by 
    any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11).
*/

let tracker = 0 // prime numbers found
let testnum = 2 // test each integer starting starting from 2

// Test if the number is a prime number
function isPrime(number){

    let count = 0
    let t0 = performance.now()

    for(let i = 1; i <= number; i++){
        // if there is no remainder it means that we have found a factor, 
        // so we increment the counter by one
        number%i === 0 ? count++ : count
        
        // no need to loop through all numbers as prime numbers 
        // has only two factors, one and itself
        if(count > 2) { 
            break
        } 
    }
    let t1 = performance.now()
    console.log('Time is ' + (t1 -t0) + 'ms.')
    // return count > 2 ? `${number} is not prime` : `${number} is prime`
    return count > 2 ? false : true
}


// use recursive function
function prime(target){
    // base case - stop
    if(tracker === target){
       // console.log('base case')
        console.log(`The target prime number is ${testnum - 1}`)
        return 
    }

    // recursion
    isPrime(testnum) ? tracker++ : tracker
    // console.log(target, tracker, testnum)
    testnum++
   // console.log(tracker)
    prime(target)
}

// console.log(isPrime(7927))
prime(7)
