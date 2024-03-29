
//Estados del juego

export const Game = {
    
    INVALID:   -1,
    LOADING:    0,
    PLAYING:    1,
    GAME_OVER:  2,

};

export const mapWidth = 17; //bloques
export const mapHeight = 12; //bloques 
export const blockDim = 19 // pixeles de alto y de ancho
export const FPS = 30;

export const EMOTICON = {
    
    PLAYER: 0,
    SPIDER: 1,
    MONEY:  2,
    HEART:  3,

}

export const SPIDER = {
         UP    : 0,
         DOWN  : 1,
         LEFT  : 2,
         RIGHT : 3,
}