let score = 0;
let lastClicked = null;
let clicked = 0;
let soundIndex = 0;
let prevButton = null;

function gameStart() {
    const sounds = ['alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3',
        'night.mp3','stylish.mp3','summer.mp3','vlog.mp3',
        'alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3',
        'night.mp3','stylish.mp3','summer.mp3','vlog.mp3'];
    createGrid(4, 4, sounds);

}

function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;
}

function gameOver() {
    alert("game over! you've found all the matches! ");
    const gridContainer = document.getElementById('grid-container');
    const buttons = gridContainer.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }
}


//implemented fisher-yates shuffling algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createGrid(rows, cols, sounds) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';

    shuffle(sounds);

    for (let i = 0; i < rows * cols; i++) {
        const button = document.createElement('button');
        button.classList.add('button');
        button.textContent = `Sound ${i + 1}`;

        const audio = new Audio(sounds[i]);

        button.addEventListener('click', () => {

            audio.currentTime = 0;
            audio.play();

            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
            }, 3000);


            if(clicked == 1) {
                if (lastClicked === sounds[i]) {
                    button.style.backgroundColor = 'teal';
                    button.style.color = 'white';
                    prevButton.style.backgroundColor = 'teal';
                    prevButton.style.color = 'white';

                    score++;
                    alert(`It's a match!`);
                }
                else {
                    alert('No match');
                }

                clicked = 0;
                lastClicked = null;
                prevButton = null;

                if (score === 8) {
                    gameOver();
                }
            }

            else {
                clicked = 1;
                lastClicked = sounds[i];
                prevButton = button;
            }

            soundIndex++;
            updateScore();


        });

        gridContainer.appendChild(button);
    }
}