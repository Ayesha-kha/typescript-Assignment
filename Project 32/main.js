"use strict";
let current_users = ['@Ayekhan', '@Anousha', '@Adina', '@Sana', '@Absar'];
let new_users = ['@Anousha', '@faiq', '@nafees', '@Sana', '@Adina'];
new_users.forEach(newUsername => {
    let lowercase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newUsername} is not available. please write a different username`);
    }
    else {
        console.log(`The user name ${newUsername} is available`);
    }
});
