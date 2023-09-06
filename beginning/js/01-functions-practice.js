//STEP 1
function halfNumber(number){

return `Half of ${number} is ${number/2}`;
}
//STEP 2
function squareNumber(number){

    return `The result of squaring the number ${number} is ${Math.pow(number, 2)}.`;
    }
    
//STEP 3
function percentOf(num1, num2){

    return `${num1} is ${num1/num2 *100}% of ${num2}`;
    }
    
//STEP 4
function findModules(num1, num2){
    var modules = num2%num1;
    return `${modules} is the modules of ${num1} and ${num2}`;
    }
//STEP 5




console.log(halfNumber(5));

console.log(squareNumber(5));

console.log(percentOf(5, 10));

console.log(findModules(4, 10));