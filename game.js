let score = 0;
let lastClicked = null;
let clicked = 0;
let soundIndex = 0;

function gameStart() {
    const sounds = ['alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3',
        'night.mp3','stylish.mp3','summer.mp3','vlog.mp3',
        'alone.mp3', 'chill.mp3','glorila.mp3','groovy.mp3',
        'night.mp3','stylish.mp3','summer.mp3','vlog.mp3'];
    createGrid(4, 4, sounds);
    //displayScore();
    //gameOver();
}

function updateScore() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;
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

        const audio = new Audio(sounds[soundIndex]);
        soundIndex++;
        /*
        button.addEventListener('click', () => {
            alert(`Button ${i + 1} clicked!`);
        });*/
        button.addEventListener('click', () => {
            audio.currentTime = 0;
            audio.play();

            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
            }, 3000);


            if(clicked == 1) {
                if (lastClicked === sounds[soundIndex - 1]) {
                    score++;
                    alert(`It's a match!`);
                }
                else {
                    alert('No match');
                }
                clicked = 0;
                lastClicked = null;
                soundIndex++;
            }

            else {
                clicked = 1;
                lastClicked = sounds[soundIndex - 1];
            }

            updateScore();


        });

        gridContainer.appendChild(button);
    }
}