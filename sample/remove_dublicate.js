// Remove duplicates from array
// 👉 [1,2,2,3,4,4] → [1,2,3,4]
let a = [1, 2, 2, 3, 4, 4];
for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1]) {
        a.splice(i, 1);

    }
}
console.log(a);