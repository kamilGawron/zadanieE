import React,{useEffect} from 'react'
import GeneralSettings from './GeneralSettings'
import Filters from './Filters'
import {log} from './App'

function showFilters(){
    log("msg from display")
    let filters = document.getElementById("filters");
    filters.style.display = filters.style.display=="flex"? "none":"flex";
    let zoom = document.getElementsByClassName("leaflet-control");
    if(window.innerWidth<=768){
        zoom[0].style.display = zoom[0].style.display=="block"? "none":"block";
    }
}

export default function DisplaySettings(props){
    useEffect(()=>{
        document.getElementById("filters").style.display="none";
        let zoom = document.getElementsByClassName("leaflet-control");
        zoom[0].style.display="block";
    },[])
    
    return(
        <div className="settings">    
            <GeneralSettings
                cars={props.cars}
                parkings={props.parkings}
                pois={props.pois}
                carsToggler={props.carsToggler}
                parkingsToggler={props.parkingsToggler}
                poisToggler={props.poisToggler}
                showFilters={showFilters}
            />
            <Filters
                showFilters={showFilters}
                availableToggler={props.availableToggler}
                inputChange={props.inputChange} 
                minBatteryLevel={props.minBatteryLevel}
                maxRange={props.maxRange}
                minRange={props.minRange}
                filterCarLen={props.filterCarLen}
                carsLen={props.cars.length}
                minSpaces={props.minSpaces}
                maxSpaces={props.maxSpaces}
                filterParkingLen={props.filterParkingLen}
                parkingsLen={props.parkings.length}
            />
        </div>
    )
}
