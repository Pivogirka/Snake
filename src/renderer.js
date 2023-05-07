import { Game } from "./Game/Game.js";
import { Snake } from "./Game/Snake/Snake.js";
import { Board } from "./Game/Board/Board.js";
import { Apple } from "./Game/Food/Apple/Apple.js";
import { Stub } from "./Game/Food/Stub/Stub.js";

//canvas.width = canvas.clientWidth;
//canvas.height = canvas.clientHeight;
const board = new Board();
const snake = new Snake();
const game = new Game(board.Context);
const apple = new Apple();
const stub = new Stub();

game.configure(updateFrames, snake, board, apple);
console.log(externalLibraries.nodeVersion());
function updateFrames() {
    snake.moving();

    if (game.isOver(snake.headX, snake.headY, snake.tail, board, apple)) {
        game.over();
    } else {
        board.update();

        if (snake.isAteFood(apple.x, apple.y, "apple")) {
            apple.generatePosition(snake.tail);
            game.addScore(board.Context);
        } else if (snake.isAteFood(stub.x, stub.y, "stub")) {
            game.liveLoss(board.Context);
            stub.generatePosition(snake.tail);
        }

        apple.draw(board.Context);
        stub.draw(board.Context);
        snake.draw(board.Context);
    }
}
