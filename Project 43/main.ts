//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magician: string[] = ['Harry potter', 'Raven', 'Wizard Delamorte', 'Criss Angel', 'David Copperfield'];
function copyArray(magicianName:string[]){
    return [...magicianName];
}
let NewArray:string[] = copyArray(magician);
console.log(NewArray);

function make_great(magic:string[]) {
      magician.forEach(name => {
        console.log(`The Great ${name}`);
      });
    }
    console.log("\nThis is modified array");
    make_great(NewArray);
    function show_magicians(magicians: string[]) {
          magician.forEach(magician => {
            console.log(magician);
          });
        }
        console.log("\nThis is original array");
        show_magicians(magician);