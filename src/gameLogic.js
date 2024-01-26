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

            break;
       
        case Game.GAME_OVER:
            console.log("game over...");
            updateGameOver();
            break;

            
        default:
            console.error("error:error")


    }


}