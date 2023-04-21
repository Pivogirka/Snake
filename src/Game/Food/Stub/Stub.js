import { Food } from "../Food.js";

class Stub extends Food {
    constructor() {
        super();
    }

    draw(context) {
        context.fillStyle = "green";
        context.fillRect(this.x, this.y, this.unitSize, this.unitSize);
    }
}

export { Stub };
