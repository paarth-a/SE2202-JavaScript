//task 1
let binaryrepL = function (decnum){
    returnstring = "";
    while(decnum!=0){
        k = decnum%2
        returnstring = k+returnstring
        decnum = Math.floor(decnum/2)
    }
    return returnstring;
}

let binaryrepRec = function(decnum){
    returnstring=""
    if (decnum ==0){
        return returnstring;
    }
    else{
        return binaryrepRec(Math.floor(decnum/2))+(decnum%2).toString();

    }

}
let binarytrest  = function (){
    for (i = 0; i<20;i++){
            console.log(binaryrepRec(i,""))
        console.log(binaryrepL(i))
    }
}
binarytrest();

//task 2
let parser = function (jsonString){
    let resultObject = [];

//printing a message to indicate that the object is not well formatted
    if (jsonString.charAt(0) != "{" && jsonString.charAt(jsonString.length-1) != "}"){
        console.log("Reformat object");
        return null;
    }

//removing braces
    let allProps= jsonString.slice(1, jsonString.length-1);
    console.log(allProps);


    //splitting by commas
    let splittedProps = allProps.split(",");
    console.log(splittedProps)

    for(let prop of splittedProps){

        let splittedIndex = prop.indexOf(":");
        let propertyName = prop.slice(0, splittedIndex);
        let propertyValue = prop.slice(splittedIndex + 1, prop.length);

        resultObject[propertyName] = propertyValue;
        console.log("Property name is: " + propertyName + " and the value is: " + propertyValue)

        if(propertyName in resultObject){
            console.log("resultObject property name is: " + propertyName);
        }
    }
    return resultObject;
}
let a = parser("{name:Paarth }");

//task 3
let findlist = function(threshold, ...lists) {

    for(let arr of lists){
        let pass = false;
        for(let element of arr){
            if(element < threshold ){

                pass = true;
                break;
            }
            if(!pass){
                return arr;
            }
        }
    }
};
//passing values to each array
let list1 = [2,4,6,7];
let list2 = [15,20,25,30];
let list3 = [34,50,65];

let listfind = findlist(10, list1, list2, list3);
console.log(listfind); //Will return the array with brackets
console.log(...listfind); //will return values in the array

console.log("ahlie");
let list = [3,5,6];
console.log(list.reduce((a,b) => a * b));

