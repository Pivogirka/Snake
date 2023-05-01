import { Game } from "./Game/Game.js";
import { Snake } from "./Game/Snake/Snake.js";
import { Board } from "./Game/Board/Board.js";
import { Apple } from "./Game/Food/Apple/Apple.js";
import { Stub } from "./Game/Food/Stub/Stub.js";

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
    stub.draw(board.Context);
    snake.draw(board.Context);
    game.drawLives(board.Context);

    if (game.isOver(snake.snakeHeadX, snake.snakeHeadY, snake.tail, board, apple)) {
        clearInterval(gameLoop);
        alert("Game over");
    } else {
        if (snake.isAteFood(apple.x, apple.y, "apple")) {
            apple.generatePosition(snake.tail);
        }
        if (snake.isAteFood(stub.x, stub.y, "stub")) {
            game.liveLoss();
            stub.generatePosition(snake.tail);
        }
    }
}
