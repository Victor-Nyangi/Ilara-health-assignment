// 2. Least Common Multiple
//    In mathematics, the least common multiple (LCM) of two or more integers is the smallest positive integer that is divisible by each of the given integers.

//    For example, the LCM of 4 and 6 is 12.

//    Implement this algorithm in Javascript or TyeScript as a function `leastCommonMultiple(n1: number, n2: number)` that takes two integers returns the LCM of the given integers.


function leastCommonMultiple(n1: number, n2: number) {
    // find the minimum value of the 2
    let min: number = (n1 > n2) ? n1 : n2;

    while (true) {
        // If min is a multiple of both values, loop ends if not min is incremented and the check is done again, stoping only when the condition is satisfied
        if (min % n1 == 0 && min % n2 == 0) {
            console.log(`The LCM of ${n1} and ${n2} is ${min}`);
            break;
        }
        min++;
    }
}