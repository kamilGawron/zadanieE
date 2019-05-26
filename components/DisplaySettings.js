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
            <label>Minimalny procentowy poziom baterii samochodu
                <input name="minBatteryLevel" onChange={props.inputChange} min="0" max="100" id="minBatteryInput" type="range" value={props.minBatteryLevel}/>
                <input name="minBatteryLevel" onChange={props.inputChange} min="0" max="100" id="minBatteryInput" type="text" value={props.minBatteryLevel}/>
            </label>
            <label>Minimalny zasięg kilometrów
                <input name="minRange" onChange={props.inputChange} min="0" id="minRangeInput" type="number" value={props.minRange}/>
                <input name="minRange" onChange={props.inputChange} min="0" max={props.maxRange} id="minRangeInput" type="range" value={props.minRange}/>
            </label>
            {
             props.minBatteryLevel!=0||
             props.minRange!=0?
                 props.filterCarLen==props.cars.length?
                 <span>Wszystkie samochody spełniają określone kryteria</span>:
                 <span>znaleziono: {props.filterCarLen}</span> 
             : ""
            }
        </div>
       
    )
}

export default DisplaySettings