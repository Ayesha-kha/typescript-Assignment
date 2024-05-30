var userName = ['Admin', '@Ayekhan', '@adina', '@faiq', '@anousha'];
// userName.forEach(user => {
//     if(userName === 'Admin'){
//         console.log(" Hello admin, would you like to see a status report?");
//     }else {
//         console.log(`Hello ${user} thank you for logging in again.`);
//     }
// });
for (var i = 0; i <= userName.length; i++) {
    if (userName[i] === 'Admin') {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(userName[i], " thank you for logging in again."));
    }
}
