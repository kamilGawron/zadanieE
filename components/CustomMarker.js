import React from 'react'
import {Marker} from 'react-leaflet'


function CustomMarker(props){
    return(
        <Marker 
            key={props.index} 
            position={[props.location.latitude,props.location.longitude]}
            icon ={props.icon}
        >
            {props.popup}

        </Marker>
    )
}
export default CustomMarker