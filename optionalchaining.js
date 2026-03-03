let ser = {
    name: "subham singh",
    age: 22,
    city: {

        street: "",
        pincode: "713301",

    },
}
console.log(ser?.city?.street || "street not found");