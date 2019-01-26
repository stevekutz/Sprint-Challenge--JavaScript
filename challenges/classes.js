// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.


/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height

function CuboidMaker (dim) {   // using dim obj for dimension attributes
  this.length = dim.length;
  this.height = dim.height;
  this.width = dim.width;
}*/

class CuboidMaker {
  constructor(dim) {
    this.dimensions = dim.dimensions;  // more flexible way to describe dimension, in case of future refactor
  }

  volume() {
    let vol = 0;
    // test if dimensions is not an empty  { } or invalid
    if(Object.keys(this.dimensions).length !== 0) {
      vol = 1;                  // iterate over dimensions to provide volume
      for(var key in this.dimensions)   vol *= this.dimensions[key];
    }

    return vol;
  }

  surfaceArea() {
    let dim = this.dimensions;
    let double = (val) => 2 * val;

    if(Object.keys(this.dimensions).length !== 0) {
      return double(dim.length*dim.width + dim.length*dim.width + dim.width*dim.height);
    }

    return 0; // invalid dim, surface area 0
  }

}
let cuboid = new CuboidMaker({
  dimensions: {
    length: 4,
    width: 5,
    height: 5
  }
});

let cuboidEmpty = new CuboidMaker({
  dimensions: { }
});

let cuboidEmpty2 = new CuboidMaker({
  dimensions: {
    length: 10,
  }
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

console.log(cuboidEmpty.volume()); //
console.log(cuboidEmpty.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
  constructor(cube_dim) {
    super(cube_dim);
    this.side = cube_dim.side;

  }

  cubeVolume () {
    return Math.pow(this.side, 3);  // side ^ 3
  }

  cubeSurfaceArea () {
    return  6 * Math.pow(this.side, 2);  // 6 sides * square of each side (side ^2)
  }
}

let cube_1 = new CubeMaker({side: 3});
console.log(cube_1.cubeSurfaceArea());
console.log(cube_1.cubeVolume());
