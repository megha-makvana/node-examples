var rect = require('./rectangle');

function solveReact(l,b) {
    console.log(l,b);

    rect(l,b,(err,rectangle) => {
        if(err) {
            console.log("ERROR; ", err.message)
        }
        else {
            console.log("l :"+ l + "b: "+ b+ " Area: "+ rectangle.area())
            console.log("l :" + l + "b: " + b + " Permieter: " + rectangle.perimeter())
        }
    });
    console.log("After calling rectangle")

}
solveReact(1,2);
solveReact(0,5);
solveReact(4,-1);