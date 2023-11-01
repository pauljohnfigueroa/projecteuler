const isPrime = number => {

    let count = 0
    

    for(let i = 1; i <= number; i++){
        number%i === 0 ? count++ : count
        if(count > 2) { 
            break
        } 
    }   
    return count > 2 ? false : true
}
