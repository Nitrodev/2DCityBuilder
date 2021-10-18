function create2DArray(size) {
	let arr = [];
  for(let i = 0; i < size; i++) {
  	arr[i] = [];
  }
  return arr;
}

function getMousePos(rect, evt) {
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}