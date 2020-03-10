function Shape(){
    this.type = 'Shape';
    this.getType = function()
    {
        return this.type;
    }
}

var shape = new Shape();

function Triangle(a, b ,c)
{
    this.type = 'triangle';
    this.arguments = arguments;
}

Triangle.prototype = shape;

var triangle = new Triangle(1, 2, 3);

triangle.getType();

Triangle.prototype.getParimeter = function()
{
    var perimeter = 0;
    for(i = 0; i < this.arguments.length; i++){
        perimeter = perimeter + this.arguments[i];
    }
    return perimeter;
}

console.log(triangle.getParimeter());