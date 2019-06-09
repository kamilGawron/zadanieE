import React from "react"
const shortid = require('shortid');

export default function AvailableSwitcher(props){
    return (
        <div key={shortid.generate()}>
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