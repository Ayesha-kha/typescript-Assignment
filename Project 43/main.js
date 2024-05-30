var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magician = ['Harry potter', 'Raven', 'Wizard Delamorte', 'Criss Angel', 'David Copperfield'];
function copyArray(magicianName) {
    return __spreadArray([], magicianName, true);
}
var NewArray = copyArray(magician);
console.log(NewArray);
function make_great(magic) {
    magician.forEach(function (name) {
        console.log("The Great ".concat(name));
    });
}
console.log("\nThis is modified array");
make_great(NewArray);
function show_magicians(magicians) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
console.log("\nThis is original array");
show_magicians(magician);
