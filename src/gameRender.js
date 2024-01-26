import globals from "./globals.js";
import { Game } from "./constants.js";


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

    renderEmoticon();

    //dibujamos HUD
    renderHUD();
}
function renderMap()
{
    globals.ctx.font = '14px';
    globals.ctx.fillText("\u2B1c", 0, 50);
}
function renderEmoticon()
{
    globals.ctx.fillText(globals.emotes[0], 0, 70);

}

function renderHUD()
{
        // Draw score
    globals.ctx.font = '16px emulogic';
    globals.ctx.fillStyle = 'purple';
    globals.ctx.fillText("Score", 0, 30);

}