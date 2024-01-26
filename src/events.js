import globals from "./globals.js";


export function KeydownHandler(event)
{

    const PLAYER = globals.sprites.find((Player) => Player.id === SpriteID.PLAYER);
    const lamp = globals.sprites.find((lamp) => lamp.id === SpriteID.LAMP);
    const FIREBREATH = globals.sprites.find((Fire) => Fire.id === SpriteID.FIREBREATH);
    
    switch (event.code) 
    {
       
            case "ArrowRight":
                globals.action.moveRight = true;
                
                break;
            case "ArrowLeft":
                globals.action.moveLeft = true;
      
                break;
    
            case "ArrowUp":
                globals.action.menuUp  = true;
                
                
                break;
            
            case "ArrowDown":
    
                    globals.action.menuDown  = true;
                    
                    
                    break;
    
            default:
                break;
    }
}

export function KeyupHandler(event)
{
    const lamp = globals.sprites.find((Lamp) => Lamp.id === SpriteID.LAMP);

    switch (event.code) {
        case "ArrowRight":
            globals.action.moveRight = false;
            
            break;
        case "ArrowLeft":
            globals.action.moveLeft = false;
  
            break;

        case "ArrowUp":
            globals.action.menuUp  = false;
            
            
            break;
        
        case "ArrowDown":

                globals.action.menuDown  = false;
                
                
                break;

        default:
            break;
    }
}