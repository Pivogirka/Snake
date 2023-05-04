export const restart = (game, updateFrames, snake, board) => {
    game.restart(updateFrames, board, snake);
    snake.restart();
};
