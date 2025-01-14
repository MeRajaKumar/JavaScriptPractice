var base = parseInt(prompt("please enter first number"));
var power = parseInt(prompt("please enter second number"));
var result = 1.0;
var check;
if(power < 0){
    check = power*(-1);
}else{
    check = power;
}
for(var i=1;i<=check;i++){
    result = result * base;
}
if(power>0)
document.write("your result is " + result);
else
document.write("result is 1/"+ result);