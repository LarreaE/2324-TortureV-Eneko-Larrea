//variables globales

import {Game} from './constants.js';

export default {
    
    //Acceso al canvas y context

    canvas: {},
    ctx: {},
    
    tileSets: [],

    //variables para gestionar la carga de activos
    assetsToLoad: [],
    assetsLoaded: 0,
    
    emotes: [],
    
    //estado del juego inicializamos INVALID   
    gameState: Game.INVALID,

    //tiempo de ciclo anterior (milliseconds)
    previousCycleMilliseconds: -1,

    //tiempo de ciclo de juego real (seconds)
    deltaTime: 0,
    cycleRealTime: 0,

    //tiempo de ciclo objetivo(Seconds, constante)
    frameTimeObj: 0,

    //Caja de texto para mostrar datos de depuracion
    txtPruebas: {},

    //datos del nivel
    level: [],

    //OBJETO QUE GUARDA EL ESTADO DE LA TECLA PULSADA
    action: {},

    //player previous state
    previousUp: false,
    previousLeft: false,
    previousRight: false,
    previousDown: false,

    spiderTimer: [],

    //life
    life: 0,
    
    //score
    score: 0,
    
    playerPos: [],

    spiderPos: [],

    moneyPos: [],

    spiderCanUp: false,
    spiderCanDown: false,
    spiderCanLeft: false,
    spiderCanRight: false,

    isThereMoney: false,
}