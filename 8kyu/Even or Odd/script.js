// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// solve 
function evenOrOdd(number) {
    if (number % 2) {
        return "Odd";
    } else {
        return "Even";
    }
}

// or

function evenOrOdd(number) {
    return number % 2 === 0 ? "even" : "Odd";
}
