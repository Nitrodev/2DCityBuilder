const canvas = document.querySelector("#canvas");
const mousePos = document.querySelector("#pos");
const ctx = canvas.getContext("2d");
const cRect = canvas.getBoundingClientRect();

let selected = {}; // FIX THIS LATER
let builtImg;

let map = create2DArray(10);

function setup() {
  selected.img = selected.name = 'select';
  images.loadSpriteSheet('./sprites.json');
  for(let x = 0; x < 10; x++) {
    for(let y = 0; y < 10; y++) {
      map[x][y] = new Tile(x, y);
    }
  }
  draw();
}

function draw() {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 10; y++) {
      if(map[x][y].structure == null) {
        ctx.beginPath();
        ctx.fillStyle = map[x][y].terrain.color;
        ctx.fillRect(x*32, y*32, 32, 32);
      } else {
        let built = map[x][y].structure.img;
        images.draw(ctx, built, x*32, y*32);
      }
    }
  }
}

function startBuilding(structure) {
  switch (structure) {
    case 'road':
      selected.name = structure;
      selected.img = structure+'EW';
      break;
  }
}

// EVENTS
canvas.addEventListener('mousemove', (e) => {
  let posX = Math.floor(getMousePos(cRect, e).x/32);
  let posY = Math.floor(getMousePos(cRect, e).y/32);
  draw();
  images.draw(ctx, selected.img, posX*32, posY*32);
  mousePos.innerHTML = `X: ${posX} | Y: ${posY} \n Selected: ${selected.name || 'Nothing'}`;
});

canvas.addEventListener('click', (e) => {
  let posX = Math.floor(getMousePos(cRect, e).x/32);
  let posY = Math.floor(getMousePos(cRect, e).y/32);
  if(selected.img == 'select') {
    return;
  } else {
    let built = new Structure(selected.name, selected.img);
    map[posX][posY].structure = built;
    draw();
  }

});

// Clear selected image
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'Escape':
      selected.img = selected.name = 'select';
      break;
  
    case 'KeyR':
      if(selected.img == selected.name+'EW') {
        selected.img = selected.name+'NS';
      } else if(selected.img == selected.name+'NS') {
        selected.img = selected.name+'EW';
      }
      break;
  }
});

console.log(map);