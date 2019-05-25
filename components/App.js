import React from 'react'
import SampleMap from './SampleMap'
import DisplaySettings from './DisplaySettings'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            showCars:true,
            showParkings:true,
            showPois:true
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState(prev=>{
            return{
                showCars:!prev.showCars
            }
        })
    }
    render(){
        return(
            <div>
               <DisplaySettings
                   clickHandler={this.clickHandler}
                   showCars={this.state.showCars}
               />
                <SampleMap
                    showCars={this.state.showCars} showParkings showPois
                />
            </div>
        )
    }
}
export default App