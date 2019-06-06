import React from "react"
import ViewSettings from './ViewSettings'

export default function GeneralSettings(props){
    return(
        <div className="general">
            <h6>Wybierz elementy jakie chcesz zobaczyć na mapie:</h6>
            <div>
                <ViewSettings
                    title="Samochody"
                    data={props.cars}
                    toggler={props.carsToggler}
                    inputId = "carsToggler"
                />
                <ViewSettings
                    title="Parkingi"
                    data={props.parkings}
                    toggler={props.parkingsToggler}
                    inputId = "parkingsToggler"
                />
                <ViewSettings
                    title="POI"
                    data={props.pois}
                    toggler={props.poisToggler}
                    inputId = "poisToggler"
                />
                <div>
                    Filtruj 
                    <span onClick={props.showFilters} className="filters-icon">&#9776;</span>
                </div>
            </div>
        </div>
    )
}