const colorPicker= document.getElementById('colorPicker')
const size= document.getElementById('size')
const clear = document.getElementById('clearBtn')
const randomColorMode= document.getElementById('randomBtn')
const eraser=document.getElementById('eraserBtn')
const grid = document.getElementById('grid')
const colorMode = document.getElementById('colorBtn')
const sizeValue = document.getElementById('sizeValue')
let modeDefault='colorMode'
let isMove=false
function getColor() {
    return colorPicker.value;
  }
function erase() {
    return '#ffffff'
}
const colorRandom= ()=>{
    let red=Math.floor(Math.random() * 256)
    let green=Math.floor(Math.random() * 256)
    let blue=Math.floor(Math.random() * 256)

    return colorRGB= `rgb(${red},${green},${blue})`
}
function choiceMode(mode) {
    if (mode==='colorMode') {
        console.log('color')
        return getColor()
    } 
    else if (mode==='randomColor') {
        console.log('random')
        
        return colorRandom()
    }
    else return erase()
}

colorMode.addEventListener('click', ()=>{
    modeDefault="colorMode"
})
randomColorMode.addEventListener('click',()=>{
    modeDefault="randomColor"
})
eraser.addEventListener('click',()=>{
    modeDefault="eraser"
})
function updateGrid(){
    sizeValue.innerHTML= `${size.value} X ${size.value}`
    const valor = parseInt(size.value);
    grid.innerHTML='';
    for (let i = 0; i < valor*valor; i++) {
      const cell=document.createElement('div');
      grid.appendChild(cell)
      
      cell.classList.add('grid-cell');
    }
    const cellSize = 540 / valor;
    grid.style.gridTemplateColumns = `repeat(${valor}, ${cellSize}px)`;
    grid.style.gridTemplateRows = `repeat(${valor}, ${cellSize}px)`;
    
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach((cell) => {
        
cell.style.userSelect = 'none';
      cell.addEventListener('mousedown', (cell) => {
        isMove=true
        cell.target.style.backgroundColor = choiceMode(modeDefault);
      });
      cell.addEventListener('mouseover',(cell)=>{
        if (isMove ) {
        cell.target.style.backgroundColor = choiceMode(modeDefault);
            
        }
      })
      cell.addEventListener('mouseup',()=>{
        isMove=false
      })
      clear.addEventListener('click',()=>{
        cell.style.backgroundColor = 'white';

      })
    });
    grid.addEventListener('mouseleave', () => {
      isMove = false;
    });
  }
  
size.addEventListener('input', updateGrid);
updateGrid()