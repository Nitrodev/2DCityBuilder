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
    value.checkNeighbors(this.x, this.y);
  }

  get structure() {
    return this._structure;
  }
}

class Structure {
  constructor(name, img, connects) {
    this.name = name;
    this.img = img;

    this.connects = connects;
  }

  checkNeighbors(x, y) {
    if(this.connects == false) return;

    let dir = this.img.slice(-2); // This structures direction
    let neighbors = [ // Neighbor directions
      map[x][y-1].structure, // North
      map[x+1][y].structure, // East
      map[x][y+1].structure, // South
      map[x-1][y].structure  // West
    ];

    if(dir == 'EW') {
      if(neighbors[0].img.slice(-2) == 'NS') {
        this.img = this.name+'NE';
      } else if(neighbors[2].img.slice(-2) == 'NS') {
        this.img = this.name+'ES';
      }
    }

   
  }
}