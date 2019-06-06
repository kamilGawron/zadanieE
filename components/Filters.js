import React from "react"
import CarsSettings from './CarsSettings'
import ParkingsSettings from './ParkingsSettings'


export default function Filters(props){
    return(
        <div id="filters" className="specific-settings">
            <div onClick={props.showFilters} className="close">&#9747;</div>
            <CarsSettings
                availableToggler={props.availableToggler}
                inputChange={props.inputChange}
                minBatteryLevel={props.minBatteryLevel}
                maxRange={props.maxRange}
                minRange={props.minRange}
                filterCarLen={props.filterCarLen}
                carsLen={props.carsLen}
            />
            <ParkingsSettings
                inputChange={props.inputChange}
                minSpaces={props.minSpaces}
                filterParkingLen={props.filterParkingLen}
                parkingsLen={props.parkingsLen}
                maxSpaces={props.maxSpaces}
            />
        </div>
    )
}