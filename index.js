const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
// question for initials aka letters for logo
inquirer.prompt ([
    {
        type: "checkbox",
        name: "userShape",
        message: "Select your shape",
        choices: ["Triangle", "Square", "Circle"],
        },
    {
        type: "input",
        name: "userColor",
        message: "Pick your fill color for the shape.",
        },
    {
        type: "input",
        name: "initText",
        message: "Make a combo of 3 letters please, no more than 3!",
        },
    {
        type: "input",
        name: "initTextColor",
        message: "This colors the initials text.",
        },   


])
 
// ? to pick available shapes
// ? for letters color

.then((answers) => {
    let userShape= answers.shape ;
    let userColor = answers.color;
    let initText = answers.text;
    let initTextColor = answers.textColor;
    
    if (userShape == "Triangle") {
        const triangle =  new Triangle(userColor, initText, initTextColor);
        const output = triangle.makeTriangle(triangle.color, triangle.text, triangle.textColor);
            console.log(output);
    fs.writeFile(`../examples/tri-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Triangle made successfully!')
        );
    }
    else if (userShape == "Square") {
        const square =  new Square(userColor, initText, initTextColor);
        const output = square.makeSquare(square.color, square.text, square.textColor);
        console.log(output);
    fs.writeFile(`../examples/sq-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Square successfully made!')
        );
    }
    else if (userShape == "Circle") {
        const circle =  new Circle(userColor, initText, initTextColor);
        const output = circle.makeCircle(circle.color, circle.text, circle.textColor);
            console.log(output);
    fs.writeFile(`../examples/cir-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Circle successfully made!')
        );
    }
});
