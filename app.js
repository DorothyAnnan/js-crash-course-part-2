//LOGICAL OPERATORS
let num1 = 20;
let num2 = 30;
let num3 ="20";
let word1 ="Hello";
let word2 ="helo";

console.log(num1 < num2);
console.log(num1 > num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(!true);
console.log(!false);
console.log(num1 == num3);
console.log(num1 === num3);//equality check
console.log(word1 === word2);
console.log(word1 != word2);

//CONTROL-FLOW
let item ="Gino";

if(item === "Annapurna"){
    console.log("Buy Annapurna");
} else if(item === "U2"){
    console.log("Buy U2");
} else if(item === "A1"){
    console.log("Buy A1");
} else{
    console.log("Buy Rocky Salt");
}

//GRADING SYSTEM
let score = 98;
if(score >= 0 && score <= 100){
    if(score >= 80 ){
        console.log("Excellent");
    } else if (score >= 70){
        console.log("Very Good");
    } else if(score >= 60){
        console.log("Good");
    } else if(score >= 50){
        console.log("Average");
    } else if(score >= 40){
        console.log("Credit");
    } else if(score >= 30){
        console.log("Pass");
    } else if(score >= 0){
        console.log("Fail");
    } else{
  console.log("Please enter a valid number")
}
}

//FUNCTION
function sum(x,y = 0){
    let total = x + y;
    return total;
}
function multiply(x,y = 0){
    let total =x * y;
    return total;
}
let eleven = sum(5,6);
console.log(eleven);
let fifteen = sum(7,8);
console.log(sum(7,8));
let nineteen = sum(9,10);

console.log(multiply(5,6));

//LOOPS
//for loop
for(let i = 1;i<=100;i++){
   console.log(i + ". I will not talk in clas again");
}

//while loop
let num = 1;
while(num <= 10){
    console.log(num);
    num++
}

//do...while loop
let age = 100;
do{
    console.log(age + ".You can't vote");
    age++;
} while(age < 18);

//Array methods
let scores = [21,50,64,45,80,35,70,21];

for(let score of scores){
    console.log(Math.pow(score, 2));
}

//FILTER
let marriage = scores.filter((num) => num > 25);
console.log(marriage);

//MAP
let squares = scores.map((score) => score * score);
console.log(squares);

//FIND
let twentyone = scores.find((score) => score == 21);
console.log(twentyone);