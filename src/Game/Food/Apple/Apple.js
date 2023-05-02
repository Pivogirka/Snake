import { Food } from "../Food.js";

class Apple extends Food {
    constructor() {
        super();
        this.apple = new Image();
    }

    draw(context) {
        // this.apple.onload = () => context.drawImage(this.apple, this.x, this.y, this.unitSize, this.unitSize);
        // this.apple.src = this.applePath;
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.unitSize, this.unitSize);
    }
}

export { Apple };
