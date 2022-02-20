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
    value?.checkNeighbors(this.x, this.y);
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

    let neighbors = [ // Neighbor directions
      map[x][y-1]?.structure, // North
      map[x-1]?.[y].structure, // West
      map[x][y+1]?.structure, // South
      map[x+1]?.[y].structure // East
    ];

    let score = 0;
    for (let i = 0; i < 4; i++) {
      if (neighbors[i]?.name === this.name) {
        score += 2 ** i;
      }
    }

    switch (score) {
      case 0:
      case 2:
      case 8:
      case 10:
        this.img = this.name+'EW';
        break;
      case 1:
      case 4:
      case 5:
        this.img = this.name+'NS';
        break;
      case 3:
        this.img = this.name + 'NW';
        break;
      case 6:
        this.img = this.name + 'SW';
        break;
      case 7:
        this.img = this.name + 'NSW';
        break;
      case 9:
        this.img = this.name + 'NE';
        break;
      case 11:
        this.img = this.name + 'NEW';
        break;
      case 12:
        this.img = this.name + 'ES';
        break;
      case 13:
        this.img = this.name + 'NES';
        break;
      case 14:
        this.img = this.name + 'ESW';
        break;
      case 15:
        this.img = this.name + 'NESW';
        break;
    }

   
  }
}