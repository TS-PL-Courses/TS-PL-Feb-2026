// npx ts-node typescript/oop/interface.ts

interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 10,
  width: 10,
};

console.log(rectangle.height);
console.log(rectangle.width);

console.log(rectangle);

console.log(rectangle.height + ' ' + rectangle.width);

function measures(rectangle: Rectangle) {
  console.log(rectangle.height + ' ' + rectangle.width);
}

measures(rectangle);

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 10,
  width: 10,
  color: 'blue',
};

console.log(coloredRectangle.height);
console.log(coloredRectangle.width);
console.log(coloredRectangle.color);
