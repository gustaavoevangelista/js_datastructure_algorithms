//give an integer "n", find the factorial of that integer
//factorial is calculated by n * (n-1) *  ... *2 * 1

function factorial(n){
    let result = 1; //runs 1 time

    for(let i = 2; i <= n; i++){
        result *= i //runs n times
    }

    return result; //runs 1 time
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(5));

//Big-O = O(n + 2) -> when n is to big, we can consider only n, because the "+2" would be indifferent
//Big-O = O(n) -> 1 loop, so it's linear (n)
//number of times the line 8 executes in the worst case scenario