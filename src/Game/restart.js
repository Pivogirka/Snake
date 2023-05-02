export const restart = (game, updateFrames, snake, board, apple) => {
    game.restart(updateFrames, board, snake, apple);
    snake.restart();
    console.log("restart");
};
