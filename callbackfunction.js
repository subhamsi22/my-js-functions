function question(number1, yes, no){
    if(number1){
        yes();
    }    else{
        no();
    }
}
function agree(){
    console.log("you are fabbouls");
}
function disagree(){
    console.log("you are false");
}
question("7 is greater than 6 ", agree, disagree);