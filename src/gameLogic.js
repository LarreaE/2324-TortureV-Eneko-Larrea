import globals from "./globals.js";
import { Game } from "./constants.js";


export default function update()
{
    
    //change what the game is doing based on the game state
    switch(globals.gameState)
    {
        case Game.LOADING:
            console.log("Loading assets...");
            break;

        case Game.PLAYING:
            updatePlaying();
            break;
       
        case Game.GAME_OVER:
            console.log("game over...");
            updateGameOver();
            break;

            
        default:
            console.error("error:error")


    }


}

function updatePlaying()
{
    if (globals.action.moveUp && globals.previousUp === false) {
        console.log("moveup");
        globals.playerPos[0] -= 1;  //va hacia arriba
    }
    else if (globals.action.moveDown && globals.previousDown === false) {
        console.log("movedow");
        globals.playerPos[0] += 1;  //va hacia abajo
    }
    else if (globals.action.moveLeft && globals.previousLeft === false) {
        console.log("moveulef");
        globals.playerPos[1] -= 1;  //va hacia la izquierda
    }
    else if (globals.action.moveRight && globals.previousRight === false) {
        console.log("moverigth");
        globals.playerPos[1] += 1;  //va hacia la derecha
    }

    globals.previousDown    = globals.action.moveDown;
    globals.previousUp      = globals.action.moveUp;
    globals.previousLeft    = globals.action.moveLeft;
    globals.previousRight   = globals.action.moveRight;

}