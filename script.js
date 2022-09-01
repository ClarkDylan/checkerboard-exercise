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
// 16777215 is the number of possible colors in rgb (32 bit), and 16 in toString tells function to do radix or base 16 (hexidecimal)
// function makeTile(color) {
//   let body = document.getElementsByTagName('body');
//   let tile = document.createElement('div');
//   tile.style.width = '11.1%';
//   tile.style.paddingBottom = '11.1%';
//   tile.style.cssFloat = 'left';
//   tile.style.backgroundColor = color;
//   document.body.append(tile);
// }

// for (let i = 0; i < 81; i++) {
//   if (i % 2 !== 0) {
//     makeTile('red');
//   } else if (i % 2 === 0) {
//     makeTile('black');
//   }
// }

// randomHexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
// 16777215 is the number of possible colors in rgb (32 bit), and 16 in toString tells function to do radix or base 16 (hexidecimal)

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
    makeTile("#" + Math.floor(Math.random() * 16777215).toString(16));
  } else if (i % 2 === 0) {
    makeTile("#" + Math.floor(Math.random() * 16777215).toString(16));
  }
}