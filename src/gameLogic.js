import globals from "./globals.js";
import { Game , mapHeight, mapWidth } from "./constants.js";


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
    updateplayer();
    updateSpider();
    updateMoney();
}
function updateplayer()
{
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
function updateSpider()
{
    updateTimer(globals.spiderTimer);

    if (globals.spiderTimer.value <= 0) {
        spiderMove();
        globals.spiderTimer.value = 2;
    }
}
function spiderMove()
{

}
function updateMoney()
{
    
    if (!globals.isThereMoney) {

        for (let i = 0; i < mapHeight; i++) {

            for (let j = 0; j < mapWidth; j++) {
    
    
    
                if (globals.level[0].data[i][j] === 0) {
                    
                    let dice = Math.random() * 100;
                    console.log(dice);
                    if (dice < 1) {
                        globals.isThereMoney = true;
                        globals.moneyPos[0] = i;
                        globals.moneyPos[1] = j;
                    }
                }  
            }
        }
    }
    
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