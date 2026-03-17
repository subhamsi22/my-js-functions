// let user = {
//     name: "subham singh",
//     age: 23,
//     sayhi: function () {
//         console.log(this.name);
//     }

// };
// user.sayhi();


//  use refrence of object
let user2 = {
    name2: "subham singh",
    age2: 23,

};
let admin = user2;
user2 = undefined;
console.log(admin.name2); // read the property of object
console.log(user2.name2);// can not read the property of undefined