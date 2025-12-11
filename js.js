let a = 10;
let b = 20;
let c = "10";
let isStudent = true;
let hasLicense = false;

if (a == c) {
    console.log("Loose equality is true");
} else {
    console.log("Loose equality is false");
}

if (a === c) {
    console.log("Strict equality is true");
} else {
    console.log("Strict equality is false");
}

if (a != b) {
    console.log("Not equal is true");
} else {
    console.log("Not equal is false");
}

if (a !== c) {
    console.log("Strictly not equal is true");
} else {
    console.log("Strictly not equal is false");
}

if (a < b) {
    console.log("A is less than B");
} else if (a > b) {
    console.log("A is greater than B");
} else {
    console.log("A is equal to B");
}

if (a <= 10) {
    console.log("A is less than or equal to 10");
} else {
    console.log("A is greater than 10");
}

if (b >= 20) {
    console.log("B is greater than or equal to 20");
} else {
    console.log("B is less than 20");
}

if (a > 5 && b < 30) {
    console.log("AND operator is true");
} else {
    console.log("AND operator is false");
}

if (a > 20 || b < 30) {
    console.log("OR operator is true");
} else {
    console.log("OR operator is false");
}

if (!isStudent) {
    console.log("NOT operator is true");
} else {
    console.log("NOT operator is false");
}

let age = 18;
let canDrive = age >= 18 && hasLicense;

if (canDrive) {
    console.log("The person can drive");
} else {
    console.log("The person cannot drive");
}

let isRaining = false;
let isWeekend = true;

if (isRaining || isWeekend) {
    console.log("Stay indoors");
} else {
    console.log("Go outside");
}

let userRole = "admin";
let hasPermission = userRole === "admin" || userRole === "moderator";

if (hasPermission) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

let loginAttempt = "success";
let isActive = true;

if (loginAttempt === "success" && isActive) {
    console.log("Dashboard loaded");
} else {
    console.log("Login failed or account inactive");
}

let hour = 14;
let isDaytime = hour >= 6 && hour <= 18;

if (isDaytime) {
    console.log("It is daytime");
} else {
    console.log("It is nighttime");
}

let x = 0;
let y = 1;

if (x || y) {
    console.log("At least one is truthy");
} else {
    console.log("Both are falsy");
}

if (x && y) {
    console.log("Both are truthy");
} else {
    console.log("At least one is falsy");
}

let result = (a > 5) ? "Greater" : "Not greater";
console.log(result);

let result2 = (age < 16) ? "Child" : (age < 25) ? "Young Adult" : "Adult";
console.log(result2);

if (a < 5) console.log("A is small"); else console.log("A is large");