import React, { Fragment } from "react";
import PropTypes from 'prop-types'

import  "../styles/letraStyle.css";

const LetraCancion = (props) => {

    return(
        <Fragment>
            {props.letra === "" ? (
                <>
                </>
            ) : (
                <div className="lyricContainer">
                    <p className="letraStyle">{props.letra}</p>
                </div>
            )}
        </Fragment>
        
    )
}
LetraCancion.propTypes={
    letra: PropTypes.string
}
export default LetraCancion

