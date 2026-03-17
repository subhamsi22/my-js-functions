var hh1 = document.getElementById("h11");
var hh2 = document.getElementById("h12");
var hh3 = document.getElementById("h13");
var hh4 = document.getElementById("h14");

const a  = [
{show: hh1 ,sectio:hh1, other:[hh2,hh3,hh4]},
{show: hh2 ,sectio:hh2, other:[hh1,hh3,hh4]},
{show: hh3 ,sectio:hh3, other:[hh2,hh1,hh4]},
{show: hh4 ,sectio:hh4, other:[hh2,hh3,hh1]},

];
a.forEach(nav =>{
nav.show.addEventListener("click",()=>{
if(nav.sectio){
    nav.sectio.style.display ="block";

}
 nav.other.forEach(navh=>{
    if(navh){
    navh.style.display ="none";
    } 
})
})
})