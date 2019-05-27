import React, { Component } from 'react'
import { Map, TileLayer, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import L from 'leaflet'
import CustomCarPopup from './CustomCarPopup'
import CustomParkingPopup from './CustomParkingPopup'
import CustomPoiPopup from './CustomPoiPopup'
import CustomMarker from './CustomMarker'
import carIconAvailable from './icons/carIconAvailable'
import carIconUnavailable from './icons/carIconUnavailable'
import parkingIcon from './icons/parkingIcon'
import poiIcon from './icons/poiIcon'


export default class SampleMap extends Component {
    constructor(props){
        super(props);
        this.state={
            lat: 51.919438,
            lng: 19.145136,
            zoom: 7,
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        return  this.props.cars.length!=nextProps.cars.length || this.props.parkings.length!=nextProps.parkings.length || this.props.showCars!=nextProps.showCars|| this.props.showParkings!=nextProps.showParkings|| this.props.showPois!=nextProps.showPois
    }
    render() {
        let cars,parkings,pois;
        if(this.props.carsLoaded){
            cars = this.props.showCars?  this.props.cars.map(function(elem,index){
                return(
                    <CustomMarker
                        {...elem} 
                        key={index} 
                        icon ={elem.status=="AVAILABLE"? carIconAvailable:carIconUnavailable} 
                        popup={<CustomCarPopup {...elem} />}
                    />
                )
            }) : []
        }
        if(this.props.parkingsLoaded){
            parkings = this.props.showParkings? this.props.parkings.map(function(elem,index){
                return(
                    <CustomMarker
                         {...elem} 
                         key={index} 
                         icon ={parkingIcon} 
                         popup={<CustomParkingPopup {...elem} />}
                     />
                )
            }) : []
        }
        if(this.props.poisLoaded){
            pois = this.props.showPois? this.props.pois.map(function(elem,index){
                return(
                    <CustomMarker
                        {...elem} 
                        key={index} 
                        icon ={poiIcon} 
                        popup={<CustomPoiPopup {...elem} />}
                    />
                )
            }) :[]
        }
        
        return (
            <Map center={[this.state.lat,this.state.lng]} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup>
                    {cars}
                </MarkerClusterGroup>
                <MarkerClusterGroup>
                    {parkings}
                </MarkerClusterGroup>
                <MarkerClusterGroup>
                    {pois}
                </MarkerClusterGroup>
            </Map>
        )
    }
}