import React from "react"
import shortid from "shortid"

export default function ClearInput(props){
    return (
        <span key={shortid.generate()} onClick={()=>{
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