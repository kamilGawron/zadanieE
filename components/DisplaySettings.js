import React,{useState} from 'react'

function DisplaySettings(props){
    return(
        <div className="settings">
            <span>Samochody ({props.cars.length})</span>
            <label className="switch">
                <input id="carsToggler" type="checkbox" onChange={props.carsToggler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            <span>Parkingi ({props.parkings.length})</span>
            <label className="switch">
                <input id="parkingsToggler" type="checkbox" onChange={props.parkingsToggler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            <span>POI ({props.pois.length})</span>
            <label className="switch">
                <input id="poisToggler" type="checkbox" onChange={props.poisToggler} defaultChecked/>
                <span className="slider round"></span>
            </label>
            <label>Minimalny poziom baterii samochodu
                <input onChange={props.minBatteryLevelChange} min="0" max="100" id="minBatteryInput" type="number" value={props.minBatteryLevel}/>
            </label>
        </div>
       
    )
}

export default DisplaySettings