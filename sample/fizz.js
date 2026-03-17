// fizz fuzz problem if no / 3 fizz / 5 fuzz both fizzfuzz
var data = 0;
for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        console.log(i, "fizz");
    }
    if (i % 5 === 0) {
        console.log(i, "fuzz");
    }
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, "fizzfuzz");
    }
}