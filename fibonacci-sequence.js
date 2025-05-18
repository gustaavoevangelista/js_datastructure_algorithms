//give a number "n", find the first 'n' elements of the fibonacci sequence
// The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence commonly starts 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

function fibonacci(n) {
    const fibonacciSequence = [0,1]; //runs 1 time

    for (let i = 2; i <= n; i++) {
        fibonacciSequence[i] = fibonacciSequence[i-1] + fibonacciSequence[i-2]; // runs n times
    }
    return fibonacciSequence; // runs 1 time
}


console.log(fibonacci(2));
console.log(fibonacci(7));

//Big-O = O(n + 2) -> when n is to big, we can consider only n, because the "+2" would be indifferent
//Big-O = O(n) -> 1 loop, so it's linear (n)
//number of times the line 8 executes in the worst case scenario
