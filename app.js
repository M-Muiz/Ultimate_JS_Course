// var something = "spiderman";

// console.log(something)

// var num1 = 5;

// function sum(){ 
//     var num1 = 4;
//     return num1;

//     console.log(num1)
// }

// sum();
// console.log(num1)
// console.log(sum())


// Hoisting = using variable before declaring


// var a;

// console.log(a)

// a = 34;

// var a = 12 ;

// var b = a;

// b = b+2;
// console.log(b)
// console.log(a)


// var a = [1,2,3,4,5];

// var b = a;

// b.pop()

// console.log(a)
// console.log(b)


// () {} [] these are reference matlab ye copy kro aur inki value kahi pr bhi change kro to reflect main value me bhi hoga

// if(12> 13){
//     console.log("if is working")
// }
// else{
//     console.log("else working")
// }


// for(var i = 0; i < 12; i++){
//     console.log(i)
// }


// for(var i = 0; i < 12; i++){
//     console.log("For Loop!")
// }

// i = 0;

// while(i<30){
//     console.log(i);
//     i++
// }

// while(i<30){
//     console.log("While Loop!");
//     i++
// }

// i = 2;
// do{
//     console.log("Do Loop!")
// }
// while(i > 5)

// function hellobolo(){
//     console.log("Hello")
// }

// hellobolo()

// function sum(num1,num2){
//     console.log(num1 +num2)
// }

// sum(2,65)


// let arr = [23,24,25,26];
// console.log(arr)


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// console.log(arr)
// console.log(arr.push(9))
// console.log(arr)
// console.log(arr.pop(7))
// console.log(arr)
// console.log(arr.shift(2))
// console.log(arr)
// console.log(arr.unshift(0))
// console.log(arr)



// var blankobj = {};

// var obj = {
//     age: 22,
//     name: "Making Objects"
// }

// console.log(obj)


// let a = 9007199254740991n;
// a + 12n;
// console.log(a)


// console.log("5" + 1)


// {
// var x = 5;
// let y = 10;
// const z = 15;
// }
// console.log(x); 
// console.log(y); 
// console.log(z);



// const obj = {
//     name : "moiz"
// }
// obj.city = "karachi"
// console.log(obj)


// const arr = [1,2,3,4,5]
// arr.push(6)
// console.log(arr)

// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof 123n);


// hasId = false;

// if(hasId){
//     console.log("You have id")
// }
// else{
//     console.log("You don't have id")
// }

// age = 2;
// age > 19 ? console.log("You are men!") : console.log("You are kiddo!")


// let score = 80;
// let grade = score > 50 ? "Pass" : "Fail";
// console.log(grade)

// console.log("10" + 1);
// console.log("10" - 1);
// console.log(true + false);
// console.log(!!"Sheryians"); 


// let loggedIn = 1;
// let admin = 0;

// if(loggedIn && admin){
//     console.log("Admin Block!")
// }
// else if(loggedIn){
//     console.log("LoggedIn Block!")
// }
// else{
//     console.log("Please LogIn!")
// }

// let city = "karachi";

// switch (city){
//     case "karachi":
//         console.log("You live in karachi")
//         break;
//     case "lahore":
//         console.log("You live in lahore")
//         break;
//     case "ismalabad":
//         console.log("Your live in islamabad")
//         break;       
//     default:
//         console.log("City not found");    
// }

// function getVal(val) {
//     if (val <= 50) {
//         return console.log("a");
//     }
//     else if (val >= 50 && val <= 100) {
//         return console.log("b")
//     }
//     else {
//         return console.log("c")
//     }
// }

// getVal(43)

// function getVal(val) {
//     if (val < 25) return "A"
//     else if(val < 50) return "B"
//     else if(val < 75) return "C"
//     else return "D"
// }

// console.log(getVal(12))
// console.log(getVal(32))
// console.log(getVal(52))
// console.log(getVal(92))

