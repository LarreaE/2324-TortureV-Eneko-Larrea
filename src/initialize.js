import globals from "./globals.js";
import { FPS, Game } from "./constants.js";
import { Level, level1 } from "./Level.js";
import { KeydownHandler, KeyupHandler } from "./events.js";
import Timer from "./Timer.js";

//funcion que inicializa los elementos HTML
function initHTMLelements()
{
    //canvas
    globals.canvas = document.getElementById('gameScreen');

    //context
    globals.ctx = globals.canvas.getContext('2d');

    
    //eliminacion del anti-aliasing
    globals.ctx.imageSmoothingEnabled = false;

    //caja de texto de pruebas
    globals.txtPruebas = document.getElementById('txtPruebas');

}

//funcion que inicializa las variables del juego
function initVars()
{
    //inicializamos las variables de gestion de tiempo
    globals.previousCycleMilliseconds = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS;  //frame time in seconds

    //inicializamos el estado de juego
    globals.gameState = Game.PLAYING;

    //inicializamos los estados de las acciones
    globals.action = {

        moveLeft: false,
        moveRight: false,
        moveUp:     false,
        moveDown: false,

    }

    //variables de logica de juego
    globals.life = 3;
    globals.playerPos = [7,8];

    let filChanches = [1,10];
    let colChances  = [1,15];


    let randomFil = Math.random() * 10;
    if (randomFil < 5) {
        randomFil = filChanches[0];
    }
    else {
        randomFil = filChanches[1];
    }

    let randomCol = Math.random() * 10;

    if (randomCol < 5) {
        randomCol = colChances[0];
    }
    else {
        randomCol = colChances[1];
    }

    globals.spiderPos = [randomFil,randomCol]
}

//carga de activos:TILEMAPS, IMAGES, SOUNDS
function loadAssets()
{

    let brick = "\u2B1c";

    //load the tileset image
    globals.tileSets.push(brick)
    globals.assetsToLoad.push(brick);

    let player = "\u{1F474}";
    globals.emotes.push(player)
    globals.assetsToLoad.push(player);

    let spider = "\u{1F577}";
    globals.emotes.push(spider)
    globals.assetsToLoad.push(spider);

    let money = "\u{1F4B5}";
    globals.emotes.push(money)
    globals.assetsToLoad.push(money);

    let heart = "\u{1F49A}";
    globals.emotes.push(heart)
    globals.assetsToLoad.push(heart);


    
}
//funcion que llama cada vez que se carga un activo
function loadHandler()
{
    globals.assetsLoaded++;

    //una vez se han cargado todos los activos pasamos
    if (globals.assetsLoaded === globals.assetsToLoad.length)
    {

            //remove the load event listener
        for (let i = 0; i < globals.tileSets.length; ++i) {
            
            globals.tileSets[i].removeEventListener("load", loadHandler, false);
        
        }
        
        for (let i = 0; i < globals.sounds.length; i++) {
            
            globals.sounds[i].removeEventListener("canplaythrough", loadHandler, false);
            
        }

        console.log("Assets finished loading");

        //start the game
        globals.gameState = Game.PLAYING;

    }

}

function initEvents()
{
    //add the keyboard event listeners
    window.addEventListener("keydown",  KeydownHandler,  false);
    window.addEventListener("keyup",    KeyupHandler,    false);
    
}

function initLevel()
{
    const map1 = new Level(level1);

    globals.level.push(map1);

}

function initTimers()
{
    globals.spiderTimer   = new Timer(1, 0.5);

}
export {

    initHTMLelements,
    initVars,
    loadAssets,
    initLevel,
    initEvents,
    initTimers,

}