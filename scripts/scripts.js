const gridSide = 600;
const sketchArea = document.querySelector("#sketchArea");
sketchArea.style.width = sketchArea.style.height = `${gridSide}px`;
let cellsPerSide = 16;

function changeColor() {
    this.style.backgroundColor = "black";
}

function createGrid() {
    const cellTotal = (cellsPerSide * cellsPerSide);
    const widthAndHeight = `${(gridSide / cellsPerSide) - 2}px`;

    for (let i = 0; i < cellTotal; i ++) {
        const cell = document.createElement("div");
        
        //format the size of cells accounting for border size
        cell.style.width = cell.style.height = widthAndHeight;
        cell.classList.add("cell");
        
        sketchArea.appendChild(cell);

        cell.addEventListener("mouseover", changeColor);
    }
}

createGrid();