
function gameStart() {
    createGrid(4, 4);
    scoreboard();
}

function gameOver() {
    cx.fillstyle = "pink";
    cx.font = "25px cursive";
    cx.fillText("Game Over!" ,20,40);
  }

function scoreboard() {
    cx.fillStyle = "pink";
    cx.font = "30px cursive";
    cx.fillText("Score:"+score, 100, 100);
  }

var score = 0;

function createGrid(rows, cols) {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < rows * cols; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = `Button ${i + 1}`; // Label each button
        button.addEventListener('click', () => {
            alert(`Button ${i + 1} clicked!`);
        });
        gridContainer.appendChild(button);
    }
}