function addNumber(a, b) {
    // console.log(a + b);
}
addNumber(5, 10); // Output: 15



//calculate card

function calculateCard(...cardNumber) {
    return cardNumber
}
// console.log(calculateCard(123,43,5,546,6,5656)); // Output: 123456789\

const user = {
    name: "john",
    age: 30,
    
}

function userInfo(anyobject){
    // console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}`);
}
userInfo(user); // Name: john, Age: 30

const  myarray = [1, 2, 3, 4, 5];

function arrayInfo(anyarray){
    return anyarray[1]
}
console.log(arrayInfo(myarray)); // Output: 2
