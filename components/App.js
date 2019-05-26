import React from 'react'
import SampleMap from './SampleMap'
import DisplaySettings from './DisplaySettings'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            carsCounter:0,
            filteredCarsCounter:0,
            parkingsCounter:0,
            filteredParkingsCounter:0,
            poisCounter:0,
            filteredPoisCounter:0,
            showCars:true,
            showParkings:true,
            showPois:true,
            minBatteryLevel:0,
        }
        this.carsToggler = this.carsToggler.bind(this)
        this.parkingsToggler = this.parkingsToggler.bind(this)
        this.poisToggler = this.poisToggler.bind(this)
        this.minBatteryLevelChange = this.minBatteryLevelChange.bind(this)
        this.setCarsCounter = this.setCarsCounter.bind(this)
    }
    
    carsToggler(){
        console.log("car")

        this.setState(prev=>{
            return{
                showCars:!prev.showCars
            }
        })
    }
    parkingsToggler(){
        console.log("parking")
        this.setState(prev=>{
            return{
                showParkings:!prev.showParkings
            }
        })
    }
    poisToggler(){
        console.log("poi")
        this.setState(prev=>{
            return{
                showPois:!prev.showPois
            }
        })
    }
    minBatteryLevelChange(e){
        this.setState({minBatteryLevel:e.target.value})
    }
    setCarsCounter(){
        console.log("sarcout")
    }
    render(){
        return(
            <div>
               <DisplaySettings
                   carsToggler={this.carsToggler}
                   parkingsToggler={this.parkingsToggler}
                   poisToggler={this.poisToggler}
                   showCars={this.state.showCars}
                   showParkings={this.state.showParkings} 
                   showPois={this.state.showPois}
                   minBatteryLevel={this.state.minBatteryLevel}
                   minBatteryLevelChange={this.minBatteryLevelChange}
                   
               />
                <SampleMap
                    showCars={this.state.showCars} 
                    showParkings={this.state.showParkings} 
                    minBatteryLevel={this.state.minBatteryLevel}
                    showPois={this.state.showPois}
                    setCarsCounter={this.setCarsCounter}
                />
            </div>
        )
    }
}
export default App