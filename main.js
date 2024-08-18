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
let getPersonFromIndiaUsingFind = personArray.find((singlePerson, index) => {
    return singlePerson.country === "india";
});

console.log(getPersonFromIndiaUsingFind);

// Filter
let getPersonFromIndiaUsingFilter = personArray.filter((singlePerson, index) => {
    return singlePerson.country === "india";
})

console.log(getPersonFromIndiaUsingFilter);

// Some
let getPersonUsingSome = personArray.some((singlePerson) => {
    return singlePerson.age > 20;
})

console.log(getPersonUsingSome);

//Every

let getPersonValueUsingEvery = personArray.every((singlePerson) =>
{
    return singlePerson.age >5;
})

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