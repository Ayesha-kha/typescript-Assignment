let guestList = ['Waseem badami','Maria Memon','Mansoor Ali'];
let notcome = "Mansoor Ali";
console.log(`${notcome} cannot make the dinner.`);

let newGuest = "Ayesha Nafees";
guestList[guestList.indexOf(notcome)] = newGuest;
for(let guest of guestList){
    console.log(`Hello ${guest} I would like to invite you at the dinner.`)
}