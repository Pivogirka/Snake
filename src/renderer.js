import { Game } from "./Game/Game.js";
import { Snake } from "./Game/Snake/Snake.js";
import { Board } from "./Game/Board/Board.js";
import { Apple } from "./Game/Food/Apple/Apple.js";
import { Stub } from "./Game/Food/Stub/Stub.js";
import { restart } from "./Game/restart.js";

//canvas.width = canvas.clientWidth;
//canvas.height = canvas.clientHeight;
const board = new Board();
const snake = new Snake();
const game = new Game();
const apple = new Apple();
const stub = new Stub();

document.addEventListener("keydown", (e) => snake.changeDirection(e));
document.getElementById("restart").onclick = () => restart(game, updateFrames, snake);
game.loop = setInterval(updateFrames, 150);

game.gameOverDOM = document.getElementById("gameoverMenu");

apple.generatePosition(snake.tail);
stub.generatePosition(snake.tail);

function updateFrames() {
    if (game.isOver(snake.snakeHeadX, snake.snakeHeadY, snake.tail, board, apple)) {
        game.over();
    } else {
        board.update();
        snake.moving();

        if (snake.isAteFood(apple.x, apple.y, "apple")) {
            apple.generatePosition(snake.tail);
        }
        if (snake.isAteFood(stub.x, stub.y, "stub")) {
            game.liveLoss();
            stub.generatePosition(snake.tail);
        }

        apple.draw(board.Context);
        stub.draw(board.Context);
        snake.draw(board.Context);
        game.drawLives(board.Context);
        game.drawHead(board.Context, snake.snakeHeadX, snake.snakeHeadY);
    }
}
