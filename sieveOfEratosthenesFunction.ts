
// 1. Sieve of Eratosthenes
//    In mathematics, the sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.

//    A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//    The algorithm consists of creating a list of consecutive integers from 2 through n (2 <= n <= 2^64) and marking them off as prime (or composite)

//    Implement this algorithm in Javascript or TyeScript as a function `sieveOfEratosthenes(n: number)` that returns an array of all prime numbers up to (and including) `n`.

// Here is my implementation in typescript

function sieveOfEratosthenes(n: number) {
    let arr: number[] = [];
    // set limits
    if (n >= 2 && n <= Math.pow(2, 64)) {
        function isPrime(num: number) {
            for (var i:number = 2; i < num; i++) {
                // The modulus operator helps filter out multiples of the previous numbers in the loop
                if (num % i == 0) return false;
            }
            return true;
        }

        for (var i:number = 2; i <= n; i++) {
            if (isPrime(i)) arr.push(i);
        }
        return arr;
    } else return 'The value provided is out of range. Please provide a value between 2 and 2^64';
}