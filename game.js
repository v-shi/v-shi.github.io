
function gameStart() {
    createGrid(4, 4, sounds);
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

//implemented fisher-yates shuffling algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGrid(rows, cols, sounds) {
    const gridContainer = document.getElementById('grid-container');
    shuffle(sounds);

    for (let i = 0; i < rows * cols; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = `Button ${i + 1}`;

        const audio = new Audio(sounds[i]);

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

const sounds = ['alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3','night.mp3','stylish.mp3','summer.mp3','vlog.mp3', 'alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3','night.mp3','stylish.mp3','summer.mp3','vlog.mp3'];
//const sounds = ['alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3','night.mp3','stylish.mp3','summer.mp3','vlog.mp3'];