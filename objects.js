// let user =  {
//     name:  "subham",
//     age:  22,
//     city: "asansol",
//       "likes birds": true  // multiword property name must be quoted

// };
// delete user.age;
// let a ={};

// a["new name"] = "sanju singh"; // multiword property name must be quoted
// console.log(a);

let fruit  = "apple";
let bag  ={
    [fruit]: 5, // the name of the property will be taken from the variable fruit
};
console.log(bag.apple); // 5    
    