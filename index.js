//does order matter here
const { Shape, Circle, Triangle, Square } = require("./lib/shapes.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
// question for initials aka letters for logo
inquirer.prompt ([
    {
        type: "list",
        name: "userShape",
        message: "Select your shape",
        choices: ["Circle", "Triangle", "Square"]
        },
    {
        type: "input",
        name: "userColor",
        message: "Pick your fill color for the shape.",
        },
    {
        type: "input",
        name: "Text",
        message: "Make a combo of 3 letters please, no more than 3!",
        },
    {
        type: "input",
        name: "textColor",
        message: "This colors the initials text.",
        },   


])
 
// ? to pick available shapes
// ? for letters color

.then((answers) => {
    let userShape= answers.userShape;
    let userColor = answers.userColor;
    let Text = answers.Text;
    let textColor = answers.textColor;
    
    if (userShape == "Circle") {
        const circle = new Circle(userColor, Text, textColor);
        const output = circle.makeCircle(Circle.color, Circle.text, Circle.textColor);
            console.log(output);

    fs.writeFile(`/examples/cir-${Text}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Circle successfully made!')
        );
    }
    else if (userShape == "Triangle") {
        const triangle = new Triangle(userColor, Text, textColor);
        const output = Triangle.makeTriangle(triangle.color, triangle.Text, triangle.textColor);
            console.log(output);

    fs.writeFile(`/examples/tri-${Text}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Triangle made successfully!')
        );
    }
    else if (userShape == "Square") {
        const square = new Square(userColor, Text, textColor);
        const output = square.makeSquare(square.color, square.Text, square.textColor);
        console.log(output);

    fs.writeFile(`/examples/sq-${Text}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Square successfully made!')
        );
    }

});
