// task 1
let printHello = function( newString) {
    let staticString = "Hello " ;
    console.log(staticString+newString);
}
printHello("2202" )
let printGreeting = function(name){
    printHello(name);
}

printGreeting("y")
//task 2
let printvertical  = function(vertstring){
    for (i = 0; i<vertstring.length; i++){
    console.log(vertstring.charAt(i));
    }

}
printvertical("ahlie");


let printwithspaces = function(b){
    a = "";

    for(i = 0; i<b.length;  i++){
    a =a+b.charAt(i)   +" ";

    }
    console.log(a);

}
printwithspaces("ahlie");

let printInReverse = function(k){
    let temp = "";
    for(i = k.length-1; i>=0; i--){
    temp = temp +k.charAt(i);
    }
    console.log(temp);

}

printInReverse("ahlie")
let printgeneric = function(ahlie, printingFunction){
    printingFunction(ahlie);


}
printgeneric("ahlie", printInReverse);
printgeneric("ahlie", printwithspaces);
printgeneric("ahlie", printvertical);

//task 3
let CalendarName = function(ahlie){
    let monthName = function(num){
        switch (num){
            case 1:
                return "January";
                break;
            case 2:
                return "February";
                break;
            case 3:
                return "March";
                break;
            case 4:
                return "April";
                break;
            case 5:
                return "May";
                break;
            case 6:
                return "June";
                break;
            case 7:
                return "July";
                break;
            case 8:
                return "August";
                break;
            case 9:
                return "September";
                break;
            case 10:
                return "October";
                break;
            case 11:
                return "November";
                break;
            case 12:
                return "December";
                break;

        }
    }
    let dayName = function(num){
        switch (num){
            case 1:
                return "Sunday";
                break;

            case 2:
                return "Monday";
                break;
            case 3:
                return "Tuesday";
                break;
            case 4:
                return "Wednesday";
                break;
            case 5:
                return "Thursday";
                break;
            case 6:
                return "Friday";
                break;
            case 7:
                return "Saturday";
                break;

        }
    }

    if (ahlie == "m"){
        return monthName;
    }
    else if (ahlie =="d"){
        return dayName;

    }
    else{
        return ""
    }


}
let findthenameofmonth = CalendarName("m");
    console.log(findthenameofmonth(4));
let findthenameoftheday = CalendarName("d");
    console.log(findthenameoftheday(4));



//task4
let powerof = function(numero){
    let bb = numero
    let raisetopower = function (numeral){
        for(i = 0; i<numeral-1; i++){
            numero = numero*bb;
        }
        return numero
    }
    return raisetopower;

}

let r1 = powerof(2);
    console.log(r1(5));
let r2 = powerof(3);
    console.log(r2(5));
let r3 = powerof(4);
    console.log(r3(5));



