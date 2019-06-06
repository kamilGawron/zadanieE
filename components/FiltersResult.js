import React from "react"

export default function FiltersResult(props){
    return(
        props.default==props.change?
        <span>Wszystkie {props.type} spełniają określone kryteria</span>:
        <span>znaleziono: {props.change}</span> 
    )
}