let container = document.querySelector('.container')

function makeGrid (rows = 16, columns = 16) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    for (i=0; i<(rows * columns); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    }
    
}
makeGrid();

const resize = document.querySelector('.resize');
resize.addEventListener('click', () => {
    let newSize = window.prompt("Enter a new size", 16);
    if (newSize > 100) {
        newSize = 100;
    }
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild());
    }
    makeGrid(newSize, newSize);
})

