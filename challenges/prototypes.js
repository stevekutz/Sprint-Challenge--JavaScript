/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
  function CuboidMaker (dim) {   // using dim obj for dimension attributes
    this.length = dim.length;
    this.height = dim.height;
    this.width = dim.width;
  }

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
  CuboidMaker.prototype.volume = function () {
    return this.length * this.height * this.width;
  };

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/
  CuboidMaker.prototype.surfaceArea = function () {
    let double = (val) => 2 * val;

    return double(this.length*this.width + this.length*this.width + this.width*this.height);
  };


/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

let cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,    // don't need comma here but good practice for future refactoring
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


