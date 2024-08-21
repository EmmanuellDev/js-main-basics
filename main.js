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
