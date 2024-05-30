var guestList = ['Waseem badami', 'Maria Memon', 'Mansoor Ali'];
var notcome = "Mansoor Ali";
console.log("".concat(notcome, " cannot make the dinner"));
var newGuest = "Ayesha Nafees";
guestList[guestList.indexOf(notcome)] = newGuest;
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello ".concat(guest, " I would like to invite you at the dinner."));
}
