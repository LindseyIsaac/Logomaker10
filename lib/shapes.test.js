const {Shape, Triangle, Square, Circle } = require('./shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

describe("Triangle", () => {
   test('should make a grey triangle with a blue APP', () => {
      const Triangle = new Triangle();
      expect(Triangle.makeTriangle("grey", "APP", "blue")).toEqual(
        
   `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill= "grey" />
      <text x="150" y="160" font-size="60" text-anchor="middle" fill="blue">APP</text>
   </svg>`

    );
   });
});

describe('Square', () => {
   test('should make a grey square with a red APP', () => {
      const square = new Square();
      expect(square.makeSquare("grey", "APP", "red")).toEqual(

   `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
      <rect x="70" y="20" width="160" height="160" fill= "grey" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">LOL</text>  
   </svg>`

    );
   });
});

describe('Circle', () => {
   test('should make a grey circle with a green APP', () => {
      const circle = new Circle();
      expect(circle.makeCircle("grey", "APP", "green")).toEqual(
        
   `<svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill= "grey" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="green">LOL</text>
   </svg>`
   
    );
   });
 });




