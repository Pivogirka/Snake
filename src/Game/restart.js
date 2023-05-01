export const restart = (game, updateFrames, snake) => {
    game.restart(updateFrames);
    snake.restart();
    console.log("restart");
};
