class Shape {
  constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
  }

  setColor(shapeColor, textColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
 }

class Circle extends Shape {
      render() {
          return `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />
                  <text x="150" y="115" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
    }
  
    class Square extends Shape {
      render() {
          return `<rect x="75" y="40" width="160" height="160" fill="${this.shapeColor}" />
                  <text x="150" y="115" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      }
    }
  
  
  class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
                <text x="150" y="115" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
   }
  
  module.exports = { Circle, Square, Triangle };