let user = {
    name  : "subham singh",
    age   : 22,
};
let c  = user instanceof Number; // toh ye batata h ka user ek Number ka instance hai ya nahi, toh iska answer false aayega kyuki user ek object hai, number nahi.
console.log(c);
let Nan;
console.log(Nan instanceof Number); // toh ye bhi false aayega kyuki Nan ek number nahi hai, NaN ek special value hai jo number type ka hota hai, lekin wo kisi bhi number ka instance nahi hota.
let a  = "subham singh";
let aa =  new String(a);
console.log(aa instanceof String); // toh ye bhi false aayega kyuki a ek string literal hai, string literal ka instance nahi hota, string literal ek primitive value hai, lekin String ek object type hai, toh iska answer false aayega. 
let aaa = 123;
let aaaa = new Number(aaa);

console.log(aaaa instanceof Number); // toh ye bhi false aayega kyuki aaa ek number literal hai, number literal ka instance nahi hota, number literal ek primitive value hai, lekin Number ek object type hai, toh iska answer false aayega.