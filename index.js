let age1 = 20;
let age2 = 25;

if (age1 === age2) {
    console.log("same age");
} else if (age1 > age2) {
    console.log("First is older");
} else {
    console.log("Second is older");
}


let salary1 = 3500;
let salary2 = 4200;

if (salary1 === salary2) {
    console.log("Same salary");
} else if (salary1 > salary2) {
    console.log("First earns more");
} else {
    console.log("second earns more")
}




let str1 = "Hello";
let str2 = "Hello";

if (str1.toLowerCase() === str2.toLowerCase()) {
    console.log("Iddedntical ignoring case")
} else {
    console.log("not identical")
}


let temperature = 30;

if (temperature === 30) {
    console.log("too hot")
} 
else if (30 <= temperature >= 20) {
    console.log("perfect")
} 
else if (19 <= temperature >= 10) {
    console.log("a bit chilly")
} 
else if (temperature === 10) {
    console.log("Cold")
}



let login = "Admin";
let password = "";

if (login === "Admin") {
    if (!password) {
        console.log("Canceled");
    }
} else if (!login) {
    console.log("Canceled");
} else {
    console.log("Unknown user");
}


let number = 10;

if (typeof number !== "number" || isNaN(number)) {
    console.log("Invalid input");
} else {
    console.log(number % 2 === 0 ? "Even number" : "Odd number");
}


let price = 80;

if (typeof price !== "number" || isNaN(price)) {
    console.log("Invalid input");
} else if (price < 50) {
    console.log("No discount");
} else if (price <= 100) {
    console.log("10%");
} else {
    console.log("20%");
}
