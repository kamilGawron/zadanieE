import React from "react"
import InputFiltersRow from './InputFiltersRow'
import FiltersResult from './FiltersResult'


export default function ParkingsSettings(props){
    return(
        <div key="" className="parkings">
            <h6>Filtruj parkingi:</h6>
            <InputFiltersRow
                title="Minimalna dostępna liczba miejsc"
                name="minSpaces"
                inputChange={props.inputChange}
                value={props.minSpaces}
                max={props.maxSpaces}
                clearInput={props.minSpaces!=0? true:false}
            />
            {props.minSpaces!=0?
                <FiltersResult
                    change={props.filterParkingLen}
                    default={props.parkingsLen}
                    type="parkingi"
                />
                :
                <span>&nbsp;</span>
            }
        </div>
    )
}