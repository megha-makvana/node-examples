var rect = require('./rectangle');

function solveReact(l,b) {
    console.log(l,b);

    if(l<=0 || b<=0){
        console.log("Dimensions should be greater than zero"+ l+b);
    }
    else {
        console.log("Area of Rect "+ rect.area(l,b));
        console.log("Perimeter of rect "+ rect.perimeter(l,b));
    }
}


solveReact(1,2);
solveReact(0,5);
solveReact(4,-1);