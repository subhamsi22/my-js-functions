
const prompt = require('prompt-sync')();
// Check palindrome

// suppose user enter mom so its a palindrome
var a = prompt("enter youur text");
a.split(" ");
var data = "";
for (let i = 0; i < a.length; i++) {
    if (a[a.length - 1] === a[i]) { //mom
        data += a;
        console.log("yes the input is pallidrom", data);
        break;

    }
    else {
        console.log("not  a palimdrome");
        break;

    }
}


