import React from 'react'
import SampleMap from './SampleMap'
import DisplaySettings from './DisplaySettings'
import "../node_modules/leaflet/dist/leaflet.css"
import "../node_modules/react-leaflet-markercluster/dist/styles.min.css"

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
            minBatteryLevel:0,
            minRange:0,
            maxRange:0,
            minSpaces:0,
            maxSpaces:0
        }
        this.carsToggler = this.carsToggler.bind(this)
        this.parkingsToggler = this.parkingsToggler.bind(this)
        this.poisToggler = this.poisToggler.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }
    componentDidMount(){
        let tmpMaxRange=0,tmpMaxSpaces=0;
        fetch("https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE")
            .then(response=>response.json())
            .then((data)=>{
                tmpMaxRange = data.objects[0].rangeKm;
                for (let x in data.objects){
                    if(data.objects[x].rangeKm>tmpMaxRange){
                        tmpMaxRange = data.objects[x].rangeKm;
                    }
                }
                this.setState({cars:data.objects,carsLoaded:true,maxRange:tmpMaxRange})
            })
        fetch("https://dev.vozilla.pl/api-client-portal/map?objectType=PARKING")
            .then(response=>response.json())
            .then((data)=>{
                tmpMaxSpaces = data.objects[0].availableSpacesCount;
                for (let x in data.objects){
                    if(data.objects[x].availableSpacesCount>tmpMaxSpaces){
                        tmpMaxSpaces = data.objects[x].availableSpacesCount;
                    }
                }
                this.setState({parkings:data.objects,parkingsLoaded:true,maxSpaces:tmpMaxSpaces})
            })
        fetch("https://dev.vozilla.pl/api-client-portal/map?objectType=POI")
            .then(response=>response.json())
            .then((data)=>{
                this.setState({pois:data.objects,poisLoaded:true})
            })
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
    render(){
        let tmpCars,tmpParkings;
        if(this.state.carsLoaded){
            tmpCars = this.state.cars.filter(elem=>{
                return elem.batteryLevelPct>=this.state.minBatteryLevel&&elem.rangeKm>=this.state.minRange
            })
        }
        if(this.state.parkingsLoaded){
            tmpParkings = this.state.parkings.filter(elem=>{
                return elem.availableSpacesCount>=this.state.minSpaces
            })
        }
        return(
            this.state.carsLoaded&&this.state.parkingsLoaded&&this.state.poisLoaded?
                <div>
                   <DisplaySettings
                      {...this.state}
                       carsToggler={this.carsToggler}
                       parkingsToggler={this.parkingsToggler}
                       poisToggler={this.poisToggler}
                       inputChange={this.inputChange}
                       filterCarLen={tmpCars.length}
                       filterParkingLen={tmpParkings.length}
                   />
                    <SampleMap
                        {...this.state}
                        cars={tmpCars}
                        parkings={tmpParkings}
                    />
                </div>
                : 
                <div className="loading">
                   <div>
                       loading...
                   </div>
                   <div className="spiner"></div>
                </div>
        )
    }
}
export default App