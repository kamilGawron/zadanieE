import React from 'react'
import {Popup} from 'react-leaflet'

function CustomPoiPopup(props){
    return(
        <Popup>
            <div className="poi">
                <h3>{props.name}</h3>
                <div>{props.category}</div>
                <div className="content">
                    {props.address.street?
                   <div>
                        <span className="title">
                            Adres:
                        </span>
                        <span className="desc">
                            {props.address.street}
                        </span>
                    </div> : ""}
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

export default CustomPoiPopup