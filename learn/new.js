// function get_data() {
//     this.name = "subham singh";
//     this.age = 23;
//     return { name: "sanju singh" };// return value is not assigned to any variable
// };
// let data = new get_data();
// console.log(data.name);
function set_data2(val) {
    this.name = val;
    return this;
}
let data2 = new set_data2("subham singh");
console.log(data2.name);
