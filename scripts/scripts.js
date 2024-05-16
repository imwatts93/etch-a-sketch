const gridSide = 600;
const sketchArea = document.querySelector("#sketchArea");
let rows = 16;
let cols = 16;

function createGrid() {
    for (let i = 0; i < (rows * cols); i ++) {
        const cell = document.createElement("div");
        
        cell.style.width = `${(gridSide / cols) - 2}px`;
        cell.style.width = `${(girdSide / cols) - 2}px`;
        cell.classList.add("cell");
        
        sketchArea.appendChild(cell);
    }
}

createGrid()