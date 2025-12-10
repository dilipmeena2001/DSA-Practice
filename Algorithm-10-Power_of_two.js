// function isPowerOfTwo(n){
//     if ( n < 1 ){
//         return false
//     }

//     while ( n > 1 ){
//         if ( n % 2 !== 0 ){
//             return false
//         }
//         n = n/2
//     }

//     return true
// }

// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(4))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(7))

// Big-O = O(log n)


/* ------------------------- Solution ------------------------------------------------- */

// function isPowerOfTwoBitwise(n){
//     if (n<1){
//         return false
//     }
//     return ( n & (n-1)) === 0
// }   

// console.log(isPowerOfTwoBitwise(2))
// console.log(isPowerOfTwoBitwise(4))
// console.log(isPowerOfTwoBitwise(5))
// console.log(isPowerOfTwoBitwise(7))

// Big-0 = O(1)