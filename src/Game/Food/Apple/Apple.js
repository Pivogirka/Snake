import { Food } from "../Food.js";

class Apple extends Food {
    constructor() {
        super();
    }

    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, this.unitSize, this.unitSize);
    }
}

export { Apple };
