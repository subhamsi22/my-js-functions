let user  = {
    name : "subham singh",
    age  : 23,
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
return hint == "string" ? `name: ${this.name}` : this.age;  
    }

};
console.log(`${user}`);
