import globals from "./globals.js";


export function KeydownHandler(event)
{
    
    switch (event.code) 
    {
       
            case "ArrowRight":
                globals.action.moveRight = true;
                
                break;
            case "ArrowLeft":
                globals.action.moveLeft = true;
      
                break;
    
            case "ArrowUp":
                globals.action.moveUp  = true;
                
                
                break;
            
            case "ArrowDown":
    
                globals.action.moveDown  = true;
                    
                    
                    break;
    
            default:
                break;
    }
}

export function KeyupHandler(event)
{

    switch (event.code) {

        case "ArrowRight":
            globals.action.moveRight = false;
            
            break;
        case "ArrowLeft":
            globals.action.moveLeft = false;
  
            break;

        case "ArrowUp":
            globals.action.moveUp  = false;
            
            
            break;
        
        case "ArrowDown":

            globals.action.moveDown  = false;
                
                
                break;

        default:
            break;
    }
}