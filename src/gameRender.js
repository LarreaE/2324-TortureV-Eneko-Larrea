import globals from "./globals.js";
import { Game ,mapHeight, mapWidth, blockDim} from "./constants.js";


//Funcion que renderiza los graficos
export default function render()
{
    //change what the game is doing based on the game state
    switch(globals.gameState)
    {
        case Game.LOADING:
            //draw loading
            break;

        case Game.PLAYING:
            
            drawGame();
            break;
       


        case Game.GAME_OVER:
            gameOver();
            break;
        

        default:
            console.error("Error: Game state invalid");

    }


}

function drawGame()
{
     //borramos la pantalla entera
     globals.ctx.clearRect(0,0,globals.canvas.width,globals.canvas.height);

    renderMap();

    //dibujamos HUD
    renderHUD();
}
function renderMap()
{
    globals.ctx.font = '20px';

    for (let i = 0; i < mapHeight; i++) {

        for (let j = 0; j < mapWidth; j++) {



            if (globals.level[0].data[i][j] === 4) {
                
                globals.ctx.fillText("\u2B1c",32 + blockDim * (j), 48 + blockDim * i);
                
            }  
            if (i === globals.playerPos[0] && j === globals.playerPos[1]) {
                
                globals.ctx.fillText(globals.emotes[0],32 + blockDim * (j), 48 + blockDim * i);
                
            } 
            if (i === globals.spiderPos[0] && j === globals.spiderPos[1]) {
                
                globals.ctx.fillText(globals.emotes[1],32 + blockDim * (j), 48 + blockDim * i);
                
            } 
            if (i === globals.moneyPos[0] && j === globals.moneyPos[1]) {
                
                globals.ctx.fillText(globals.emotes[2],32 + blockDim * (j), 48 + blockDim * i);
                
            } 
        }     
    }
}

function renderHUD()
{
        // Draw score
    globals.ctx.font = '16px emulogic';
    globals.ctx.fillStyle = 'purple';
    globals.ctx.fillText("Score:", 0, 26);
    globals.ctx.fillStyle = 'gray';
    globals.ctx.fillText(globals.score, 100, 26);


    drawHeart(globals.life)

}
function drawHeart(life)
{
    if (life === 1) {

        globals.ctx.fillText(globals.emotes[3], 200, 26);
        
    }
    else if (life === 2) {
        globals.ctx.fillText(globals.emotes[3], 200, 26);
        globals.ctx.fillText(globals.emotes[3], 232, 26);
        
    }
    else if (life === 3) {
        globals.ctx.fillText(globals.emotes[3], 200, 26);
        globals.ctx.fillText(globals.emotes[3], 232, 26);
        globals.ctx.fillText(globals.emotes[3], 264, 26);
        
    }
}