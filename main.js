// AND OR function
let a = true;
let b = false;

console.log(a && getName('ram'));
console.log(a || getName('ram'));

function getName (name) {
return name;
}
console.log (getName('ram'));

// Template Literals
let name1 = "Macharla";
let name2 = "LeelaRam";

console.log (name1 + " " + name2);
console.log (`${name1} ${name2} is a good and intelligent boy`);

// Ternary Operator
let age=18;
if (age>=18){
    console.log("You can vote");
}
else {
    console.log ("you cannot vote");
}

let recipe = false;

function recipeOne (recipeOneName){
    return recipeOneName;
}

function recipeTwo (recipeTwoName){
    return recipeTwoName;
}

if (recipe){
    console.log(recipeOne("Biryani"));
}
else {
    console.log (recipeTwo("Parotta"));
}

recipe ? console.log(recipeOne("Biryani")) :  console.log (recipeTwo("Parotta")); // condition ? true : false

// Find, Filter, some, every, includes, indexOf, findIndex, map

let personArray = [
    {
        name: "person1",
        age: 10,
        country: "india",
    },
    {
        name: "person01",
        age: 10,
        country: "india",
    },
    {
        name: "person2",
        age: 20,
        country: "russia",
    },
    {
        name: "person3",
        age: 30,
        country: "israel",
    },
];

// Find
let getPersonFromIndiaUsingFind = personArray.find((Person, index) => {
    return Person.country === "india";
});

console.log(getPersonFromIndiaUsingFind);

// Filter
let getPersonFromIndiaUsingFilter = personArray.filter((singlePerson, index) => {
    return singlePerson.country === "india";
});

console.log(getPersonFromIndiaUsingFilter);

// Some
let getPersonUsingSome = personArray.some((singlePerson) => {
    return singlePerson.age > 40;
});

console.log(getPersonUsingSome);

//Every

let getPersonValueUsingEvery = personArray.every((singlePerson) =>
{
    return singlePerson.age >5;
});

console.log(getPersonValueUsingEvery);

// Includes

let classStudents = ['Emman', 'Eswar', 'Mohan'];
console.log(classStudents.includes('Emman'));

// Indexof

console.log(classStudents.indexOf('Emman'));

// FindIndex

let getPersonIndexUsingFindIndex = personArray.findIndex((singlePerson) =>{
    return singlePerson.age === 30;
});

console.log(getPersonIndexUsingFindIndex);

// Map

let getPersonInfoUsingMap = personArray.map((singlePerson, index) => {
    return `${singlePerson.name} age is ${singlePerson.age} and he is from ${singlePerson.country}`;
});

console.log(getPersonInfoUsingMap);

// Default parameters 
function mulOfTwoNumber (num1 = 3, num2 = 1) {
    return num1 * num2;
}

console.log(mulOfTwoNumber(2,4)) // Passing values as parameters
console.log(mulOfTwoNumber()) // no parameters passed it takes the initialised value

// Spread
const simArray1 = [2,3,4];
const simArray2 = [4,6,8];
console.log(...simArray1); // simple spreading
console.log([...simArray1]); // spreading inside the index
console.log(...simArray1, ...simArray2); // spreading both the array
console.log(...simArray1, simArray2); // spreading both the array that has ... and index for the array elements that does'nt have ...
console.log([...simArray1, ...simArray2]); // spreading inside the index for both the array
console.log([...simArray1, ...simArray2, 10000]); // spreading the non assigned elements too

// Rest

function getInfo(a,b,c,d,e,f,g,h,i,j) {
    console.log(a,b,c,d,e,f,g,h,i,j);
    return "";
}

console.log(getInfo(1,2,3,4,5,6,7,8,9,11));

function getInfos(a,b, ...c) { // rest of the values will be assigned into the 'c' itself
    console.log(a,b,c);
    return "";
}

console.log(getInfos(1,2,3,4,5,6,7,8,9,11));

// Async and Await

// Normal function
function fn(message) {
    return message;
}
console.log(fn("Hello"));

// Async function
async function func(message) {
    return message;
}
console.log(func("Hello"));

// Then
async function funct() {
    return "";
}
console.log(funct());
funct().then((msg)=>console.log(msg));

// Await


async function asyncFunction() {
    console.log("hi..");
    res = await personArray;
    console.log(res);
    console.log("Bye..");
}

asyncFunction()

// try and catch

async function asyncFunctions() {
    try{
    console.log("hi..");
    resc = await personArray;
    console.log(resc);
    console.log("Bye..");
}
 catch(err) {
    console.log("Error Occured");
 }
}

asyncFunctions()