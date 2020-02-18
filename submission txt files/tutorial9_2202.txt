let Grades = (function() {
    let marks = [90, 67, 55, 87, 92];

    let avg = function(){
        let t = marks.reduce((a,b)=> a+b,0);
        return t/marks.length;
    };

    // Function reduces grades to the max grade
    let GradeMax= function() {
       return marks.reduce((a,b)=>(a>b)?a:b);

    };

    return{
        avg:avg,
        GradeMax:GradeMax
    }
})();       //the average

// Task 2

console.log("Print Max grade" + Grades.GradeMax());
console.log("Print average: " + Grades.avg());

// Task 3

let Grades2 = (function() {
    let marks = [23,65,23,87,43];
    let avg = function(){
        let t = marks.reduce((a,b)=> a+b,0);
        return t/marks.length;
    };

    let GradeMax= function() {
        return marks.reduce((a,b)=>(a>b)?a:b);
    };

    // Creating a setter and getter
    let GradesSetter = function (InGrades) {
        marks = InGrades;
    };

    let GradesRetrieve = function() {
        return marks;
    };


    return{
        avg:avg,
        GradeMAx:GradeMax,
        GradesSetter:GradesSetter,
        GradesRetrieve:GradesRetrieve
    }
})();

console.log(Grades2.avg());
Grades2.GradesSetter([22, 34, 40, 10, 16]);
console.log(Grades2.GradesRetrieve());
console.log("Average: " + Grades2.avg());
console.log("Max Grade: " + Grades2.GradeMAx());