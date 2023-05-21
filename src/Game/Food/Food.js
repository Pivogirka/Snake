import { Game } from "../Game.js";

class Food extends Game {
    constructor() {
        super();
        this.x = Math.floor(Math.random() * this.rows) * this.unitSize;
        this.y = Math.floor(Math.random() * this.cols) * this.unitSize + 50;
    }

    generatePosition(snakeTail, anotherFood) {
        this.x = Math.floor(Math.random() * this.rows) * this.unitSize;
        this.y = Math.floor(Math.random() * this.cols) * this.unitSize + 50;

        if (this.canSpawn(anotherFood, snakeTail)) {
            //prevents drawing food in the snake
            for (let i = 0; i < snakeTail.length; i++) {
                if (snakeTail[i].x == this.x && snakeTail[i].y == this.y) {
                    this.generatePosition(snakeTail, anotherFood);
                    break;
                }
            }
        } else {
            this.generatePosition(snakeTail, anotherFood);
        }
    }

    canSpawn(anotherFood, snakeTail) {
        //prevents drawing food in the food
        for (let i = 0; i < snakeTail.length; i++) {
            if (anotherFood.x == this.x && anotherFood.y == this.y) {
                return false;
            }
        }
        return true;
    }

    draw(context) {
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.unitSize, this.unitSize);
    }
}

export { Food };
