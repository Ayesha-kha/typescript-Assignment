// Tests for equality and inequality with strings
console.log("Equality test with string:", "Ayesha" == "Ayesha");
console.log("Inequality test with string:", ("Ayesha" as string) == "ayesha");

//Tests using the lower case function
console.log("Testing with lower case:", "ayesha".toLowerCase() == "ayesha");

//Numerical tests involving
// equality and inequality
console.log("Equality test with number:", 45 == 45);
console.log("Inequality test with number:", (45 as number) !== 55);
//greater than and less than,
console.log("greater than  test:", 100 > 25);
console.log("less than test:", 3 < 25);
//greater than or equal to
console.log("greater than or equal to:", 25 >= 25);
// less than or equal to
console.log("less than or equal to:", 25 <= 50);
//Tests using "and" and "or" operators
console.log("Test using and operators:", 25 == 25 && 100 > 25);
console.log("Test using or operators:", 25 == 25 || 45 <= 100);
//Test whether an item is in a array
let fruits: string[]= ["Mango","Apple","Banana","Grapes"];
console.log("Test 'banana' in the array:", fruits.includes("Banana"));
//• Test whether an item is not in a array
console.log("Test is orange is in the array:",fruits.includes("orange"));


