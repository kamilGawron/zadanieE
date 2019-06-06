import React from "react"

export default function ViewSettings(props){
    return(
        <div>
            <span>{props.title} ({props.data.length})</span>
            <label className="switch">
                <input id={props.inputId} type="checkbox" onChange={props.toggler} defaultChecked/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}