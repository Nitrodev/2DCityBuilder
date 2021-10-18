const TERRAIN = {
  GRASS: {color: 'green'}
};

class Tile {
  structure = null;
	constructor(x, y) {
  	this.x = x;
    this.y = y;
    this.terrain = TERRAIN.GRASS;
  }
}

class Structure {
  constructor(img) {
    this.img = img;
  }
}