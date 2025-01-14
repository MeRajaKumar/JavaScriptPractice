var num1 = parseInt(prompt("Plase enter 1st number"));
var num2 = parseInt(prompt("Plase enter 2nd number"));
var result;
document.write("Chose an opertaion :<br/>1. Addition<br/>2.Substraction<br/>3.Multiplication<br/>4.Divison");
var opertaion = parseInt(prompt("Please write a number of given Operation"));
switch (opertaion) {
    case 1:
        result = num1 + num2;
        document.write("Your addistion is :" + result);
        break;
    case 2:
        result = num1 - num2;
        document.write("Your substraction is :" + result);
        break;
    case 3:
        result = num1 * num2;
        document.write("Your multiplication is :" + result);
        break;
    case 4:
        result = num1 / num2;
        document.write("Your division is :" + result);
        break;
    default:
        prompt("Invalid operation, Please try again");
}