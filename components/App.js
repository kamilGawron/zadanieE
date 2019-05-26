import React from 'react'
import SampleMap from './SampleMap'
import DisplaySettings from './DisplaySettings'

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
        }
        this.carsToggler = this.carsToggler.bind(this)
        this.parkingsToggler = this.parkingsToggler.bind(this)
        this.poisToggler = this.poisToggler.bind(this)
        this.minBatteryLevelChange = this.minBatteryLevelChange.bind(this)
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
                console.log("POI",data.objects);
                return data
            })
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
    minBatteryLevelChange(e){
        this.setState({minBatteryLevel:e.target.value})
    }
    
    render(){
        return(
            this.state.carsLoaded&&this.state.parkingsLoaded&&this.state.poisLoaded?
            <div>
               <DisplaySettings
                  {...this.state}
                   carsToggler={this.carsToggler}
                   parkingsToggler={this.parkingsToggler}
                   poisToggler={this.poisToggler}
                   minBatteryLevelChange={this.minBatteryLevelChange}
                   
               />
                <SampleMap
                    {...this.state}
                />
            </div>
            : <div>loading...</div>
        )
    }
}
export default App