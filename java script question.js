// Question:- Write a program in only javascript to find stored value is even or odd?
// Answer:-

// Question:- Write a program to check whether a given number is even or odd?
// Answer:- 
	<script>
	var x=parseInt(prompt("Enter a number to check " + x + " is divisible by 7 or not"));
	 if(x%2==0){
		document.write("Your whether "+ x +"is even");
		}
	else{
		document.write("Your whether "+ x +"is odd");
		}
	</script>

// Question:- Write a program to check whether a given number is divisible by 7 or not?
// Answer:- 
// 	<script>
// 	var x=parseInt(prompt("Enter a number to check " + x + " is divisible by 7 or not"));
// 	 if(x%7==0)
// 		{
// 		document.write(x +" Is divisible by 7");
// 		}
// 	else
// 		{
// 		document.write(x +" Is divisible by 7");
// 		}
// 	</script>

// Question:- Write a program to to find greater between two numbers?
// Answer:- 
// 	<script>
// 	var x=parseInt(prompt("Enter a 1st number to check greater or not"));
// 	var y=parseInt(prompt("Enter a 2nd number to check greater or not"));
// 	 if(x>y)
// 		{
// 		document.write(x +" is greater number");
// 		}
// 	else
// 		{
// 		document.write(y +" is greater number");
// 		}
// 	</script>

// Question:- Write a program to to find greater among three numbers?
// Answer:- 
// 		<script>
// 			const num1 = parseInt(prompt("Enter first number: "));
// 			const num2 = parseInt(prompt("Enter second number: "));
// 			const num3 = parseInt(prompt("Enter third number: "));
// 				if(num1 >= num2 && num1 >= num3)
// 					{document.write("largest number is "+num1);}
// 				else if (num2 >= num1 && num2 >= num3) 
// 					{document.write("largest number is "+num2);}
// 				else 
// 					{document.write("largest number is "+num3);}
// 		</script>

// Question:- Write a Program to check leap year?
// Answer:- 
// 	<script>
// 	var x=parseInt(prompt("Enter a year to check is this leap year or not"));
// 	 if(x%4==0&&x%100!=0 || x%4==0&&x%100==0 && x%400==0)
// 		{
// 		document.write(x +" leap year hai... samjhe");
// 		}
// 	else
// 		{
// 		document.write(x +" leap year nahi hai... samjhe");
// 		}
// 	</script>

// Question:- write a program to create a calculator(+,-,*,/) using switch case and take input using prompt box?
// Answer:- 

// Question:- Write a program to print first N natural numbers in reverse order.(N is given by user)??
// Answer:-

// Question:- Write a program to print table of user’s choice?
// Answer:- 
// 	<script>
// 	 var x=parseInt(prompt("Please insert a number for displaying table"));
// 	 var i=1;
// 	 while(i<=10){
// 		document.write(x +" * "+ i +" = "+ x * i +"<br>");
// 		i=i+1;
// 		}
// 		document.write("ThankYouForUsingMe!");
// 	</script>

// Question:- Write a program to calculate x power y.(when user input x is 2 and y is 3 then the result will be 8)??
// Answer:- 

// Question:- Write a program to print all Armstrong numbers under 1000?
// Answer:- 

// Question:- Write a program to calculate factorial of a number?
// Answer:- 

// Question:- Print all students who are active in the class from this group on your page?
// Answer:- 
// 	<script>
// 		var s1=["gaurav","komal","aayush","ashish","akash"];
// 		document.write(s1 +" "+ s2 +" "+ s3 +" "+ s4 +" "+ s5);
// 	</script>
// Method 2:-
// 	<script>
// 		var s1=["gaurav","komal","aayush","ashish","akash"];
// 		for(i=0;i<5;i++){
// 			document.write(s1[i] + "<br>");
// 			}
// 	</script>
	
// Question:- Write a program to print tables of all the numbers of given number's table?
// For example:-
// 	user gives a number that is 2...
// 	now print the table of 2,4,6,8,10,12,14,16,18,20...
// 	every number will contain its table...
// Answer:- 

