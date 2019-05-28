import React from 'react'
import {Popup} from 'react-leaflet'

function CustomCarPopup(props){
    return(
        <Popup>
            <div className="car">
                <h3>{props.name}</h3>
                {props.status=="AVAILABLE"? 
                    <div style={{color:"green"}}>Dostępny</div>:
                    <div style={{color:"red"}}>Niedostępny</div>
                }
                <div className="content">
                    {props.address?
                        <div>
                            <span className="title">
                                Adres:
                            </span>
                            <span className="desc">
                                {props.address}
                            </span>
                        </div> : ""
                    }
                    <div>
                        <span className="title">
                            Poziom baterii:
                        </span>
                        <span className="desc">
                            {props.batteryLevelPct}%
                        </span>
                    </div>
                    <div>
                        <span className="title">
                            Kolor:
                        </span>
                        <span className="desc">
                            {props.color}
                        </span>
                    </div>
                    <div>
                        <span className="title">
                            Zasięg:
                        </span>
                        <span className="desc">
                            {props.rangeKm}km
                        </span>
                    </div>
                    <div>
                        <span className="title">
                            Rejestracja:
                        </span>
                        <span className="desc">
                            {props.platesNumber}
                        </span>
                    </div>
                    
                </div>
            </div>
        </Popup>
    )
}

export default CustomCarPopup