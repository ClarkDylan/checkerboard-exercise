// use loop to create multiple tiles (div elements)
// every iteration of loop invokes makeTile
// in loop, set color to either red or black when invoking function

/*
if (i % 2 !== 0){
  makeTile(black)
} else if (i % 2 === 0){
  makeTile(red)
}
*/

function makeTile(color) {
  let body = document.getElementsByTagName('body');
  let tile = document.createElement('div');
  tile.style.width = '11.1%';
  tile.style.paddingBottom = '11.1%';
  tile.style.cssFloat = 'left';
  tile.style.backgroundColor = color;
  document.body.append(tile);
}

for (let i = 0; i < 81; i++) {
  if (i % 2 !== 0) {
    makeTile('red');
  } else if (i % 2 === 0) {
    makeTile('black');
  }
}