const container = document.querySelector('#container');

let gridSize = 16;

function createGrid() {

    const squareSize = 90 / gridSize;

    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            const grid = document.createElement('div');
            grid.setAttribute("class", `square r${i + 1} c${j + 1}`);

            grid.style.width = `${squareSize}vmin`;
            grid.style.height = `${squareSize}vmin`;

            grid.addEventListener('mouseenter', () => {
                grid.classList.add('hovered');
            });

            container.appendChild(grid);
        }
    }
}

createGrid();

const newGrid = document.querySelector('#newButton');

newGrid.addEventListener('click', () => {

    let newSize = prompt("New Grid Size:");
    
    while (newSize < 2 || newSize > 100) {
        newSize  = prompt("Between 2 and 100 only");
    }

    gridSize = newSize;

    container.innerHTML = "";
    createGrid();
});

