const TERRAIN = {
  GRASS: {color: 'green'}
};

class Tile {
  _structure = null;
	constructor(x, y) {
  	this.x = x;
    this.y = y;
    this.terrain = TERRAIN.GRASS;
  }

  set structure(value) {
    this._structure = value;
  }

  get structure() {
    return this._structure;
  }
}

class Structure {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
}