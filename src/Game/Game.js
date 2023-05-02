import { restart } from "./restart.js";
class Game {
    constructor(context) {
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
        this.heartPath = "../src/assets/red-heart-icon.png";
        this.trophyPath = "../src/assets/trophy.png";
        this.applePath = "../src/assets/apple.png";
        this.heart1 = new Image();
        this.heart2 = new Image();
        this.heart3 = new Image();
        this.trophy = new Image();
        this.apple = new Image();
        this.heart1.onload = () => context.drawImage(this.heart1, 0, this.unitSize / 2, this.unitSize, this.unitSize);
        this.heart2.onload = () =>
            context.drawImage(this.heart2, this.unitSize, this.unitSize / 2, this.unitSize, this.unitSize);
        this.heart3.onload = () =>
            context.drawImage(this.heart3, 2 * this.unitSize, this.unitSize / 2, this.unitSize, this.unitSize);
        this.trophy.onload = () =>
            context.drawImage(this.trophy, 19 * this.unitSize, this.unitSize / 2, this.unitSize, this.unitSize);
        this.apple.onload = () =>
            context.drawImage(this.apple, 15 * this.unitSize, this.unitSize / 2, this.unitSize, this.unitSize);
    }

    configure(updateFrames, snake, board) {
        let context = board.Context;
        //updateInfoPanel now is not necessary, because snake is never drawn on it
        board.updateInfoPanel();
        this.drawLives(context);
        this.drawScore(context);
        this.restartBtn.onclick = () => restart(this, updateFrames, snake, board);
        document.addEventListener("keydown", (e) => snake.changeDirection(e));
        this.loop = setInterval(updateFrames, 150);
        this.apple.src = this.applePath;
        this.trophy.src = this.trophyPath;
    }

    restart(updateFrames, board, snake) {
        this.lives = 3;
        this.currentScore = 0;
        this.gameOverDOM.style.visibility = "hidden";

        this.configure(updateFrames, snake, board);
    }

    over() {
        clearInterval(this.loop);
        this.gameOverDOM.style.visibility = "visible";
    }

    addScore(context) {
        this.currentScore++;
        if (this.currentScore > this.maxScore) {
            this.maxScore++;
        }
        this.drawScore(context);
    }

    drawScore(context) {
        //clear area for maxScore
        // context.fillStyle = "gray";
        // context.fillRect(17 * this.unitSize, this.unitSize / 2, this.unitSize * 2, this.unitSize);
        context.clearRect(17 * this.unitSize, this.unitSize / 2, this.unitSize * 2, this.unitSize);

        //clear area for currentScore
        // context.fillStyle = "gray";
        // context.fillRect(13 * this.unitSize, this.unitSize / 2, this.unitSize * 2, this.unitSize);
        context.clearRect(13 * this.unitSize, this.unitSize / 2, this.unitSize * 2, this.unitSize);

        context.font = `20px Roboto Helvetica Arial sans-serif`;
        context.fillStyle = "white";
        context.fillText(this.currentScore, 14 * this.unitSize, this.unitSize * 1.3);
        context.fillText(this.maxScore, 18 * this.unitSize, this.unitSize * 1.3);
    }

    drawLives(context) {
        context.clearRect(0, 0, this.unitSize * 3, this.unitSize * 2);

        switch (this.lives) {
            case 3:
                this.heart1.src = this.heartPath;
                this.heart2.src = this.heartPath;
                this.heart3.src = this.heartPath;
                break;
            case 2:
                this.heart1.src = this.heartPath;
                this.heart2.src = this.heartPath;
                this.heart3.src = "";
                break;
            case 1:
                this.heart1.src = this.heartPath;
                this.heart2.src = "";
                this.heart3.src = "";
                break;
            default:
                break;
        }
    }

    drawHead(context, snakeHeadX, snakeHeadY) {
        context.font = `14px Roboto Helvetica Arial sans-serif`;
        context.fillStyle = "white";
        context.fillText(`Head coords: ${snakeHeadX + " " + snakeHeadY}`, 375, 545);
    }

    liveLoss(context) {
        this.lives -= 1;
        this.drawLives(context);
    }

    isOver(snakeHeadX, snakeHeadY, snakeTail, board, apple) {
        if (this.lives === 0) {
            return true;
        }
        if (snakeHeadX < 0 || snakeHeadX >= board.width || snakeHeadY < 50 || snakeHeadY > board.heigth + this.unitSize) {
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
