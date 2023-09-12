const container= document.getElementById('container')
const eight =document.getElementById('eight')
const  sixteen=document.getElementById('sixteen')
const  thirtyTwo=document.getElementById('thirty-two')
const  sixtyFour=document.getElementById('sixty-four')
const eighty =document.getElementById('eighty')
const crearCuadriculas= (e)=>{
    container.style.border = "none";
    valor=Number(e.target.innerHTML)
    console.log(valor*valor)
    container.innerHTML = '';
    for (let i = 0; i < (valor*valor) ; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', `num${i+1}`);
        container.appendChild(cell);
        cell.style.flex = `0 0 calc(100% / ${valor})`
        cell.addEventListener('mouseover',()=> {
            console.log('funciono')
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            cell.style.background = `rgb(${red}, ${green}, ${blue})`;
        })
        cell.addEventListener('mouseout',()=>{
            cell.style.background = ''
        })
    } 
}

eight.addEventListener('click', crearCuadriculas)/*
sixteen.addEventListener('click',()=>{
    valor=16
    numCell= valor*valor
    container.innerHTML = '';
    for (let i = 0; i < numCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', `num${i+1}`);
        container.appendChild(cell);
        cell.style.flex = `0 0 calc(100% / ${valor})`
        cell.addEventListener('mouseover',()=>{
            const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  cell.style.background = `rgb(${red}, ${green}, ${blue})`;
        })
        cell.addEventListener('mouseout',()=>{
            cell.style.background = ''
        })
    } 
})
thirtyTwo.addEventListener('click',()=>{
    valor=32
    numCell= valor*valor
    container.innerHTML = '';
    for (let i = 0; i < numCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', `num${i+1}`);
        container.appendChild(cell);
        cell.style.flex = `0 0 calc(100% / ${valor})`
        cell.addEventListener('mouseover',()=>{
            const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  cell.style.background = `rgb(${red}, ${green}, ${blue})`;
        })
        cell.addEventListener('mouseout',()=>{
            cell.style.background = ''
        })
    } 
})
sixtyFour.addEventListener('click',()=>{
    valor=64
    numCell= valor*valor
    container.innerHTML = '';
    for (let i = 0; i < numCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', `num${i+1}`);
        container.appendChild(cell);
        cell.style.flex = `0 0 calc(100% / ${valor})`
        cell.addEventListener('mouseover',()=>{
            const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  cell.style.background = `rgb(${red}, ${green}, ${blue})`;
        })
        cell.addEventListener('mouseout',()=>{
            cell.style.background = ''
        })
    } 
})
eighty.addEventListener('click',()=>{
    valor=80
    numCell= valor*valor
    container.innerHTML = '';
    for (let i = 0; i < numCell; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell', `num${i+1}`);
        container.appendChild(cell);
        cell.style.flex = `0 0 calc(100% / ${valor})`
        cell.addEventListener('mouseover',()=>{
            const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  cell.style.background = `rgb(${red}, ${green}, ${blue})`;
        })
        cell.addEventListener('mouseout',()=>{
            cell.style.background = ''
        })
    } 
*/




