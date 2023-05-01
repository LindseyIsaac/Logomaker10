const { Shape, Triangle, Square, Circle } = require('./shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

describe('Triangle', () => {
   test('should make a grey triangle with a purple APP', () => {
      const triangle = new Triangle();
      expect(triangle.makeTriangle("grey", "APP", "purple")).toEqual(
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 18 244, 182 56, 182" fill= "grey" />
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="purple">APP</text>
    </svg>`
    );
   });
});

describe('Square', () => {
   test('should make a grey square with a purple APP', () => {
      const square = new Square();
      expect(square.makeSquare("grey", "APP", "purple")).toEqual(
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="160" height="160" fill= "grey" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">LOL</text>  
    </svg>`
    );
   });
});

describe('Circle', () => {
   test('should make a grey circle with a purple APP', () => {
      const circle = new Circle();
      expect(circle.makeCircle("grey", "APP", "purple")).toEqual(
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill= "grey" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="purple">LOL</text>
    </svg>`
    );
   });
 });




