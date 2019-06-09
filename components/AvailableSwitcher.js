import React from "react"

export default function AvailableSwitcher(props){
    return (
        <div key="">
            <span>Tylko dostępne</span>
            <label className="switch">
                <input 
                    name="available" 
                    id="availableSwitcher" 
                    type="checkbox" 
                    onChange={props.availableToggler} 
                    defaultChecked
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}