/**
Task

Implement a function named factorial that has one parameter: an integer, n.
It must return the value of n! (i.e., n factorial).

Input Format
Locked stub code in the editor reads a single integer, n, from stdin and passes it to a function named factorial.

Constraints

Output Format

The function must return the value of n!.
**/

function factorial(n){
    if(n === 0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}



//Another variant using ternary operators

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
