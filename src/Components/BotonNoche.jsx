import React, { Fragment, useState } from "react";


const BotonNoche =  () => {
    const [modoNoche, setModoNoche] = useState(false)
    return(
        <Fragment>
            {(modoNoche === true) ? (
            <button 
                type= 'button' 
                onClick={ (e) =>{
                    e.preventDefault()
                    setModoNoche(false)
                    localStorage.setItem('modo', modoNoche)
                }}
            > Modo día 
            </button>

        ) : (
            <button 
                type= 'button' 
                onClick={ (e) =>{
                    e.preventDefault()
                    setModoNoche(true)
                    localStorage.setItem('modo', modoNoche)
                }}
            > Modo noche 
            </button>
        ) }
        </Fragment>
    )
}

export default BotonNoche