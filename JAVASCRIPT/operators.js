//1. Assignment operator
a= 10
console.log(a);

//2. Unary operator
a++;
console.log(a);

//3. Arithmetic operator
 
a=30
b=20
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var mod=a%b;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

//4. Relational Operator
var a=10;
var b=20;
if(a>b)
    console.log("true");
else{
    console.log("false");
}
if(a<b)
    console.log("true");
else{
    console.log("false");
}
if(a==b)
    console.log("true");
else{
    console.log("false");
}
if(a!=b)
    console.log("true");
else{
    console.log("false");
}


//5. Logical operator

if (5 > 3 && 10 > 7) {
    console.log("Both conditions are true.");
  } else {
    console.log("At least one condition is false.");
  }
  
//6. Bitwise Operator

var a = 5;
var b = 3;  

console.log(a & b);  
console.log(a | b);   
console.log(a ^ b);   


//7. Ternary Operaror

var age = 16;
var vote = (age >= 18) ? "Vote" : "Not Vote"; 
console.log(vote);  
