
function gameStart() {
    createGrid(5, 5);
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

    const audio = new Audio(sounds[i]);

    for (let i = 0; i < rows * cols; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = `Button ${i + 1}`;
        /*
        button.addEventListener('click', () => {
            alert(`Button ${i + 1} clicked!`);
        });*/
        button.addEventListener('click', () => {
            audio.play();
        });
        gridContainer.appendChild(button);
    }
}

const sounds = ['alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3','night.mp3','stylish.mp3','summer.mp3','vlog.mp3'];