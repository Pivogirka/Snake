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

game.configure(updateFrames, snake);

function updateFrames() {
    if (game.isOver(snake.headX, snake.headY, snake.tail, board, apple)) {
        game.over();
    } else {
        board.update();
        snake.moving();

        if (snake.isAteFood(apple.x, apple.y, "apple")) {
            apple.generatePosition(snake.tail);
        } else if (snake.isAteFood(stub.x, stub.y, "stub")) {
            game.liveLoss();
            stub.generatePosition(snake.tail);
        }

        apple.draw(board.Context);
        stub.draw(board.Context);
        snake.draw(board.Context);
        game.drawInfo(board.Context);
        game.drawHead(board.Context, snake.headX, snake.headY);
    }
}
