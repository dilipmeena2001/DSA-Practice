function isPrime(n){
    if(n>1){
        if(n===2) return true
        for (let i=2;i<n;i++){
            if(n%i === 0 ) return false
        }
        return true
    }

    return false
}

console.log(isPrime(2))



