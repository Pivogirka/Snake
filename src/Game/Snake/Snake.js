import { Game } from "../Game.js";

class Snake extends Game {
    constructor() {
        super();
        this.tail = [
            {
                x: this.unitSize * this.startCoords,
                y: this.unitSize * this.startCoords,
            },
        ];
        this.snakeHeadX = this.tail[0].x;
        this.snakeHeadY = this.tail[0].y;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    //TODO: test it and change logic if it possible
    draw(context) {
        //reposition of tail
        for (let i = this.tail.length - 1; i > 0; i--) {
            this.tail[i] = this.tail[i - 1];
        }
        this.tail[0] = { x: this.snakeHeadX, y: this.snakeHeadY };

        //draw tail
        context.fillStyle = "lime";
        for (let i = 0; i < this.tail.length; i++) {
            if (i === 0) {
                context.fillRect(this.tail[i].x, this.tail[i].y, this.unitSize, this.unitSize);
                context.lineWidth = 2;
                context.strokeStyle = "white";
                context.strokeRect(this.tail[i].x, this.tail[i].y, this.unitSize, this.unitSize);
            }
            context.fillRect(this.tail[i].x, this.tail[i].y, this.unitSize, this.unitSize);
        }
    }
    moving() {
        this.snakeHeadX += this.velocityX * this.unitSize;
        this.snakeHeadY += this.velocityY * this.unitSize;
    }

    restart() {
        this.tail = [
            {
                x: this.unitSize * this.startCoords,
                y: this.unitSize * this.startCoords,
            },
        ];
        this.snakeHeadX = this.tail[0].x;
        this.snakeHeadY = this.tail[0].y;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    changeDirection(e) {
        switch (e.code) {
            case "ArrowUp":
                if (this.velocityY != 1) {
                    this.velocityX = 0;
                    this.velocityY = -1;
                }
                break;

            case "ArrowDown":
                if (this.velocityY != -1) {
                    this.velocityX = 0;
                    this.velocityY = 1;
                }
                break;

            case "ArrowRight":
                if (this.velocityX != -1) {
                    this.velocityX = 1;
                    this.velocityY = 0;
                }
                break;

            case "ArrowLeft":
                if (this.velocityX != 1) {
                    this.velocityX = -1;
                    this.velocityY = 0;
                }
                break;
        }
    }

    isAteFood(x, y, foodType) {
        if (foodType === "apple" && this.snakeHeadX == x && this.snakeHeadY == y) {
            this.tail.push({ x, y });
            return true;
        } else if (foodType === "stub" && this.snakeHeadX == x && this.snakeHeadY == y) {
            return true;
        }
        return false;
    }
}

export { Snake };
