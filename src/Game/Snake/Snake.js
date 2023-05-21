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
        this.headX = this.tail[0].x;
        this.headY = this.tail[0].y;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    draw(context) {
        //reposition of tail
        for (let i = this.tail.length - 1; i > 0; i--) {
            this.tail[i] = this.tail[i - 1];
        }
        this.tail[0] = { x: this.headX, y: this.headY };

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
        this.headX += this.velocityX * this.unitSize;
        this.headY += this.velocityY * this.unitSize;
    }

    restart() {
        this.tail = [
            {
                x: this.unitSize * this.startCoords,
                y: this.unitSize * this.startCoords,
            },
        ];
        this.headX = this.tail[0].x;
        this.headY = this.tail[0].y;
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
        if (foodType === "apple" && this.headX == x && this.headY == y) {
            this.tail.push({ x, y });
            return true;
        } else if (foodType === "stub" && this.headX == x && this.headY == y) {
            return true;
        }
        return false;
    }
}

export { Snake };
