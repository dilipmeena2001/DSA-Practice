
// Fibonacci Sequence

// let fibonacciSequenc = (n) => {
//   let arr = [0, 1];

//   if (arr.length < n) {
//     for (let i = 2; arr.length < n; i++) {
//       arr.push(arr[i - 2] + arr[i - 1]);
//     }
//   }

//   return arr;
// };

// console.log(fibonacciSequenc(3));

/* ------------------------------------------------------------------------------------------------ */ 

// function factorial(n){
//     if(n == 0 || n==1) return 1
//     let fac = 1
//     for (let i = n; i>0; i--){
//         fac*= i
//     }
//     return fac
// }

// console.log(factorial(0));


/* ------------------------------------------------------------------------------------------------ */ 



// function primeCheck(n){
//     let prime = true
//     for(let i=2; i<n; i++){
//         if(n==2) continue
//         if(n%i == 0){
//             prime = false
//         }
//     }
//     console.log(`${n} is ${prime ? "a prime number" : "not a prime number"}`)
// }

// primeCheck(2)
// primeCheck(4)
// primeCheck(5)
// primeCheck(10)
// primeCheck(102)

/* ------------------------------------------------------------------------------------------------ */ 

                    // Power Of Two

// function isPowerOfTwo(n){
//     if(n===1 || n%2 === 0) return true

//     return false
// }

// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(4))
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(7))

// Issues with the Function:
// The function returns true if n is 1 or divisible by 2.
// But this logic is incorrect because:
// For example, n = 6 (which is not a power of two) is divisible by 2, so the function would incorrectly return true.
// Similarly, n = 8 (which is a power of two) would work correctly, but the logic is flawed for other values


/* ------------------------------------------------------------------------------------------------ */ 

/*                               Recursive Factorial                                                */

// function recursiveFactorial(n){
//     if(n<2){
//         return 1
//     }

//     return n * recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(0))
// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(5))

/* ------------------------------------------------------------------------------------------------ */ 

/* -----------------------------------------Linear Search------------------------------------------ */ 


let arr = [-5,2,10,4,6]
function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target) return i
    }

    return -1
}

console.log(linearSearch(arr,10))
console.log(linearSearch(arr,6))
console.log(linearSearch(arr,20))
console.log(linearSearch(arr,-5))

/* ------------------------------------------------------------------------------------------------ */ 










