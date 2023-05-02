import { Game } from "../Game.js";

class Board extends Game {
    constructor() {
        super();

        this.width = this.unitSize * this.rows;
        this.heigth = this.unitSize * this.cols;

        this.Canvas = document.getElementById("gameBoard");
        this.Context = this.Canvas.getContext("2d");

        this.Canvas.width = this.width;
        this.Canvas.height = this.heigth + this.unitSize * 2;
    }

    update() {
        this.Context.clearRect(0, this.unitSize * 2, this.Canvas.width, this.Canvas.height);
        this.Context.lineWidth = 0.1;
        this.Context.strokeStyle = "white";
        for (let i = 50; i < 550; i += this.unitSize) {
            for (let j = 0; j < 500; j += this.unitSize) {
                this.Context.strokeRect(j, i, this.unitSize, this.unitSize);
            }
        }
    }

    updateInfoPanel() {
        this.Context.clearRect(0, 0, this.Canvas.width, this.unitSize * 2);
    }
}

export { Board };