/*

function getGrade(score) {
    let condition = score > 0 && score < 32 ? "Fail" : score > 32 && score < 59 ? "D" : score > 59 && score < 69 ? "C" : score > 70 && score < 79 ? "B" : score > 80 && score < 89 ? "A" : score > 90 && score < 100 ? "A-One" : "Invalid Marks";
    return condition;
}
console.log(getGrade(73))
console.log(getGrade(63))
console.log(getGrade(53))
console.log(getGrade(35))
console.log(getGrade(3))

function getGrade(score) {
    return score >= 0 && score <= 32 ? "Fail"
        : score <= 59 ? "D"
        : score <= 69 ? "C"
        : score <= 79 ? "B"
        : score <= 89 ? "A"
        : score <= 100 ? "A-One"
        : "Invalid Marks";
}

console.log(getGrade(73)); // B
console.log(getGrade(63)); // C
console.log(getGrade(53)); // D
console.log(getGrade(35)); // D
console.log(getGrade(3));  // Fail

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid Marks";
    } else if (score <= 32) {
        return "Fail";
    } else if (score <= 59) {
        return "D";
    } else if (score <= 69) {
        return "C";
    } else if (score <= 79) {
        return "B";
    } else if (score <= 89) {
        return "A";
    } else {
        return "A-One";
    }
}

*/



// function rps(user, computer){
//     if(user === computer) return "Draw";

//     if(user === "scissor" && computer === "paper") return "User Win";
//     if(user === "paper" && computer === "rock") return "User Win";
//     if(user === "rock" && computer === "scissor") return "User Win";

//     else return "Computer Win"

// }

// console.log(rps("paper", "scissor"))

// let sum = 0;
// for (let i = 1; i < 11; i++) {
//     sum += i
// }
// console.log(sum)


// for(let i =0; i < 51; i++){
//     if(i%3 == 0){
//      console.log(i, "Divisible by 3")
//     }
// }


// user_start_no = 10;
// user_end_no = 30;
// isPrime = false;



// for (let i = user_start_no; i <= user_end_no; i++) {
//     for (let j = 2; j <= user_end_no; j++) {
//         if (i % j == 0){
//             console.log(i,"Prime Number!")
//             break;
//         }
//     }
// }


// num = 6
// let factorial = 1;
// let factorialSum = 0;
// for (let i = num; i > 0; i--) {
//     factorial *= i
//     factorialSum += factorial
// }

// console.log(factorial)
// console.log(factorialSum)



// function abcd() {
//     return function(){
//         console.log("high order function")
//     }
// }

// abcd()()


// let a = function(val){
//    return val + val*val
// }

// let b = a(8)
// console.log(b)


// function abd(val){
//     val()
// }

// abd(function(){console.log("This is First Class Function!")})


// function abcd(){
//     let a = 20;
//     return function(){
//         console.log(a)
//     }
// }

// abcd()()


// function counter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let c = counter();

// c(); 
// c(); 
// c();
// c();


// 06-08-2026


// function abcd(...val) {
//     console.log(val)
// }

// abcd(1, 2, 3, 4, 5, 6)

// let arrowFnc = (name="moiz")=>{
//     console.log("Hello", name)
// }

// arrowFnc("Ashhad")


// function sum(...vals) {
//     let sum = 0;
//     for (let i = 0; i < vals.length; i++) {
//         sum+=vals[i];     
//     }
//     console.log(sum)
// }

// sum(2,4,3,5,6,7,23);


// let arr= [1,2,3,5,36,6,4,7,8,9];

// function evenNum (a){
//     for(let i =0; i<a.length; i++){
//         if(a[i]%2==0 ){
//             console.log(a[i])
//         }
//         console.log("Odd Number!")
//     }
// }

// evenNum(arr)

// (function () {
//     console.log("Welcome")
// })();







// function disCal(price){
//     return price/5
// }

// function discount(a){
//     let aa = disCal(a)
//     return aa
// }

// console.log(discount(25))


// function discountCalculator(discount) {
//     return function discountedprice(price) {
//         return price - (price * discount / 100)
//     }
// }

// let discountPercent = discountCalculator(20);

// console.log(discountPercent(500))


// function abcd(val) {
//     val()
// }

