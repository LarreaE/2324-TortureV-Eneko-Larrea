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
    console.log(globals.level[0].data[0][8]);
    if (globals.action.moveUp && globals.previousUp === false) {
        globals.playerPos[0] -= 1;  //va hacia arriba

        if (globals.level[0].data[globals.playerPos[0]][globals.playerPos[1]] === 4) { //hay colision
            globals.playerPos[0] += 1; //ha habido colision, corregimos
            console.log("colision");
        }
    }
    else if (globals.action.moveDown && globals.previousDown === false) {
        globals.playerPos[0] += 1;  //va hacia abajo

        if (globals.level[0].data[globals.playerPos[0]][globals.playerPos[1]] === 4) { //hay colision
            globals.playerPos[0] -= 1; //ha habido colision, corregimos
            console.log("colision");

        }
    }
    else if (globals.action.moveLeft && globals.previousLeft === false) {
        globals.playerPos[1] -= 1;  //va hacia la izquierda

        if (globals.level[0].data[globals.playerPos[0]][globals.playerPos[1]] === 4) { //hay colision
            globals.playerPos[1] += 1; //ha habido colision, corregimos
            console.log("colision");

        }
    }
    else if (globals.action.moveRight && globals.previousRight === false) {
        globals.playerPos[1] += 1;  //va hacia la derecha

        if (globals.level[0].data[globals.playerPos[0]][globals.playerPos[1]] === 4) { //hay colision
            globals.playerPos[1] -= 1; //ha habido colision, corregimos
            console.log("colision");

        }
    }

    globals.previousDown    = globals.action.moveDown;
    globals.previousUp      = globals.action.moveUp;
    globals.previousLeft    = globals.action.moveLeft;
    globals.previousRight   = globals.action.moveRight;

}

function updateTimer(timer)
{
     //incrementamos el contador de cambio de valor
     timer.timeChangeCounter += globals.deltaTime;
    
     //si ha pasado el timepo necesario, cambiamos el valor del timer
     if (timer.timeChangeCounter > timer.timeChangeValue) {
         
         timer.value--;
 
         //reseteamos timeChangeCounter
         timer.timeChangeCounter = 0;
 
     }
}