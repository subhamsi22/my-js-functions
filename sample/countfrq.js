// Count frequency of elements
// 👉 "aabbbcc" → {a:2, b:3, c:2}
let a = "aabbbcc";
var aa = a.split("");
var obj = {};
for (let i = 0; i < aa.length; i++) {
    let char = a[i];
    if (obj[char]) {
        obj[char]++;
    } else {    
        obj[char] = 1;
    }
}
console.log(obj);