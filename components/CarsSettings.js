import React from "react"
import InputFiltersRow from './InputFiltersRow'
import AvailableSwitcher from './AvailableSwitcher'
import FiltersResult from './FiltersResult'
export default function CarsSettings(props){
    return(
        <div key="" className="cars">
            <h6>Filtruj samochody:</h6>
            <AvailableSwitcher
                availableToggler={props.availableToggler} 
            />
            <InputFiltersRow
                title="Minimalny procentowy poziom baterii samochodu"
                name="minBatteryLevel"
                inputChange={props.inputChange}
                value={props.minBatteryLevel}
                clearInput={props.minBatteryLevel!=0? true:false}
              />
            <InputFiltersRow
                title="Minimalny zasięg kilometrów"
                name="minRange"
                inputChange={props.inputChange}
                max={props.maxRange}
                value={props.minRange}
                clearInput={props.minRange!=0? true:false}
                />
            {props.minBatteryLevel!=0||props.minRange!=0?
                <FiltersResult
                    change={props.filterCarLen}
                    default={props.carsLen}
                    type="samochody"
                 />
                : 
                <span>&nbsp;</span>
            }
        </div>
    )
}