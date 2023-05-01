import { restart } from "./restart.js";
class Game {
    constructor() {
        this.restartBtn = document.getElementById("restart");
        this.gameOverDOM = document.getElementById("gameoverMenu");
        this.loop;
        this.unitSize = 25;
        this.rows = 20;
        this.cols = 20;
        this.startCoords = 5;
        this.lives = 3;
        this.maxScore = 0;
        this.currentScore = 0;
    }

    configure(updateFrames, snake) {
        this.restartBtn.onclick = () => restart(this, updateFrames, snake);
        document.addEventListener("keydown", (e) => snake.changeDirection(e));
        this.loop = setInterval(updateFrames, 150);
    }

    restart(updateFrames) {
        this.lives = 3;
        this.loop = setInterval(updateFrames, 150);
        this.gameOverDOM.style.visibility = "hidden";
    }

    over() {
        clearInterval(this.loop);
        this.gameOverDOM.style.visibility = "visible";
    }

    drawInfo(contex) {
        contex.font = `20px Roboto Helvetica Arial sans-serif`;
        contex.fillStyle = "white";
        contex.fillText(`Lives: ${this.lives}`, 15, 25);
    }

    drawHead(contex, snakeHeadX, snakeHeadY) {
        contex.font = `14px Roboto Helvetica Arial sans-serif`;
        contex.fillStyle = "white";
        contex.fillText(`Head coords: ${snakeHeadX + " " + snakeHeadY}`, 375, 500);
    }

    liveLoss() {
        this.lives -= 1;
    }

    // TODO: rewrite isOver to use it more flexible
    isOver(snakeHeadX, snakeHeadY, snakeTail, board, apple) {
        if (this.lives === 0) {
            return true;
        }
        if (snakeHeadX < 0 || snakeHeadX > board.width || snakeHeadY < 0 || snakeHeadY > board.heigth) {
            return true;
        }

        // TODO: test it
        for (let i = 1; i < snakeTail.length; i++) {
            if (snakeHeadX == snakeTail[i].x && snakeHeadY == snakeTail[i].y) {
                //? used to prevent gameover when eating apple
                // if (snakeHeadX == apple.x && snakeHeadY == apple.y) {
                //     return false;
                // }
                return true;
            }
        }
        return false;
    }
}

export { Game };
