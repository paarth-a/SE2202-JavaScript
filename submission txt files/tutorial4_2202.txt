//task1
let limitfunction  = function (num) {
    return((num>=5) && (num<=10))
}
    let k = [134,6,7,83,9,1,0,9, 6,17,54, 16]

let limitValues = k.filter(limitfunction);
let filteredvalues  = k.filter(num=> ((num>=5)&&(num<=10)))
console.log(filteredvalues)
console.log('\n')

console.log(limitValues)

let transformtoinches = function(num){
    return num*39.37
}

//.map will run a callback on each element of the array
//callback is when passing a function as an arguement to another function

let transformedtoinches = limitValues.map(transformtoinches);
console.log(transformedtoinches);

let transformedtoinches2 = limitValues.map((num=> (num*39.37)));
console.log(transformedtoinches2);

console.log("\n")
let findminvalue = function(a,b){
    return (a<b)?a:b;


}
let min = transformedtoinches.reduce(findminvalue);
console.log(min);

let min2 = k.filter(num=> ((num>=5)&&(num<=10)))
    .map(num=> (num*39.37))
    .reduce((a,b)=> (a<b)?a:b);
console.log(min2);
//task 2
let points= [ {x:5, y:6}, {x:3, y:7} , {x:8, y:0}, {x:9, y:10} , {x:15, y:4} , {x:0, y:15} ];


let findpointsoffaxes = function(point){
    return ((point.x!=0)&&(point.y!=0));

};
let pointsoffaxes = points.filter(findpointsoffaxes);
console.log(pointsoffaxes);

let finddistances = function(point){
    return (Math.sqrt(Math.pow(point.x,2)+Math.pow(point.x,2)));

}
let distances = pointsoffaxes.map(finddistances)
console.log('\n')
console.log("distances from the origin")
console.log(distances);


let findmaxdistance = function(distance1,distance2){
    return (distance1>distance2)?distance1:distance2;

};
let maxdistance =distances.reduce(findmaxdistance);
console.log("\n");
console.log("the maximum distance is:"+maxdistance);

let maxdistance2 = points.filter(point => (point.x!=0)&&(point.y!=0))
    .map(point=>Math.sqrt(Math.pow(point.x,2)+Math.pow(point.y,2)))
    .reduce((distance1,distance2)=> (distance1>distance2)?distance1:distance2);

