
class Shape
{
    constructor(nX,nY)
    {
        let Xc;
        let Yc;

        this.setX = function (x){
            Xc = (x>=0)?x:0;
        };
        this.getX = function() {
            return Xc;
        };

        this.setY = function (y){
            Yc= (y>=0)?y:0;
        };
        this.getY = function() {
            return Yc;
        };

        this.setX(nX);
        this.setY(nY);
    }
    showPoint()
    {
        console.log(this.getX() + "," + this.getY())
    }

    createHorizontalOffset (NumofSpaces)
    {
        if (NumofSpaces == undefined) {
            NumofSpaces= this.getX();

        }
        return " ".repeat(NumofSpaces)
    }

    draw()
    {
        let yholder = this.getY;
        for(let i = 0; i<=yholder;i++) {
            console.log();
        }
    }
    displayInfo(){
        return "Coordinates of Main point" + this.getX() + " " + this.getY();
    }
};

//use underscore before to denote another var
// basic polymorphism and extension
//very similar to java
//


class square extends Shape{

    constructor(newX,newY, lengthnew){
        super(newX,newY);
        let length1;
        this.setlength = (length)=>{
            length1 = length>0?length:1;
        }
        this.getlength= ()=> {
            return length1;
        }
        this.setlength(lengthnew);

    }
    draw(){
        super.draw();
        this.createHorizontalOffset();
        let square = "";
        for (var i = 1; i <= this.getlength(); i++) {
            let line = "\n" + this.createHorizontalOffset();
            for (var j = 1; j <= this.getlength(); j++) {
                line += " * ";
            }
            square += line;
        }
        console.log(square);


    }

}


class triangle extends Shape{
    constructor(newX,newY, heightnew){
        super(newX,newY);
        let height1;
        this.setheight = (height)=>{
            height1 = height>0?height:1;
        }
        this.getheight = ()=>{
            return height1;
        }
        this.setheight(heightnew);

    }
    draw(){
        super.draw();
        let triangle = "";
        let offset = function(n) {
            let space = "";
            for (let i = 0; i<n;i++){
                space+= " ";
            }
            return space;

        };

        for(let i = 0;i<=this.getheight();i++){
            let line = ("\n" + offset(this.getheight()-i))+this.createHorizontalOffset();
            for (let j = 0;j<((i*2)+1);j++)
                line +="*";
            triangle += line;
        }
        console.log(triangle);
    }
    displayInfo() {
        return "Triangle " + super.displayInfo();
    }

};

let plainObjects = [
    {x:5,y:6},
    {type:'square', x:7,y:10, length:10},
    {x:8,y:9,type:'triangle', height:50},
];


let transformPlainObjectsToShapes = function(input){
    let array = [];
    let hold;
    for(let i of input){
        switch(i.type) {
            case undefined:
                hold = new Shape(i.x, i.y);
                break;
            case "square":
                hold = new square(i.x, i.y, i.length);
                break;
            case "triangle":
                hold = new triangle(i.x, i.y, i.height);
        }
        array.push(hold);
    }//after each iteration we will push the shape "s" into the list shapes
    return array;
};

let results = transformPlainObjectsToShapes(plainObjects);

for(let s of results)
    console.log(s.displayInfo());

results = plainObjects.map(object => (object.type === undefined)? new Shape(object.x, object.y):
    (object.type === 'square')? new square(object.x, object.y, object.length):
        new triangle(object.x, object.y, object.height));

for(let s of results)
    console.log(s.displayInfo())



let shapeout= new Shape(5,10);
shapeout.draw();

let squareout = new square(10, 20, 30);
squareout.draw();

let tout = new triangle(20,30,20);
tout.draw();