import React from 'react'
import {Marker} from 'react-leaflet'


function CustomMarker({index,location,icon,popup}){
    return(
        <Marker 
            key={index} 
            position={[location.latitude,location.longitude]}
            icon ={icon}
        >
            <React.Fragment>{popup}</React.Fragment>
        </Marker>
    )
}
export default CustomMarker