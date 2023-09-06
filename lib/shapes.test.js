const { Circle, Square, Triangle } = require("./shapes");

describe("Circle test", () => {
    test("test for a circle with a green background", () => {
        const shape = new Circle();
        shape.setColor("green", "black"); 
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="green" />' +
            '<text x="150" y="115" text-anchor="middle" fill="black" />'
        );
    });
});

describe("Square test", () => {
    test("test for a circle with a blue background", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<rect x="75" y="40" width="160" height="160" fill="blue" />'
        );
    });
   });

   describe("Triangle test", () => {
    test("test for a trianlge with a purple background", () => {
        const shape = new Triangle();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
        );
    });
   });


