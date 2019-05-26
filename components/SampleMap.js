
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from 'leaflet'

var carIcon = L.icon({
    iconUrl: '../img/car.png',

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -24] // point from which the popup should open relative to the iconAnchor
});
var parkingIcon = L.icon({
    iconUrl: '../img/parking.png',

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -24] // point from which the popup should open relative to the iconAnchor
});
var poiIcon = L.icon({
    iconUrl: '../img/poi.png',

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
            cars:[],
            carsLoaded:false,
            parkings:[],
            parkingsLoaded:false,
            pois:[],
            poisLoaded:false,
        }
}
    componentDidMount(){
        
        fetch("https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE")
        .then(response=>response.json())
        .then(function(data){
            console.log("Cars",data.objects);
            return data
        })
        .then((data)=>{
            this.setState({cars:data.objects,carsLoaded:true})
        })
        fetch("https://dev.vozilla.pl/api-client-portal/map?objectType=PARKING")
            .then(response=>response.json())
            .then(function(data){
                console.log("parking",data.objects);
                return data
            })
            .then((data)=>{
                this.setState({parkings:data.objects,parkingsLoaded:true})
        })
        fetch("https://dev.vozilla.pl/api-client-portal/map?objectType=POI")
            .then(response=>response.json())
            .then(data=>{
                this.props.setCarsCounter();
                console.log("POI",data.objects);
                return data
            })
            .then((data)=>{
                this.setState({pois:data.objects,poisLoaded:true})
            })
        }
   componentDidUpdate(){
       
   }
   
render() {
    let cars,parkings,pois;
    var self = this;
    if(this.state.carsLoaded){
        let tmpCars = this.state.cars.filter(function(elem){
            return elem.batteryLevelPct>self.props.minBatteryLevel
        })
        cars = this.props.showCars?  tmpCars.map(function(elem,index){
            return(
                <Marker 
                    key={index} 
                    position={[elem.location.latitude,elem.location.longitude]}
                    icon ={carIcon}
                    >
                    <Popup>
                        <React.Fragment>{elem.name}</React.Fragment>
                    </Popup>
                </Marker>
            )
        }) : []
    }
    if(this.state.parkingsLoaded){
        parkings = this.props.showParkings? this.state.parkings.map(function(elem,index){
            return(
                <Marker 
                    key={index} 
                    position={[elem.location.latitude,elem.location.longitude]}
                    icon ={parkingIcon}
                    >
                    <Popup>
                        <React.Fragment>{elem.name}</React.Fragment>
                    </Popup>
                </Marker>
            )
        }) : []
    }
    if(this.state.poisLoaded){
        pois = this.props.showPois? this.state.pois.map(function(elem,index){
            return(
                <Marker 
                    key={index} 
                    position={[elem.location.latitude,elem.location.longitude]}
                    icon ={poiIcon}
                    >
                    <Popup>
                        <React.Fragment>{elem.name}</React.Fragment>
                    </Popup>
                </Marker>
            )
        }) :[]
    }
    
    
    return (
        this.state.carsLoaded?
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
        :
        <div>loading</div>
    )
}
}