class Shape {
    constructor(newX, newY){
        let _x;
        let _y;

        this.setX = function(x){
            _x = (x>0)?x:0;
        };
        this.getX = function () {
            return _x;
        };
        this.setY = function(y){
            _y = (y>0)?y:0;
        };
        this.getY = function () {
            return _y
        }


        this.setX(newX);
        this.setY(newY);
    }
    createhorizontaloffset(NumofSpaces) {
        if (NumofSpaces == undefined) {
            NumofSpaces= this.getX();

        }
        return " ".repeat(NumofSpaces)

    }
    draw(){
        let yholder = this.getY;
        for(let i = 0; i<=yholder;i++){
            console.log( );
        }
    }

    showPoint(){
        console.log(this.getX() + ", "+ this.getY());
    }
}

//use underscore before to denote another var
// basic polymorphism and extension
//very similar to java
//


//Task 2
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
        this.createhorizontaloffset();
        let square = "";
        for (var i = 1; i <= this.getlength(); i++) {
            let line = "\n" + this.createhorizontaloffset();
            for (var j = 1; j <= this.getlength(); j++) {
                line += " * ";
            }
            square += line;
        }
        console.log(square);



    }

}
//task 3
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
            let line = ("\n" + offset(this.getheight()-i))+this.createhorizontaloffset();
            for (let j = 0;j<((i*2)+1);j++)
                line +="*";
            triangle += line;
        }
        console.log(triangle);
    }
}
let okay  = new square(8,2,4);
okay.draw();

let okay2  = new triangle(8,2,4);
okay2.draw();

