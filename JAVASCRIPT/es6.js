//1. Variable
//var,ref,cons-> refers to declaration 


//2. Arrow
arrowfun=(StudentsDept)=>{
    console.log(StudentsDept);
}
arrowfun(["CSE", "AIML", "IT"])

//3. Destructuring Operator

var marks=[90,95,94]
var [m1,m2,m3]= marks
console.log(m1,m2);

//4. Ternary Operator

var age = 16;
var vote = (age >= 18) ? "Vote" : "Not Vote"; 
console.log(vote);  


//5. Spread Operator
arr1=[10,20,30]
arr2=[40,50,60]
arr3=[...arr1,...arr2]
console.log(arr3);

//6.rest operator

//7.scoper
//8.Hosting
console.log(a);
const a=10
console.log(a);