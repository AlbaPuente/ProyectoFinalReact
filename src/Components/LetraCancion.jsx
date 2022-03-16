import React from "react";
import PropTypes from 'prop-types'

const LetraCancion = (props) => {
    return(
        <p>{props.letra}</p>
    )
}
LetraCancion.propTypes={
    letra: PropTypes.string
}
export default LetraCancion

