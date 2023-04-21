import { Game } from "../Game.js";

class Board extends Game {
    constructor() {
        super();
        this.width = this.unitSize * this.rows;
        this.heigth = this.unitSize * this.cols;

        this.Canvas = document.getElementById("gameBoard");
        this.Context = this.Canvas.getContext("2d");

        this.Canvas.width = this.width;
        this.Canvas.height = this.heigth;
    }

    update() {
        this.Context.clearRect(0, 0, this.Canvas.width, this.Canvas.height);
    }
}

export { Board };