// Question:- Write a program to find greatest and smallest number among 10 numbers given by user?
// Answer:- 
// 		<script>
// 			var num=[];
// 			var smallest;
// 			var largest;
// 			for(i=1;i<=10;i++){
// 				num.push(parseInt(prompt("Please enter " + i + " number")));
// 				if(i==1){smallest=num[i-1];largest=num[i-1];}
// 				else if (num[i-1]<smallest){smallest=num[i-1];}
// 				else if (num[i-1]>largest){largest=num[i-1];}
// 				}
// 			document.write(num);
// 			document.write("<br>your smallest number is " + smallest);
// 			document.write("<br>your smallest number is " + largest);
// 		</script>
// Method 2:- 
// 	<script>
// 		var x=[];
// 		var y;
// 		var z;
// 		alert("please enter 10 number to find greater and smaller");
// 		for(y=0;y<10;y++){
// 			x.push(parseInt(prompt("enter "+(y+1)+" number")));
// 				if(x[y]>x[0]){
// 				z=x[y];
// 				x[y]=x[0];
// 				x[0]=z;
// 				}
// 		}
// 		document.write(x+".   ");
// 		document.write("<br>"+x[0]+"  is greater number");
// 		for(y=0;y<10;y++){
// 			if(x[y]<x[0]){
// 				z=x[y];
// 				x[y]=x[0];
// 				x[0]=z;
// 				}
// 		}
// 		document.write("<br>"+x[0]+"  is smaller number");
// 	</script>
// Method 3:-
// 	<script>
// 		var a=[];
// 		var i;
// 		var n;
// 		var largest;
// 		var smallest;
// 			alert("Please deside the number of elements for checking largest or smallest number");
// 			n=parseInt(prompt("Enter the number of elements for checking largest or smallest number :-"));
// 			for(i=0;i<n;++i){
// 				a[i]=parseInt(prompt("Enter the " + [i+1] + " of elements :-"));
// 			}
// 			largest=smallest=a[0];
// 			for(i=1;i<n;++i){
// 				if(a[i]>largest)
// 					largest=a[i];
// 				else
// 					smallest=a[i];
// 				}
// 				document.write("Your checking of number for element is :- "+n);
// 				document.write("<br>Your entered" + n + "number is :- " +a);
// 				document.write("<br>The smallest number is :- "+smallest);
// 				document.write("<br>The largest number is :- "+largest);
// 	</script>
	
// Question:- Write a program to print a 2x2 MATRIX using user's input?
// For example:-
// 	users gives 4 input numbers ...1,2,3,4
// 	show it as matrix style
// 	1 2
// 	3 4
// Answer:- 
// 	<script>
// 		var a=[];
// 		var i;
// 		alert("Please insert 4 numbers for matrix arrangement");
// 		for(i=0;i<=3;i++){
// 			a[i]=parseInt(prompt("Please insert " +(i+1)+ " number for matrix arrangement")); // a.push(parseInt(prompt("Please insert " +(i+1)+ " number for matrix arrangement")));
// 		}
// 			document.write("Your 4 number for matrix arrangement is :- "+a);
// 			document.write("<br>In Matrix form 2 x 2 is :-<br><br>");
// 		for(i=0;i<4;i=i+2){
// 		document.write(a[i]+" "+a[i+1]+"<br>");
// 		}
// 	</script>

// Question:- Wap...To sort 10 numbers given by users in array... In ascending and descending?
// For Example:- 
// User input 34
// 		56
// 		85
// 		23
// 		95
// 		75
// 		42
// 		63
// 		31
// 		22
// Print it in... Ascending order...??
// 22,23,31,34,42,56,63,75,85,95
// And descending order...??
// 95,85,75,63,56,42,34,31,23,22
// Answer:- 

// Question:- Wap to print according to following...?
// For Example:- 
// user input...(cannot be less than 3 digits)
// 98765

// you have to print 
// 90000+8000+700+60+5
// Answer:- 

// Question:- create a number from user input digits and check that it is divisible by 11 or not?
// For Example:-
// user input:
// 4
// 6
// 7
// 8
// 3


// your number is 46783.
// it is divisible by 11.
// Answer:- 
