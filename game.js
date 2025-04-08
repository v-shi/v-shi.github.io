
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