// abcd(function () {
//     console.log("hey")
// })

// PRACTICING COLUSERS **********************************

/*

function abcd() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let counter = abcd();
let counter2 = abcd();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter2())
console.log(counter())


function passwordChecker(pass) {
    let password = "august";
    return function () {
        if (pass === password) return "Correct Password!"
        return "Wrong Password!"
    }
}

let wrongPass = passwordChecker("july")
let correctPass = passwordChecker("august")

console.log(wrongPass())
console.log(correctPass())



function bankMangment(b) {
    let balance = b;
    let history = [{
        status: "BankBalance Before Transactions",
        balance
    }];
    let deposit = function (d) {
        balance += d;
        history.push({
            balance,
            status: "Deposit",
            depositedAmount: d,
            remaningBalance: balance
        });
        return `${balance} Deposited Amount!`;
    };
    let withdraw = function (w) {
        balance -= w;
        history.push({
            balance,
            status: "Withdrawl",
            withdrawalAmount: w,
            remaningBalance: balance
        });
        return `${balance} Withdraw Amount!`;
    };
    let getBalance = function () {
        return balance;
    }
    function transactionHistory() {
        return history;
    }
    return { getBalance, deposit, withdraw, transactionHistory }
}

let account = bankMangment(3000);

console.log(account.withdraw(500));
console.log(account.deposit(200));
console.log(account.getBalance());
console.log(account.transactionHistory());

*/


// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = arr.forEach(function (val) {
//     console.log(val * val)
// })
// console.log(newArr)


// let arr = [2, 6, 8, 22]

// let newArr = arr.every(function (val) {
//     return val % 2 == 0
// })

// console.log(newArr)


// let fullName = ["Moiz", "Siddiqui"];

// let [name,lastName] = fullName;

// console.log(name, lastName)

// -------------------------------------------------------------------------------------------

// let arr = [2,4,5,7,8,10,12,20];

// let newArr = arr.map(function(val){
//     return val*val
// });


// let arr = [2,3,6];

// let newArr = arr.map(val=>{
//     return val + (val *18/100)
// });

// let fruits = ["mango", "apple","banana"];

// fruits.forEach(val=>{
//     console.log(val)
// })


// let newArr = fruits.map((val)=>{
//     return val.toUpperCase()
// });                                         


// let arr = [2, 4, 5, 7, 8, 10, 12, 20];
// let newArr = arr.filter(val => {return val > 15})


// const marks = [80, 90, 45, 60, 100]; 

// let passStudents = marks.every(val=>{return val>50})
//console.log(passStudents) // The output will be false becasuse one student mark is below than 50 and every check that every element of array meet should meet the given statment


// const marks = [30, 40, 90, 20];
//  let passStudents = marks.some(val=>{return val>50})
// console.log(passStudents) Its the oppossite of every() method;

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Ahmed", age: 17 },
//   { name: "Sara", age: 25 }
// ];


// let abc= users.filter(obj =>{
//     return obj.age>18
// });

// console.log(abc)

// let abc = users.map(val=>{
//     return val.name
// });


// const numbers = [10, 18, 15, 20, 25];

// console.log(numbers.find(val => { return val > 18 }))



// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ahmed" },
//   { id: 3, name: "Sara" }
// ];

// let abc = users.find(val=>{
//     return val.id === 2
// })
// console.log(abc)

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Ahmed" },
//   { id: 3, name: "Sara" }
// ];

// let a = users.findIndex(val=>{
//     return val.name === "Sara"
// });


// const numbers = [10, 20, 30, 40];

// console.log(numbers.reduce(val => { { return val += val } }));

// const numbers = [2, 3, 4];
// console.log(numbers.reduce((a,val) => { { return a*val } }));


// const cart = [
//     { name: "Phone", price: 50000 },
//     { name: "Laptop", price: 120000 },
//     { name: "Mouse", price: 2000 }
// ];


// let abc = cart.map(val => {
//     return val.price
// })

// let def = abc.reduce((a, val) => { 
//     return val += a
//  })

// console.log(def)