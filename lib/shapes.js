// class Shape {
//     constructor() {
//       this.color = "";
class Shape {
  constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
  }
}

    // setColor(colorVar) {
    //   this.color = colorVar;
    // }
  
  
  class Circle extends Shape {
    render () {
          return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="75" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };