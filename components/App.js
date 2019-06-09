import React from 'react'
import SampleMap from './SampleMap'
import DisplaySettings from './DisplaySettings'
import {fetchCars,fetchParkings,fetchPois} from '../services/callApi'
import {carsFilter,parkingsFilter} from '../services/filters'
import "../node_modules/leaflet/dist/leaflet.css"
import "../node_modules/react-leaflet-markercluster/dist/styles.min.css"
import '../style/index.css'
import '../style/spinner.css'
import '../style/map.css'
import '../style/settings.css'
import '../style/media.css'
export const carsUrl = "https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE";
export const parkingsUrl = "https://dev.vozilla.pl/api-client-portal/map?objectType=PARKING";
export const poisUrl = "https://dev.vozilla.pl/api-client-portal/map?objectType=POI";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            cars:[],
            carsLoaded:false,
            parkings:[],
            parkingsLoaded:false,
            pois:[],
            poisLoaded:false,
            showCars:true,
            showParkings:true,
            showPois:true,
            fetchErr:false,
            minBatteryLevel:0,
            minRange:0,
            maxRange:0,
            minSpaces:0,
            maxSpaces:0,
            carStatus:"AVAILABLE",
            msg:""
        }
        this.carsToggler = this.carsToggler.bind(this)
        this.parkingsToggler = this.parkingsToggler.bind(this)
        this.poisToggler = this.poisToggler.bind(this)
        this.inputChange = this.inputChange.bind(this)
        this.availableToggler = this.availableToggler.bind(this)
    }
    componentDidMount(){
        let carsPromise = fetchCars(carsUrl); 
        let parkingsPromise = fetchParkings(parkingsUrl);
        let poisPromise = fetchPois(poisUrl);
        Promise.all([carsPromise,parkingsPromise,poisPromise])
        .then(values=>{
            let tmpNewState={};
            for (let x in values){
                tmpNewState=Object.assign(tmpNewState,values[x])
            }
            this.setState(tmpNewState)
        })
        .catch(err=>this.setState({fetchErr:true}))
    }
    carsToggler(){
        this.setState(prev=>{
            return{
                showCars:!prev.showCars
            }
        })
    }
    parkingsToggler(){
        this.setState(prev=>{
            return{
                showParkings:!prev.showParkings
            }
        })
    }
    poisToggler(){
        this.setState(prev=>{
            return{
                showPois:!prev.showPois
            }
        })
    }
    inputChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    availableToggler(e){
        let status= e.target.checked? "AVAILABLE" :"";
        this.setState({carStatus:status})
    }
    render(){
        let tmpCars = carsFilter(this.state.cars,this.state.minBatteryLevel,this.state.minRange,this.state.carStatus);
        let tmpParkings = parkingsFilter(this.state.parkings,this.state.minSpaces);

        return(
            this.state.carsLoaded&&this.state.parkingsLoaded&&this.state.poisLoaded?
                <React.Fragment>
                   <DisplaySettings
                       cars={this.state.cars}
                       parkings={this.state.parkings}
                       pois={this.state.pois}
                       carsToggler={this.carsToggler}
                       parkingsToggler={this.parkingsToggler}
                       poisToggler={this.poisToggler}
                       inputChange={this.inputChange}
                       filterCarLen={tmpCars.length}
                       filterParkingLen={tmpParkings.length}
                       availableToggler={this.availableToggler}
                       minBatteryLevel={this.state.minBatteryLevel}
                       maxRange={this.state.maxRange}
                       minRange={this.state.minRange}
                       minSpaces={this.state.minSpaces}
                       maxSpaces={this.state.maxSpaces}
                   />
                    <SampleMap
                        pois={this.state.pois}
                        cars={tmpCars}
                        parkings={tmpParkings}
                        showCars={this.state.showCars}
                        showParkings={this.state.showParkings}
                        showPois={this.state.showPois}
                        carsLoaded={this.state.carsLoaded}
                        parkingsLoaded={this.state.parkingsLoaded}
                        poisLoaded={this.state.poisLoaded}
                    />
                </React.Fragment>
                : 
                this.state.fetchErr?
                    <div className="error">
                        Wystąpił błąd podczas pobierania danych.
                    </div>
                    :
                    <div className="loading">
                       <div>
                           ładowanie
                       </div>
                       <div className="spinner"></div>
                    </div>
        )
    }
}
export default App