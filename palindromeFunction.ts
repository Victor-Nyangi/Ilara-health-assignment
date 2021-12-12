// 3. Palindrome
//    A palindrome is any string that can be reversed and still be the same.
//    An example of one is 'radar', since it is spelled the same even after being reversed.

//    Implement this algorithm in Javascript or TyeScript as a function `palindrome(str: string)` that takes a string and returns true if the string is a palindrome.

// Implementing in Javascript
    function palindrome(str: string) {

        let n: number = str.length;
        // Checking if a value has been provided
        if (n == 0) {
            console.log("No string has been provided. Please provide a string");
            return;
        }

        function isPalRec(str: string, s:number, e:number) {
            // If there is only one character, this is a palindrome
            if (s == e) return true;
            // If first and last characters do not match, the string is not a palindrome
            if ((str.charAt(s)) != (str.charAt(e))) return false;
            // For 3 or more characters, check if middle substring is also palindrome by using a recursive function.
            if (s < e + 1) return isPalRec(str, s + 1, e - 1);

            return true;
        }
        console.log(`${isPalRec(str, 0, n - 1) ? "True" : "false"}`)
    }