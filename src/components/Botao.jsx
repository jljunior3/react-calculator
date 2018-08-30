import React from 'react'
import './Botao.css'

export default props => {
    let classes = 'botao '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    return (        
        <button 
        onClick={e => props.click(props.label)}
        className={classes}>
            {props.label}
        </ button>
    )
}
    