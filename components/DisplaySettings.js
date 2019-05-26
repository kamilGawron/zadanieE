import React,{useState} from 'react'

function DisplaySettings(props){
    return(
        <div className="settings">
            <span>Samochody</span>
            <label className="switch">
                <input id="carsToggler" type="checkbox" onChange={props.carsToggler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            <span>Parkingi</span>
            <label className="switch">
                <input id="parkingsToggler" type="checkbox" onChange={props.parkingsToggler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            <span>POI</span>
            <label className="switch">
                <input id="poisToggler" type="checkbox" onChange={props.poisToggler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            <label>Minimalny poziom baterii samochodu
                <input onChange={props.minBatteryLevelChange} min="0" max="100" id="minBatteryInput" type="number"/>
            </label>
        </div>
       
    )
}

export default DisplaySettings