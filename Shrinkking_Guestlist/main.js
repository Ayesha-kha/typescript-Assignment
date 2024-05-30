var NewguestList = ['Mehar Bhukhari', 'Waseem badami', 'Hammad Azhar', 'Maria Memon', 'Ayesha Nafees', 'kashif abbasi'];
console.log("Sorry ".concat(NewguestList, " I have a space for only 2 people so i cannot invite you all."));
NewguestList.forEach(function (guest) {
    var removeGuest = NewguestList;
    console.log("Sorry ".concat(NewguestList.pop(), " I cannot invite you at the dinner"));
});
for (var i = 0; i < NewguestList.length; i++) {
    console.log("".concat(NewguestList[i], " You are still invited."));
}
NewguestList.splice(0, 3);
console.log(NewguestList);
