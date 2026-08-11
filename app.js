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


/*

// ********************************************** AI PRACTICE QUESTIONS SECTION *************************************************************

// Q1
let arr = [2,4,5,7,8,10,12,20];

let newArr = arr.map(function(val){
    return val*val
});

// Q2
let arr = [2,3,6];

let newArr = arr.map(val=>{
    return val + (val *18/100)
});

// Q3
let fruits = ["mango", "apple","banana"];

fruits.forEach(val=>{
    console.log(val)
})

// Q4
let newArr = fruits.map((val)=>{
    return val.toUpperCase()
});                                         

// Q5
let arr = [2, 4, 5, 7, 8, 10, 12, 20];
let newArr = arr.filter(val => {return val > 15})

// Q6
const marks = [80, 90, 45, 60, 100]; 

let passStudents = marks.every(val=>{return val>50})
console.log(passStudents) // The output will be false becasuse one student mark is below than 50 and every check that every element of array meet should meet the given statment

// Q7
const marks = [30, 40, 90, 20];
 let passStudents = marks.some(val=>{return val>50})
console.log(passStudents) // Its the oppossite of every() method;

// Q8
const users = [
  { name: "Ali", age: 20 },
  { name: "Ahmed", age: 17 },
  { name: "Sara", age: 25 }
];

let abc= users.filter(obj =>{
    return obj.age>18
});

console.log(abc)

// Q9
let abc = users.map(val=>{
    return val.name
});


// Q10
const numbers = [10, 18, 15, 20, 25];

console.log(numbers.find(val => { return val > 18 }))


// Q11
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" }
];

let abc = users.find(val=>{
    return val.id === 2
})
console.log(abc)


// Q12
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" }
];

let a = users.findIndex(val=>{
    return val.name === "Sara"
});

// Q13
const numbers = [10, 20, 30, 40];

console.log(numbers.reduce(val => { { return val += val } }));

//  Q14
const numbers = [2, 3, 4];
console.log(numbers.reduce((a,val) => { { return a*val } }));


// Q15
const cart = [
    { name: "Phone", price: 50000 },
    { name: "Laptop", price: 120000 },
    { name: "Mouse", price: 2000 }
];


let abc = cart.map(val => {
    return val.price
})

let def = abc.reduce((a, val) => { 
    return val += a
 })

console.log(def);


// Q16
const fruits = ["Apple", "Banana", "Orange"];


console.log(fruits.includes("Banana"))

//  Q17
console.log(fruits.includes("Mango"))


//  Q18
const numbers = [1,2,3,4,5,6,7,8,9,10];

let evenNums = numbers.filter(a => {
    return a % 2 === 0;
})

console.log(evenNums.map(num => { return num * num }));


//  Q19
const students = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 95 },
    { name: "Bilal", marks: 60 }
];


const passedStudents = students.filter(a => {
    return a.marks > 50;
})

console.log(passedStudents)


//  Q20

// console.log(passedStudents.map(val=>{
//     return val.name
// }))


const products = [
    { name: "Phone", price: 50000, inStock: true },
    { name: "Laptop", price: 120000, inStock: false },
    { name: "Mouse", price: 1500, inStock: true },
    { name: "Keyboard", price: 2500, inStock: true }
];

const stock = products.filter(a=>{
    return a.inStock;
}).map(product=>{
    return product.name
}).sort();

console.log(stock)



const employees = [
    { name: "Ali", salary: 50000, department: "IT" },
    { name: "Sara", salary: 70000, department: "HR" },
    { name: "Ahmed", salary: 60000, department: "IT" },
    { name: "Bilal", salary: 45000, department: "Finance" },
    { name: "Ayesha", salary: 90000, department: "IT" }
];


const it = employees.filter(a => {
    return a.department === "IT"
})
const it_names = it.map(name => {
    return name.name
})
const it_salary = it.reduce((a,b)=>{
    return a + b.salary
},0)
console.log(it)
console.log(it_names)
console.log(it_salary)




const students = [
    { name: "Ali", marks: 80 },
    { name: "Ahmed", marks: 45 },
    { name: "Sara", marks: 95 },
    { name: "Bilal", marks: 60 },
    { name: "Ayesha", marks: 100 }
];

let text = document.getElementById("text");
let listContainer = document.getElementById("something");

text.addEventListener("change", (e) => {
    let val = e.target.value.toLowerCase();
    listContainer.innerHTML = "";

    let result = students.map(v => {
        return v.name.toLowerCase();
    }).filter(a => {
        return a.includes(val);
    });
    if (result.length > 0) {
        result.forEach(e => {
            let li = document.createElement("li");
            li.textContent = e
            listContainer.appendChild(li)
        })
        e.target.value = "";
    } else {
        let li = document.createElement("li");
        li.textContent = "Not Found!"
        listContainer.appendChild(li)
        e.target.value = "";
    }
});


const products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "Mobile",
        brand: "Apple",
        price: 150000,
        rating: 4.8,
        inStock: true
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "Mobile",
        brand: "Samsung",
        price: 180000,
        rating: 4.7,
        inStock: true
    },
    {
        id: 3,
        name: "Redmi Note 13",
        category: "Mobile",
        brand: "Xiaomi",
        price: 55000,
        rating: 4.4,
        inStock: true
    },
    {
        id: 4,
        name: "OnePlus 12",
        category: "Mobile",
        brand: "OnePlus",
        price: 145000,
        rating: 4.6,
        inStock: false
    },
    {
        id: 5,
        name: "MacBook Air M2",
        category: "Laptop",
        brand: "Apple",
        price: 250000,
        rating: 4.9,
        inStock: true
    },
    {
        id: 6,
        name: "Dell Inspiron 15",
        category: "Laptop",
        brand: "Dell",
        price: 145000,
        rating: 4.3,
        inStock: true
    },
    {
        id: 7,
        name: "HP Pavilion 14",
        category: "Laptop",
        brand: "HP",
        price: 135000,
        rating: 4.5,
        inStock: true
    },
    {
        id: 8,
        name: "Lenovo ThinkPad E14",
        category: "Laptop",
        brand: "Lenovo",
        price: 160000,
        rating: 4.6,
        inStock: false
    },
    {
        id: 9,
        name: "Nike Air Max",
        category: "Shoes",
        brand: "Nike",
        price: 25000,
        rating: 4.7,
        inStock: true
    },
    {
        id: 10,
        name: "Adidas Ultraboost",
        category: "Shoes",
        brand: "Adidas",
        price: 30000,
        rating: 4.8,
        inStock: true
    },
    {
        id: 11,
        name: "Puma Running Shoes",
        category: "Shoes",
        brand: "Puma",
        price: 18000,
        rating: 4.2,
        inStock: true
    },
    {
        id: 12,
        name: "Nike Revolution 6",
        category: "Shoes",
        brand: "Nike",
        price: 15000,
        rating: 4.4,
        inStock: false
    },
    {
        id: 13,
        name: "Sony WH-1000XM5",
        category: "Headphones",
        brand: "Sony",
        price: 85000,
        rating: 4.9,
        inStock: true
    },
    {
        id: 14,
        name: "AirPods Pro 2",
        category: "Headphones",
        brand: "Apple",
        price: 65000,
        rating: 4.8,
        inStock: true
    },
    {
        id: 15,
        name: "Galaxy Buds 2 Pro",
        category: "Headphones",
        brand: "Samsung",
        price: 45000,
        rating: 4.6,
        inStock: true
    },
    {
        id: 16,
        name: "JBL Tune 760NC",
        category: "Headphones",
        brand: "JBL",
        price: 22000,
        rating: 4.3,
        inStock: false
    },
    {
        id: 17,
        name: "Apple Watch Series 9",
        category: "Smart Watch",
        brand: "Apple",
        price: 95000,
        rating: 4.8,
        inStock: true
    },
    {
        id: 18,
        name: "Galaxy Watch 6",
        category: "Smart Watch",
        brand: "Samsung",
        price: 75000,
        rating: 4.6,
        inStock: true
    },
    {
        id: 19,
        name: "Mi Band 8",
        category: "Smart Watch",
        brand: "Xiaomi",
        price: 12000,
        rating: 4.4,
        inStock: true
    },
    {
        id: 20,
        name: "Casio G-Shock",
        category: "Watch",
        brand: "Casio",
        price: 35000,
        rating: 4.7,
        inStock: true
    }
];


const text = document.getElementById("text");
const dropdown = document.getElementById("myDropdown");
const container = document.getElementById("productContainer");
let isStock = false;
let stockButton = document.getElementById("stock").addEventListener("click", function () {
  isStock = !isStock;
  console.log(isStock)
});

function getProductYouWant() {
    container.innerHTML= "";
    let name = text.value.toLowerCase();
    let category = dropdown.value;

    let result = products.filter(b => {
        if (!category && !name) {
            return b;
        } else if (!name && category) {
            return b.category.includes(category);
        } else if (name && !category) {
            return b.name.toLocaleLowerCase().includes(name);
        } else {
            return b.name.toLocaleLowerCase().includes(name) && b.category.includes(category)
        }
    });


    result.forEach(product => {
         container.innerHTML += `
        <div class="product-card">
            <div class="product-brand">${product.brand}</div>

            <h2>${product.name}</h2>

            <span class="product-category">
                ${product.category}
            </span>

            <div class="product-price">
                Rs. ${product.price.toLocaleString()}
            </div>

            <div class="product-rating">
                ⭐ ${product.rating}
            </div>

            <div class="stock ${product.inStock ? "in-stock" : "out-stock"}">
                ${product.inStock ? "✓ In Stock" : "✕ Out of Stock"}
            </div>
        </div>
    `;
    })

    console.log("Result", result)

    console.log("Name:", name);
    console.log("Category:", category);
}

text.addEventListener("change", getProductYouWant);
dropdown.addEventListener("change", getProductYouWant);
// let val = e.target.value.toLowerCase();
// listContainer.innerHTML = "";


// let result = products.map(a => {
//     return a;
// }).filter(b => {
//     console.log(b.category)
//     return b.category === "Mobile"
// })
// console.log(result)
// });


// let result = products.map(v => {
//     return v.name.toLowerCase();
// }).filter(a => {
//     return a.includes(val);
// });



















// if (result.length > 0) {
//     result.forEach(e => {
//         let li = document.createElement("li");
//         li.textContent = e
//         listContainer.appendChild(li)
//     })
//     e.target.value = "";
// } else {
//     let li = document.createElement("li");
//     li.textContent = "Not Found!"
//     listContainer.appendChild(li)
//     e.target.value = "";
// }



Change vs code font and colour theme

// Starting Objects


let obj = {
    name: "khan",
    age: 25,
    food: ["Biryani", "Karahi"]
};

console.log(obj.food)

let aa = "name"

console.log(obj[aa])


let data= {
    name:"simran",
    info:{
        pin: 334,
        location:{
            lat: 24.5,
            lan: 12.5
        }
    }
}

let {lan,lat} = data.info.location;




let info = {
    name: "John",
    age: 34,
    city: "karachi"
}

for(let key in info){
    console.log(key, info[key])
}


let obj = {
    name: "John",
    age: 34,
    city: "karachi"
}

let obj2 = {...obj}
console.log(obj2)

let obj3 = Object.assign({}, obj)
console.log(obj3)


let obj = {
    name: "John",
    age: 34,
    email: "test@test.com",
    info: {
        city: "karachi"
    }
};


let obj2 = {...obj}
obj2.info.city = "Sindh"

Deep Clone

let obj2 = JSON.parse(JSON.stringify(obj));

obj2.info.city = "Sindh"


const user = {
    "first-name": "john"
}

let {"first-name": newVariable} = user

let obj = {
    name: "John",
    age: 34,
    city: "karachi"
}

Object.entries(obj).forEach(v=>{
    console.log(v[0], ": ", v[1])
})
*/

const person = {};
console.log(person?.profile?.name)