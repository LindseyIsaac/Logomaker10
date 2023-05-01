const { Shape, Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
// question for initials aka letters for logo
inquirer.prompt ([
    {
        type: "checkbox",
        name: "shape",
        message: "Select your shape",
        choices: ["Triangle", "Square", "Circle"],
        },
    {
        type: "input",
        name: "color",
        message: "Just a spalsh of color for the shape.",
        },
    {
        type: "input",
        name: "text",
        message: "Make a combo of 3 letters please, no more than 3!",
        },
    {
        type: "input",
        name: "textColor",
        message: "This colors the text.",
        },   


])
 
// ? to pick available shapes
// ? for letters color

.then((data) => {
    let shape= data.shape ;
    let color = data.color;
    let text = data.text;
    let textColor = data.textColor;
    
    if (newShape == "Triangle") {
        const triangle =  new Triangle(newColor, newText, newTextColor);
        const output = triangle.makeTriangle(triangle.color, triangle.text, triangle.textColor);
            console.log(output);
    fs.writeFile(`./examples/tri-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Triangle made successfully!')
        );
    }
    else if (newShape == "Square") {
        const square =  new Square(newColor, newText, newTextColor);
        const output = square.makeSquare(square.color, square.text, square.textColor);
        console.log(output);
    fs.writeFile(`./examples/sq-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Square successfully made!')
        );
    }
    else if (newShape == "Circle") {
        const circle =  new Circle(newColor, newText, newTextColor);
        const output = circle.makeCircle(circle.color, circle.text, circle.textColor);
            console.log(output);
    fs.writeFile(`./examples/cir-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Circle successfully made!')
        );
    }
});
