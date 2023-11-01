/* Special Pythagorean Triplet */

/* 
find the triplet using a random number generator function

Formula
a = m2 - n2
b = 2mn
c = m2 + n2
where m > n

*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateTriples(m, n){
    if(m > n) {
        let a = m*m - n*n
        let b = 2*m*n
        let c = m*m + n*n
        return [a, b, c]
    }
    return null
}

// console.log(generateTriples(getRandomInt(400), getRandomInt(400)))

let target = 1000
let sum = 0
let triplet = []
while (sum != target){
    triplet = generateTriples(getRandomInt(400), getRandomInt(400))
    
    if(triplet != null){
        sum = triplet.reduce((acc, curr) => acc + curr, 0)
    }else{
        sum = 0
    }
}

console.log('Triplet:', triplet)

const prod = triplet.reduce((acc, curr) => acc * curr)
console.log('Product: ', prod)


