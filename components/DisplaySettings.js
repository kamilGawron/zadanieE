import React,{useState} from 'react'

function DisplaySettings(props){
    return(
        <div className="settings">
            <button onClick={props.clickHandler}>button</button>
            <label className="switch">
                <input type="checkbox" onChange={props.clickHandler} checked={props.showCars}/>
                <span className="slider round"></span>
            </label>
        </div>
       
    )
}

export default DisplaySettings