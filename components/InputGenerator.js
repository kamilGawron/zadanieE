import React from 'react'

export default function InputGenerator(props){
    return(
        <input 
            id={props.id? `${props.name}Level`: ""}
            name={props.name} 
            onChange={props.inputChange} 
            min="0" 
            max={props.max? props.max : "100"} 
            type={props.type}
            value={props.value}
        />
    )
}