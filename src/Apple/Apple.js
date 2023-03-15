import { Game } from "../Game/Game.js";

class Apple extends Game {
  constructor() {
    super();
    //TODO: rewrite this variables to 'x' and 'y' to use it in snake.isAteStub
    this.appleX;
    this.appleY;
  }

  generatePosition(snakeTail) {
    this.appleX = Math.floor(Math.random() * this.rows) * this.unitSize;
    this.appleY = Math.floor(Math.random() * this.cols) * this.unitSize;

    //prevents drawing apple in the snake
    //!test this
    for (let i = 0; i < snakeTail.length; i++) {
      if (snakeTail[i].x == this.appleX && snakeTail[i].y == this.appleY) {
        this.generatePosition(snakeTail);
      }
    }
  }

  draw(context) {
    // // координати центру круга
    // const centerX = this.appleX;
    // const centerY = this.appleY;

    // // радіус круга
    // const radius = 15;

    // // намалювати круг
    // context.fillStyle = "red";
    // context.beginPath();
    // context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    // context.fill();
    // context.closePath();
    // /////////////////////////////

    // // координати верхньої лівої точки
    // const startX = centerX - 2;
    // const startY = centerY - 25;

    // //розмір листочка
    // const leafSize = this.unitSize - 10;
    // // намалювати квадрат з заокругленими кутами
    // context.fillStyle = "green";
    // context.beginPath();
    // context.moveTo(startX + leafSize, startY); // верхній правий кут
    // context.arcTo(
    //   startX + leafSize,
    //   startY + leafSize,
    //   startX,
    //   startY + leafSize,
    //   leafSize
    // ); // нижній правий кут
    // context.arcTo(startX, startY + leafSize, startX, startY, leafSize); // нижній лівий кут
    // context.arcTo(startX, startY, startX + leafSize, startY, leafSize); // верхній лівий кут
    // context.closePath();
    // context.stroke();
    // context.fill();
    context.fillStyle = "red";
    context.fillRect(this.appleX, this.appleY, this.unitSize, this.unitSize);
  }
}

export { Apple };
