const canvas = document.querySelector("#canvas");
const mousePos = document.querySelector("#pos");
const ctx = canvas.getContext("2d");
const cRect = canvas.getBoundingClientRect();

let selectedImg = new Image(32, 32);
let builtImg = new Image(32, 32);

let map = create2DArray(10);

function setup() {
  selectedImg.src = 'img/select.png';
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
        builtImg.src = map[x][y].structure.img;
        ctx.drawImage(builtImg, x*32, y*32);
      }
    }
  }
}

function startBuilding(structure) {
  switch (structure) {
    case 'road':
      selectedImg.src = 'img/roadEW.png'
      break;
  }
}

// EVENTS
canvas.addEventListener('mousemove', (e) => {
  let posX = Math.floor(getMousePos(cRect, e).x/32);
  let posY = Math.floor(getMousePos(cRect, e).y/32);
  draw();
  ctx.drawImage(selectedImg, posX*32, posY*32);
  mousePos.innerHTML = `X: ${posX} | Y: ${posY}`;
});

canvas.addEventListener('click', (e) => {
  let posX = Math.floor(getMousePos(cRect, e).x/32);
  let posY = Math.floor(getMousePos(cRect, e).y/32);
  if(selectedImg.src == 'img/select.png') {
    return;
  } else {
    let built = new Structure(selectedImg.src)
    draw();
    map[posX][posY].structure = built;
  }

});

// Clear selected image
document.addEventListener('keydown', (e) => {
  if(e.code == 'Escape') selectedImg.src = 'img/select.png';
});

console.log(map);