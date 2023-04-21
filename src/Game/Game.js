class Game {
    constructor() {
        this.unitSize = 25;
        this.rows = 20;
        this.cols = 20;
        this.startCoords = 5;
        //TODO: write system of lives
        this.lives = 3;
    }

    // TODO: rewrite isOver to use it more flexible
    isOver(snakeHeadX, snakeHeadY, snakeTail, board, apple) {
        if (
            snakeHeadX < 0 ||
            snakeHeadX > board.width ||
            snakeHeadY < 0 ||
            snakeHeadY > board.heigth
        ) {
            return true;
        }

        // TODO: test it
        for (let i = 1; i < snakeTail.length; i++) {
            if (snakeHeadX == snakeTail[i].x && snakeHeadY == snakeTail[i].y) {
                //? don't need this check, working without it
                // if (snakeHeadX == apple.x && snakeHeadY == apple.y) {
                //     return false;
                // }
                return true;
            }
        }
        return false;
    }
}

export { Game };
