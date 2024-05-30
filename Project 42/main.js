var magician = ['Harry potter', 'Raven', 'Wizard Delamorte', 'Criss Angel', 'David Copperfield'];
function make_great() {
    magician.forEach(function (name) {
        console.log("The Great ".concat(name));
    });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
make_great();
show_magicians(magician);
