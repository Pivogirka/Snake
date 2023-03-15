import { Apple } from "../Apple/Apple.js";

class Stub extends Apple {
  constructor() {
    super();
  }
  draw(context) {
    context.fillStyle = "green";
    context.fillRect(this.appleX, this.appleY, this.unitSize, this.unitSize);
  }
}

export { Stub };
