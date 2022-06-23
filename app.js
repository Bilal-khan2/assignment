//Q1
document.write("<br> Question 1 : -");
var number=+prompt("Enter a Positive integer");
document.write("<br> The Entered Number: - "+number+"<br>")
document.write("<br> Number rounded: - "+Math.round(number)+"<br>")
document.write("<br> Number floored: - "+ Math.floor(number)+"<br>")
document.write("<br> Number Ceil: - "+Math.ceil(number)+"<br>")

// Q2
document.write("<br> Question 2 : -");
var number=+prompt("Enter a Negative integer");
document.write("<br> The Entered Number: - "+number+"<br>")
document.write("<br> Number rounded: - "+Math.round(number)+"<br>")
document.write("<br> Number floored: - "+ Math.floor(number)+"<br>")
document.write("<br> Number Ceil: - "+Math.ceil(number)+"<br>")

// Q3
document.write("<br> Question 3: -");
var number=+prompt("Enter a floating  point integer");
document.write("<br> The Entered Number: - "+number+"<br>")
document.write("<br> Number rounded: - "+Math.round(number)+"<br>")
document.write("<br> Number floored: - "+ Math.floor(number)+"<br>")
document.write("<br> Number Ceil: - "+Math.ceil(number)+"<br>")

// // Q4
document.write("<br> Question 4: -");
var number=+prompt("Enter a negative floating point integer");
document.write("<br> The Entered Number: - "+number+"<br>")
document.write("<br> Number rounded: - "+Math.round(number)+"<br>")
document.write("<br> Number floored: - "+ Math.floor(number)+"<br>")
document.write("<br> Number Ceil: - "+Math.ceil(number)+"<br>")

 // Q5
document.write("<br> Question 5: -");
var absolute = prompt("Enter a value to be absoluted: - ")
;
document.write("<br> The absolute value of number: - "+absolute+" is "+Math.abs(absolute)+"<br>");

// Q6
document.write("<br> Question 6: -");
var num = Math.floor(Math.random()*6)+1;
document.write("<br> random number: - "+num+"<br>")

// // Q7
document.write("<br> Question 7: -");
var num = Math.floor(Math.random()*2)+1;
if (num===1)
{
    document.write("<br>The Coin shows Head"+"<br>")
}
else if (num===2)
{
    document.write("<br>The Coin shows Tail"+"<br>")
}

// Q8
document.write("<br> Question 8: -");
var num = Math.floor(Math.random()*100)+1;
document.write("<br> random number between 1 and 100 : - "+num+"<br>")

// // Q9
 document.write("<br> Question 9: -");
var weight= prompt("enter your weight in Kilograms: - ");
document.write("<br>Your Weight is "+weight+" Kilograms<br>")

// Q10
document.write("<br> Question 10: -");
var random = Math.floor(Math.random()*10)+1;
var num= prompt("Enter any number b/w 1 and 10");
if (num === random)
{
  document.write("<br> Enter number MATCHES: - <br>")  
}
else if (num !== random)
{
  document.write("<br> Enter number dosenot MATCHES <br>")  
}

//Q11
 document.write("<br> Question 11: -");
 var date= new Date();
 document.write("<br> "+date+" <br>")

// //Q12
document.write("<br> Question 12: -");
var monthsArray = ["Januaury","Febuaury" ,"March","April","May","June","July","August","September",
"October","November","December"];

var date = new Date();
var month = date.getMonth();
var final = monthsArray[month];
 document.write("<br>Current Month "+final+" <br>")
  // // Question 13
  document.write("<br> Question 13: -");
var daysArray =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var days = date.getDay();
var final = daysArray[days];
document.write("<br>Current Day "+final+" <br>")

// // Q14
document.write("<br> Question 14: -");
var daysArray =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var days = date.getDay();
var final = daysArray[days];
if (final === [0] || final === [6]) {
  document.write("<br>toDAY IS FUNDAY"+" <br>")

}

else {
  document.write("<br>TODy is normal day <br>")
}

// // Q15
document.write("<br> Question 15: -");
var dayMonth = date.getDate();

if (dayMonth <= 15) {
  document.write("<br>First 15 days of month"+" <br>")
}

else {
  document.write("<br>last 15 days of month"+" <br>")
}

// // Q16
document.write("<br> Question 16: -");
var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);

 
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)


// // Q17
document.write("<br> Question 17: -");
var hours = date .getHours();
if (hours < 12) {
  document.write("<br>AM"+" <br>")
}
else {
    hours >= 12;
    document.write("<br>PM"+" <br>")


}


// //Q18
document.write("<br> Question 18: -");
var today = new Date();
var currentYear=today.getFullYear();
var previousYear= currentYear-2;  
var lastMonth = 12;
var laterDate = new Date(previousYear, lastMonth,0 );
document.write("<br>"+laterDate+" <br>")



//// Q19
document.write("<br> Question 19: -");
var oneDay = 24 * 60 * 60 * 1000; 
var todayy = current.getDate();
var ramadan = new Date(2015, 5, 15);

var diff = Math.round(Math.floor((todayy - ramadan) / oneDay));
diff =Math.abs(diff);

ddocument.write("<br>"+todayy+" <br>")
document.write("<br>"+diff+" <br>")

// Q20
document.write("<br> Question 20: -");
var todayDate = new Date();
var specifiedDate = new Date(2015, 11, 5);
specifiedDate.setHours(22);
specifiedDate.setMinutes(50);
specifiedDate.setSeconds(16);

var seconds = Math.round(Math.floor((todayDate - specifiedDate) / 1000));

document.write("<br>"+todayDate+" <br>")
document.write("<br>"+specifiedDate+" <br>")


//// Q21
document.write("<br> Question 21: -");
var minus = new Date()
document.write("<br>"+minus+" <br>");
minus.setHours( minus.getHours()-1);

document.write("<br>"+minus+" <br>")




////24


// var monthsArray = ["Januaury","Febuaury" ,"March","April","May","June","July","August","September",
// "October","November","December"];
// document.write("<br>"+laterDate+" <br>")
// var billMonth = new Date().getMonth();
// var currentBillMonth = monthsArray[billMonth];
// var userName = document.getElementById("customerName").value;
// var userUnit = document.getElementById("units").value;
// var charges = 14
// var subCharges=500;
// var netAmount = userUnit * charges;
// var grossAmount = netAmount + subCharges;
// document.getElementById("name").innerText=userName;
// document.getElementById("billMonth").innerText=currentBillMonth;
// document.getElementById("unit").innerText=userUnit;
// document.getElementById("charges").innerText=charges;
// document.getElementById("net").innerText=netAmount;
// document.getElementById("sub").innerText=subCharges;
// document.getElementById("gross").innerText=grossAmount;




