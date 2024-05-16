const gridSide = 600;

const sketchArea = document.querySelector("#sketchArea");
sketchArea.style.width = sketchArea.style.height = `${gridSide}px`;

const sliderContainer = document.querySelector("#sliderContainer");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#sliderValue");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`

function changeColor() {
    this.style.backgroundColor = "black";
}

function createGrid(cellsPerSide) {
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

function removeGridCells() {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
}

createGrid(16);