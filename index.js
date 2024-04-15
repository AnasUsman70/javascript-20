
//Chapter 31 - 34 (Date & Time)

//Q : 01

var dobj = new Date();
console.log(dobj);


//Q : 02

var abc = new Date();
abc = new Date().toString();
console.log(abc);


//Q : 03


var now = new Date();

document.write(now.getDate()+"/",now.getMonth()+"/",now.getFullYear());

//Q :04

var d = new Date();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDayIndex = d.getDay(); 
var currentDayName = dayNames[currentDayIndex];
alert("Current day is: " + currentDayName + " (" + currentDayIndex + ")");

//Q : 05


var originalDate = new Date();
var newYear = 2025; 
originalDate.setFullYear(newYear);
console.log("Original Date:", originalDate);


// Q 06

const date = new Date(1992, 1,2);
console.log(date);

//(Function)


function name(){
    alert("Hello World")
}
name();
name();

// Q 3

function askName(){
    var username=prompt("Enter Name")
    return username;
}
askName()


//Q : 4

function main(){
    functionOne();
    functionTwo();
}
function functionOne(){
    console.log("this is function one")
}
function functionTwo(){
    console.log("this is function two")
}

functionOne()
functionTwo()


//Q 05

function concat(aVar, aString, aNumber) {
    
}



// Q 6

function active(first, last){
    var result=first=last;
    return result;

}
var result=active("Ahtesham","Ahtesham");
console.log(result);



//(Switch Case)


var day = new Date().getDay();

switch (day) {
    case 0:
      console.log("Today is Sunday.");
      break;
      case 1:
        console.log("Today is Monday");
        break;
        case 2:
        console.log("today is tuseday");
        break;
        case 3:
            console.log("Today is wednesday");
            break;
            case 4:
                console.log("Today is Thursday")
                break;
                case 5:
                    console.log("Today is Friday")
                    break;
                    case 6:
                        console.log("Today is Saturday")
                        break;
                        default:
                            console.log("Invalid day")
                            break;}


// Q : 02

var cityName=prompt("Enter Your City Name")
switch (cityName.toLowerCase()){
    case "karachi":
    alert("You entered karachi");
    break;
    case "Lahore":
        alert("You entered Lahore")
        break;
        case "Peshawar":
        alert("You enterd Peshawar")
        break;
        default:
    alert("City not recognized. Please enter a valid city name.");


}




















