import React from 'react'
import {Popup} from 'react-leaflet'

function CustomParkingPopup(props){
    return(
        <Popup>
            <div className="parking">
                <h3>{props.name}</h3>
                <div className="content">
                    <div>
                        <span className="title">
                            Adres:
                        </span>
                        <span className="desc">
                            {props.address.street}&nbsp;{props.address.house}
                        </span>
                    </div>
                    <div>
                        <span className="title">
                            Liczba miejsc:
                        </span>
                        <span className="desc">
                            {props.spacesCount}
                        </span>
                    </div>
                    <div>
                        <span className="title">
                            Liczba wolnych miejsc:
                        </span>
                        <span className="desc">
                            {props.availableSpacesCount}
                        </span>
                    </div>
                    <div>
                        <span className="title">
                            Opis:
                        </span>
                        <span className="desc">
                            {props.description}
                        </span>
                    </div>
                </div>
            </div>
        </Popup>
    )
}

export default CustomParkingPopup