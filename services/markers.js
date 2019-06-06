import React from 'react'
import CustomMarker from '../components/CustomMarker'
import CustomCarPopup from '../components/CustomCarPopup'
import carIconAvailable from './icons/carIconAvailable'
import carIconUnavailable from './icons/carIconUnavailable'
import parkingIcon from './icons/parkingIcon'
import poiIcon from './icons/poiIcon'
import CustomParkingPopup from '../components/CustomParkingPopup'
import CustomPoiPopup from '../components/CustomPoiPopup'


export function carMarkers(cars,showCars){
    let tmpCars = showCars?  
        cars.map(function(elem,index){
            return(
                <CustomMarker
                    {...elem} 
                    key={index} 
                    icon ={elem.status=="AVAILABLE"? carIconAvailable:carIconUnavailable} 
                    popup={<CustomCarPopup {...elem} />}
                />
            )
        }) 
        : [] ;
    return tmpCars;
}
export function parkingMarkers(parkings,showParkings){
    let tmpParkings = showParkings?  
        parkings.map(function(elem,index){
            return(
                <CustomMarker
                    {...elem} 
                    key={index} 
                    icon ={parkingIcon} 
                    popup={<CustomParkingPopup {...elem} />}
                />
            )
        }) 
    : [] ;
    return tmpParkings;
}
export function poiMarkers(pois,showPois){
    let tmpPois = showPois?  
        pois.map(function(elem,index){
            return(
                <CustomMarker
                    {...elem} 
                    key={index} 
                    icon ={poiIcon} 
                    popup={<CustomPoiPopup {...elem} />}
                />
            )
        }) 
    : [] ;
    return tmpPois;
}