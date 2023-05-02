import { Game } from "../Game.js";

class Food extends Game {
    constructor() {
        super();
        this.x = Math.floor(Math.random() * this.rows) * this.unitSize;
        this.y = Math.floor(Math.random() * this.cols) * this.unitSize + 50;
    }

    generatePosition(snakeTail) {
        this.x = Math.floor(Math.random() * this.rows) * this.unitSize;
        this.y = Math.floor(Math.random() * this.cols) * this.unitSize + 50;

        //prevents drawing apple in the snake
        //!test this
        for (let i = 0; i < snakeTail.length; i++) {
            if (snakeTail[i].x == this.x && snakeTail[i].y == this.y) {
                this.generatePosition(snakeTail);
            }
        }
    }

    draw(context) {
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.unitSize, this.unitSize);
    }
}

export { Food };
