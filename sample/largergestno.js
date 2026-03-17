// find the largest number in array 
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < a.length - 1; i++) {
    if (a[i] > a[i + 1]) {
        console.log("largest number is", a[i]);
    }
    else {
        console.log("largest number is", a[i + 1]);
    }
}