let container = document.querySelector('.container')

function makeGrid (rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (i=0; i<(rows * columns); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
        console.log(i);
    }
    
}
makeGrid(16, 16); //Creates a Default grid of 256 squares.

const resize = document.querySelector('.resize');
resize.addEventListener('click', () => {
    let newSize = window.prompt("Enter a new size");
    if (newSize > 100) {
        newSize = 100;
    }    
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    makeGrid(newSize, newSize);
})

const colorize = document.querySelector('.colorize');
colorize.addEventListener('click', () => {
    cell.addEventListener('mouseover', () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
})