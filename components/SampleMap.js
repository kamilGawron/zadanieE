import React, { Component } from 'react'
import { Map, TileLayer, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import L from 'leaflet'
import {carMarkers,parkingMarkers,poiMarkers} from '../services/markers'

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
        let cars = carMarkers(this.props.cars,this.props.showCars)
        let parkings = parkingMarkers(this.props.parkings,this.props.showParkings)
        let pois = poiMarkers(this.props.pois,this.props.showPois)
      
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