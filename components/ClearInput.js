import React from "react"

export default function ClearInput(props){
    return (
        <span key="" onClick={()=>{
                props.inputChange({
                    target:{
                        name:props.name,
                        value:props.value
                    }
                })
            }} className="clear-input">&#9747;
        </span>
    )
}