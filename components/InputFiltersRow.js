import React from "react"
import ClearInput from './ClearInput'
import InputGenerator from './InputGenerator'

export default function InputFiltersRow(props){
    return(
        <React.Fragment>
            <label htmlFor={`${props.name}Input`}>
                {props.title}
            </label>
            <div>
                <InputGenerator 
                    {...props}
                    id={`${props.name}Input`} 
                    type="range"
                />
                <InputGenerator 
                    {...props}
                    type="number"
                    />
                {props.clearInput?
                    <ClearInput
                        inputChange={props.inputChange}
                        name={props.name}
                        value="0"
                    />
                    :
                    <span className="clear-input">&nbsp;</span>
                }
            </div>
        </React.Fragment>
    )
}