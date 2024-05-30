var NewguestList = ['Waseem badami', 'Maria Memon', 'Ayesha Nafees'];
NewguestList.forEach(function (guest) {
    console.log("".concat(guest, " I have found a bigger dinner table."));
});
NewguestList.unshift("Mehar Bhukhari");
NewguestList.splice(NewguestList.length / 2, 0, "Hammad Azhar");
NewguestList.push("Kashif abbasi");
NewguestList.forEach(function (guest) {
    console.log("Hello ".concat(guest, " I would like to invite you at the dinner."));
});
