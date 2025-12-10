//  Wrong Logic

function isPowerOfTwo(n){
    if(n===1 || n%2 === 0) return true

    return false
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(7))

// Issues with the Function:
// The function returns true if n is 1 or divisible by 2.
// But this logic is incorrect because:
// For example, n = 6 (which is not a power of two) is divisible by 2, so the function would incorrectly return true.
// Similarly, n = 8 (which is a power of two) would work correctly, but the logic is flawed for other values







