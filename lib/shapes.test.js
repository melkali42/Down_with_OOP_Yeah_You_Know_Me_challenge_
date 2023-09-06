const { Circle, Square, Triangle } = require("./shapes");

describe("Circle test", () => {
    test("test for a circle with a green background", () => {
        const shape = new Circle("green", "black", "YourText"); // Set shapeColor, textColor, and text
        const expected = '<circle cx="150" cy="115" r="80" fill="green" />' +
                         '<text x="150" y="115" text-anchor="middle" fill="black">YourText</text>';
        const received = shape.render().replace(/\s/g, ""); // Normalize whitespace in received value

        expect(received).toEqual(expected.replace(/\s/g, "")); // Normalize whitespace in expected value
    });
});

describe("Square test", () => {
    test("test for a square with a blue background", () => {
        const shape = new Square("blue", "white", "YourText"); // Set shapeColor, textColor, and text
        const expected = '<rect x="75" y="40" width="160" height="160" fill="blue" />' +
                         '<text x="150" y="115" text-anchor="middle" fill="white">YourText</text>';
        const received = shape.render().replace(/\s/g, ""); // Normalize whitespace in received value

        expect(received).toEqual(expected.replace(/\s/g, "")); // Normalize whitespace in expected value
    });
});

describe("Triangle test", () => {
    test("test for a triangle with a purple background", () => {
        const shape = new Triangle("purple", "white", "YourText"); // Set shapeColor, textColor, and text
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="purple" />' +
                         '<text x="150" y="115" text-anchor="middle" fill="white">YourText</text>';
        const received = shape.render().replace(/\s/g, ""); // Normalize whitespace in received value

        expect(received).toEqual(expected.replace(/\s/g, "")); // Normalize whitespace in expected value
    });
});


