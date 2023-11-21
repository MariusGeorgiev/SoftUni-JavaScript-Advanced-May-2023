function result() {
  class Figure {
    constructor(units = "cm") {
      this.units = units;
    }
    get area() {}
    changeUnits(value) {
      this.units = value;
    }
    toString() {
      return `Figures units: ${this.units}`;
    }

    get _divideValue() {
      switch (this.units) {
        case "cm":
          return 1;
        case "mm":
          return 0.1;
        case "m":
          return 100;
      }
    }
  }

  class Circle extends Figure {
    constructor(radius) {
      super();
      this._radius = radius;
    }

    get radius() {
      return this._radius / this._divideValue;
    }
    get area() {
      return Math.PI * this.radius * this.radius;
    }
    toString() {
      let baseToString = super.toString();
      return `${baseToString} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this._width = width;
      this._height = height;
    }

    get width() {
      return this._width / this._divideValue;
    }

    get height() {
      return this._height / this._divideValue;
    }

    get area() {
      return this.width * this.height;
    }

    toString() {
      let baseToString = super.toString();
      return `${baseToString} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
  }

  return {
    Figure,
    Circle,
    Rectangle,
  };
}

let classes = result();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area);
console.log(c.toString());
let r = new Rectangle(3, 4, "mm");
console.log(r.area);
console.log(r.toString());
r.changeUnits("cm");
console.log(r.area);
console.log(r.toString());
c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
