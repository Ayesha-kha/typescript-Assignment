var ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, ordinalNumber_1 = ordinalNumber; _i < ordinalNumber_1.length; _i++) {
    var num = ordinalNumber_1[_i];
    var ordinalEnding = 'st';
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(num + ordinalEnding);
}
