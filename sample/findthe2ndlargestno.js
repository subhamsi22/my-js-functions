// [10, 20, 4, 45] → 20
let a = [10, 44, 20, 4, 30, 42, 45];
var max = 0;
var min = 0;
for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > max) {
        min = max;
        max = a[i];//42,45
    }
    else if (a[i] > min) {
        min = a[i];
    }

}
console.log(min);