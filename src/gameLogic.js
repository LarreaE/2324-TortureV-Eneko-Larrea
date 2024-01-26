import globals from "./globals.js";
import { Game , mapHeight, mapWidth, SPIDER } from "./constants.js";


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
    gameOverConditions();
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

    takeMoney();
    takeDamage();

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
        globals.spiderTimer.value = 8;
    }
}
function spiderMove()
{
    let moveOptionCounter   = 0;
    globals.spiderCanDown   = false;
    globals.spiderCanUp     = false;
    globals.spiderCanLeft   = false;
    globals.spiderCanRight  = false;

    let options = []; //variable que da las opciones de movimiento

    if (globals.level[0].data[globals.spiderPos[0]-1][globals.spiderPos[1]] === 0) { //no hay colision arriba
        
        globals.spiderCanUp = true;
        moveOptionCounter += 1;
        options.push(globals.spiderCanUp);
    }
    else {

        options.push(false);

    }
    if (globals.level[0].data[globals.spiderPos[0]+1][globals.spiderPos[1]] === 0) { //no hay colision arriba
        
        globals.spiderCanDown = true;
        moveOptionCounter += 1;
        options.push(globals.spiderCanDown);

    }
    else {
        
        options.push(false);

    }
    if (globals.level[0].data[globals.spiderPos[0]][globals.spiderPos[1]-1] === 0) { //no hay colision arriba
        
        globals.spiderCanLeft = true;
        moveOptionCounter += 1;
        options.push(globals.spiderCanLeft);

    }
    else {
        
        options.push(false);

    }
    if (globals.level[0].data[globals.spiderPos[0]][globals.spiderPos[1]+1] === 0) { //no hay colision arriba
        
        globals.spiderCanRight = true;
        moveOptionCounter += 1;
        options.push(globals.spiderCanRight);

    }
    else {
        
        options.push(false);

    }
    console.log("options: " + options);
    let moving = [globals.spiderMovingUp,globals.spiderMovingDown,globals.spiderMovingLeft,globals.spiderMovingRight]
    console.log("moving: " + moving);
    console.log("spiderMoving: " + globals.spiderMoving);
    //ORDEN DE MOVIMIENTOS EN EL ARRAY 
    /* 
    0-UP
    1-DOWN
    2-LEFT
    3-RIGHT
    */

    if (moveOptionCounter > 2) // si tiene opciones que haga el cambio aleatorio 
    {
        globals.spiderMoving = false;
    }
    if (!globals.spiderMoving) { //no ha empezado a moverse
        
        globals.spiderMoving = true;

        let randomNum = Math.floor(Math.random()* options.length);

        if (options[SPIDER.UP] === true && randomNum === SPIDER.UP ) {
            console.log("BOP");
            globals.spiderMovingUp = true;
            globals.spiderPos[0] -= 1;

        }
        else if (options[SPIDER.DOWN] === true && randomNum === SPIDER.DOWN  ) {
            console.log("ca");
            
            globals.spiderMovingDown = true;
            globals.spiderPos[0] += 1;

        }
        else if (options[SPIDER.LEFT] === true && randomNum === SPIDER.LEFT ) {
            console.log("a");
            globals.spiderMovingLeft = true;
            globals.spiderPos[1] -= 1;

        }
        else if (options[SPIDER.RIGHT] === true && randomNum === SPIDER.RIGHT ) {
            console.log("ab");
            
            globals.spiderMovingRight = true;
            globals.spiderPos[1] += 1;

        }
    }
    else {  //continua camino
        if (globals.spiderMovingUp) {

            globals.spiderPos[0] -= 1;
            
        }
        else if (globals.spiderMovingDown) {

            globals.spiderPos[0] += 1;
            
        }
        else if (globals.spiderMovingLeft) {
            
            globals.spiderPos[1] -= 1;
            
        }
        else if (globals.spiderMovingRight) {
            
            globals.spiderPos[1] -= 1;

        }
    }
}
function updateMoney()
{
    
    if (!globals.isThereMoney) {

        for (let i = 0; i < mapHeight; i++) {

            for (let j = 0; j < mapWidth; j++) {
    
                if (globals.level[0].data[i][j] === 0) {
                    
                    let dice = Math.random() * 100;
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
function takeMoney()
{
    if (globals.playerPos[0] === globals.moneyPos[0] && globals.playerPos[1] === globals.moneyPos[1]) {
        
        globals.score += 100;
        globals.moneyPos[0] = -10; //desaparece
        globals.isThereMoney = false;
    }
}
function takeDamage()
{
    if (globals.playerPos[0] === globals.spiderPos[0] && globals.playerPos[1] === globals.spiderPos[1]) {
        
        globals.playerPos[0] = 7; //reset position
        globals.playerPos[1] = 8;
        
        globals.life -= 1;
        globals.isThereMoney = false;

        globals.spiderPos[0] = 1; //reset position
        globals.spiderPos[1] = 1;
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
function gameOverConditions()
{
    if (globals.life <= 0) {

        globals.gameState = Game.GAME_OVER;
    
    }
}