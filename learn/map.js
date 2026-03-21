// a map is a key value collection that support any type of key string boloean number 
// set method
let map = new Map();// new map help to create a new map 
map.set("name", "subham");
map.set("age", 23);
map.set("address", "60ft bye pass road ");
map.set("60ft bye pass road") // dublicate ignore 


map.set("mobile", "73273");
console.log(map);// this will print the entire map 
console.log(map.get("name"));// this will show only require key with get method 

// has() method return if the key exist and false if the key not exceits 
console.log(map.has("height"));// false 

// delete method remove the element by key 
map.delete("age");
console.log(map);

// clear method remove all the element from the map
// map.clear();
// console.log(map);
// size the map return the full size in the map 
console.log(map.size);// return 4 

// join is the key for map 
let name = { "name": "sanju" };
var newmap = new Map();
newmap.set("sanju", "subham");// chaneg the privus to new name 

console.log(newmap.get("sanju"));

// for loop in map we have 3 method 
// keys return the ittrable of the keys
// var bike = new Map([
//     ['honda', 12000],
//     ['kawaski', 120000],
//     ['yamaha', 1200000]

// ]); or 
var bike = new Map();
bike.set("honda", 12000);
bike.set("kawasaki", 20000);
bike.set("hero", 11000);
for (let twowheeler of bike.keys()) {
    console.log(twowheeler);
}
// values 
for (let price of bike.values()) {
    console.log(price);
}
// entries 
for (let entry of bike) {
    console.log(entry);
}