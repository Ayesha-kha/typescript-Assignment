var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Turkey", "Lahore", "Islamabad", "Dubai", "India"];
//Print the original array
console.log("Original order", places);
//print the array in alphabetical order
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
//Print the original array
console.log("Original order", places);
//Print the array in reverse alphabetical order
console.log("Reverse order:", __spreadArray([], places, true).sort().reverse());
//Print original array
console.log("Original array:", places);
//Reverse the array order
console.log("Reverse order:", __spreadArray([], places, true).reverse());
//Reverse the order of your list
console.log("Reverse order:", places.reverse());
//Sort the array
console.log("Alphabetical order:", places.sort());
//
console.log(console.log("Reverse Alphabetical order:", places.sort().reverse()));
