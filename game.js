
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

function createGrid(rows, cols, audioClips) {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < rows * cols; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = `Button ${i + 1}`; // Label each button

        const audio = new Audio(audioClips[i]);

        button.addEventListener('click', () => {
            audio.play();
        });

        gridContainer.appendChild(button);
    }
}

const audioFiles = [
    'audio/clip1.mp3',
    'audio/clip2.mp3',
    'audio/clip3.mp3',
    'audio/clip4.mp3',
    'audio/clip5.mp3',
    'audio/clip6.mp3',
    'audio/clip7.mp3',
    'audio/clip8.mp3',
    'audio/clip9.mp3',
    'audio/clip10.mp3',
    'audio/clip11.mp3',
    'audio/clip12.mp3'
];

createGrid(4, 4, audioFiles);