

let ptype =
    {
        real: 0,
        img: 0,
        print: function()
        {
            console.log("Ptype is Printing this:" +  this.real + "+" + this.img + "i")
        }
    };

function ptypeFunction(r,i)
{
    let returntype = Object.create(ptype);
    returntype.real = r;
    returntype.img = i;
    return returntype;
}

let cobject =  ptypeFunction(5,9 );
cobject.print();

//Simple Constructor Function

function ConstructorFunction(r,i)
{
    this.real = r;
    this.img = i;
    this.print = function()
    {
        console.log("constructor fun. is printing: " + this.real + "+" + this.img + "i" );
    }
    this.add = function(object2)
    {
        let result = new ConstructorFunction((this.real+object2.real), (this.img+object2.img));
        return result;
    };
    this.sub = function(object2)
    {
        let result = new ConstructorFunction((this.real - object2.real), (this.img - object2.img));
        return result;
    };
    //x = multiply
    this.x= function (object2)
    {
        let result = new ConstructorFunction((this.real*object2.real - this.img*object2.img), (this.real*object2.img + this.img*object2.real));
        return result;
    };
    this.division = function (object2)
    {
        let result = new ConstructorFunction((this.real/object2.real - this.img/object2.img), (this.real/object2.img + this.img/object2.real));
        return result;
    };

}

let newobject = new ConstructorFunction(5,6);
let obj2 = new ConstructorFunction(7,3);
newobject.print();
obj2.print();
newobject.add(obj2);
let printadd = newobject.add(obj2);
printadd.print();
let printsub = newobject.sub(obj2);
printsub.print();
let printx = newobject.x(obj2);
printx.print();
let printdiv = newobject.division(obj2);
printdiv.print();




