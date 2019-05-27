
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import L from 'leaflet'
import carPng from  '../img/car.png'
import parkingPng from  '../img/parking.png'
import poiPng from  '../img/poi.png'
import CustomCarPopup from './CustomCarPopup'
import CustomParkingPopup from './CustomParkingPopup'
import CustomPoiPopup from './CustomPoiPopup'

var carIcon = L.icon({
    iconUrl: carPng,

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -24] // point from which the popup should open relative to the iconAnchor
});
var parkingIcon = L.icon({
    iconUrl: parkingPng,

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -24] // point from which the popup should open relative to the iconAnchor
});
var poiIcon = L.icon({
    iconUrl: poiPng,

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -24] // point from which the popup should open relative to the iconAnchor
});


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
    var self = this;
    if(this.props.carsLoaded){
        cars = this.props.showCars?  this.props.cars.map(function(elem,index){
            return(
                <Marker 
                    key={index} 
                    position={[elem.location.latitude,elem.location.longitude]}
                    icon ={carIcon}
                    >
                    <CustomCarPopup {...elem} />

                </Marker>
            )
        }) : []
    }
  
    if(this.props.parkingsLoaded){
        parkings = this.props.showParkings? this.props.parkings.map(function(elem,index){
            return(
                <Marker 
                    key={index} 
                    position={[elem.location.latitude,elem.location.longitude]}
                    icon ={parkingIcon}
                    >
                    <CustomParkingPopup {...elem} />
                </Marker>
            )
        }) : []
    }
    if(this.props.poisLoaded){
        pois = this.props.showPois? this.props.pois.map(function(elem,index){
            return(
                <Marker 
                    key={index} 
                    position={[elem.location.latitude,elem.location.longitude]}
                    icon ={poiIcon}
                    >
                    <CustomPoiPopup {...elem} />
                </Marker>
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