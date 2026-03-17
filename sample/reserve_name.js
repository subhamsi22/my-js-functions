// reverse the name os subham
a = "subham singh";
a.split("");
var data = "";
console.log(a.length);
for (let i = a.length-1; i >= 0; i--) {
    data += a[i];
}
console.log(data);