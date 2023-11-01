/* Problem 9: Special Pythagorean Triplet */

/* 
Reference
https://www.youtube.com/watch?v=n6vL2KiWrD4
Formula
    a = m2 - n2
    b = 2mn
    c = m2 + n2
    where m > n

    Find the triplet using a random number generator function
*/

// Generate random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Find a combination that will yield the 
// target value using random number generator
function generateTriples(m, n){
    if(m > n) {
        let a = m*m - n*n
        let b = 2*m*n
        let c = m*m + n*n
        return [a, b, c]
    }
    return null
}

// Test targets
// (91, 60, 109) => sum: 260
// (140, 171, 221) => sum: 532
let target = 1000
let sum = 0
let triplet = []

// find the triple that has a sum equal to "target"
while (sum != target){
    triplet = generateTriples(getRandomInt(target), getRandomInt(target))
    
    triplet != null 
        ? sum = triplet.reduce((acc, curr) => acc + curr, 0)
        : sum = 0
    
}

const prod = triplet.reduce((acc, curr) => acc * curr)
console.log('========================================')
console.log('Triplet:', triplet)
console.log('Sum: ', sum)
console.log('Product: ', prod)
console.log('========================================')