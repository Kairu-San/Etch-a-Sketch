const container = document.querySelector('#container');
const colorToggle = document.querySelector('#colorToggle');

colorToggle.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid();
})

let gridSize = 16;

function createGrid() {

    const squareSize = 80 / gridSize;

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const grid = document.createElement('div');
            grid.setAttribute("class", `square r${i + 1} c${j + 1}`);

            grid.style.width = `${squareSize}vmin`;
            grid.style.height = `${squareSize}vmin`;


            let opacity = 0.1;

            grid.addEventListener('mouseenter', () => {
                if (colorToggle.checked) {
                    const randomR = Math.floor(Math.random() * 256);
                    const randomG = Math.floor(Math.random() * 256);
                    const randomB = Math.floor(Math.random() * 256);
                    grid.style.backgroundColor = `rgba(${randomR}, ${randomG}, ${randomB}, ${opacity})`;
                }
                else {
                    grid.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                }
                opacity += 0.1;
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
        newSize = prompt("Between 2 and 100 only");
    }

    gridSize = newSize;

    container.innerHTML = "";
    createGrid();
});


