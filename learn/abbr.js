let name_user = "subham singh";
name_user = name_user.toUpperCase();
name_user = name_user.split(" ");// this will convert the string in array seprate with " " {[ 'SUBHAM', 'SINGH' ]}
let arr  = "";
for(let i =0;i<name_user.length;i++){
    arr = arr + name_user[i][0];// this will take the first letter of each word and add it to arr
}
console.log(arr);// this will print the abbreviation of the name
