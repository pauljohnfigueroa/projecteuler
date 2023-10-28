/* 
By listing the first six prime numbers: 2,3,5,7,11 and 13, we can see that the 6th prime is 13.
What is the 10,001st prime number? 
*/

/* 
What is a prime number?
*/

const TARGET = 10001
let counter = 0
let number = 1

// Test if the number is a prime number
function isPrime(number){
    let count = 0
    for(let i = 1; i <= number; i++){
        // if there is no remainder it means that we have found a factor, so we increment the counter by one
        number%i === 0 ? count++ : count
        // no need to loop through all numbers as prime numbers has only two factors, one and itself
        if(count > 2) { 
            break
        } 
    }
    return count > 2 ? `${number} is not prime` : `${number} is prime`
}

console.log(isPrime(4))

// use recursive function
function prime(){
    // base case - stop
    if(counter === TARGET){
        return number
    }

    // recursive case
    counter++
    prime()
}

prime()

console.log('Counter', counter)

