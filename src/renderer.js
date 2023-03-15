import { Game } from "./Game/Game.js";
import { Snake } from "./Snake/Snake.js";
import { Board } from "./Board/Board.js";
import { Apple } from "./Apple/Apple.js";
import { Stub } from "./Stub/Stub.js";
//canvas.width = canvas.clientWidth;
//canvas.height = canvas.clientHeight;
const board = new Board();
const snake = new Snake();
const game = new Game();
const apple = new Apple();
const stub = new Stub();

const gameLoop = setInterval(updateFrames, 150);
document.addEventListener("keydown", (e) => snake.changeDirection(e));

apple.generatePosition(snake.tail);
stub.generatePosition(snake.tail);

function updateFrames() {
  board.update();
  snake.moving();
  apple.draw(board.Context);
  snake.draw(board.Context);
  stub.draw(board.Context);

  if (
    game.isOver(snake.snakeHeadX, snake.snakeHeadY, snake.tail, board, apple)
  ) {
    clearInterval(gameLoop);
    alert(" Game Over ");
  }
  if (snake.isAteApple(apple.appleX, apple.appleY)) {
    apple.generatePosition(snake.tail);
  }
}
