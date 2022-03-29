import React from "react";
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Brightness4Icon from '@mui/icons-material/Brightness4';

import {useTheme, useUpdateTheme} from "./ThemeContext/ThemeContext.jsx";

const Header =  () => {
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();
    
    const theme = {
      backgroundColor: darkTheme ? "#202124" : "#0353a4",
      border: darkTheme && "solid 1px #eee"
    }

    return(
        <div onClick={toggleTheme}>
         {darkTheme ? (
            <Brightness4Icon fontSize = 'large' sx={{color:"white"}} />
            ) : (
            <ModeNightIcon fontSize = 'large' sx={{color:"white"}} />
            )}
        </div>
        
        // <Fragment>
        //     {(modoNoche === true) ? (
            
        //     <button 
        //         type= 'button' 
        //         onClick={ (e) =>{
        //             e.preventDefault()
        //             setModoNoche(false)
        //             localStorage.setItem('modo', modoNoche)
        //         }}
        //     > Modo día 
        //     </button>

        // ) : (
        //     <button 
        //         type= 'button' 
        //         onClick={ (e) =>{
        //             e.preventDefault()
        //             setModoNoche(true)
        //             localStorage.setItem('modo', modoNoche)
        //         }}
        //     > Modo noche 
        //     </button>
        // ) }
        // </Fragment>
    )
}

export default Header