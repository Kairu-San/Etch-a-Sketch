const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.setAttribute("class", `square r${i+1} c${j+1}`);

        grid.addEventListener('mouseenter', ()=>{
            grid.classList.add('hovered');
        });

        container.appendChild(grid); 
    }
}


