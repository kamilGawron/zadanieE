import React,{useEffect} from 'react'

function showFilters(){
    let filters = document.getElementById("filters");
    filters.style.display = filters.style.display=="flex"? "none":"flex";
}

function DisplaySettings(props){
    useEffect(()=>{
        document.getElementById("filters").style.display="none";
    },[])
    return(
        <div className="settings">
              
            {/*GENERAL SETTINGS*/}
            <div className="general">
               <h6>Wybierz jakie elementy chcesz zobaczyć na mapie:</h6>
               <div>
                   <div>
                       <span>Samochody ({props.cars.length})</span>
                       <label className="switch">
                           <input id="carsToggler" type="checkbox" onChange={props.carsToggler} defaultChecked/>
                           <span className="slider round"></span>
                       </label>
                   </div>
                   <div>
                       <span>Parkingi ({props.parkings.length})</span>
                       <label className="switch">
                           <input id="parkingsToggler" type="checkbox" onChange={props.parkingsToggler} defaultChecked/>
                           <span className="slider round"></span>
                       </label>
                   </div>
                   <div>
                       <span>POI ({props.pois.length})</span>
                       <label className="switch">
                           <input id="poisToggler" type="checkbox" onChange={props.poisToggler} defaultChecked/>
                           <span className="slider round"></span>
                       </label>
                   </div>
                   <div>
                       Filtruj 
                       <span onClick={showFilters} className="filters-icon">&#9776;</span>
                    </div>
               </div>
               
            </div>
            
            {/*SPECIFIC SETTINGS*/}
            <div id="filters" className="specific-settings">
                {/*CARS SETTINGS*/}
                <div className="cars">
                    <h6>Filtruj samochody:</h6>
                    <label htmlFor="minBatteryLevelInput">
                        Minimalny procentowy poziom baterii samochodu
                    </label>
                    <div>
                        <input id="minBatteryLevelInput" name="minBatteryLevel" onChange={props.inputChange} min="0" max="100" type="range" value={props.minBatteryLevel}/>
                        <input name="minBatteryLevel" onChange={props.inputChange} min="0" max="100" type="number" value={props.minBatteryLevel}/>
                    </div>
                    <label htmlFor="minRangeInput">Minimalny zasięg kilometrów</label>
                    <div>
                        <input id="minRangeInput" name="minRange" onChange={props.inputChange} min="0" max={props.maxRange} type="range" value={props.minRange}/>
                        <input name="minRange" onChange={props.inputChange} min="0" max={props.maxRange} type="number" value={props.minRange}/>
                    </div>
                    {
                     props.minBatteryLevel!=0||
                     props.minRange!=0?
                         props.filterCarLen==props.cars.length?
                         <span>Wszystkie samochody spełniają określone kryteria</span>:
                         <span>znaleziono: {props.filterCarLen}</span> 
                     : <span>&nbsp;</span>
                    }
                </div>

                {/*PARKINGS SETTINGS*/}
                <div className="parkings">
                    <h6>Filtruj parkingi:</h6>
                    <label htmlFor="minSpacesInput">Minimalna dostępna liczba miejsc</label>
                    <div>
                        <input id ="minSpacesInput" name="minSpaces" onChange={props.inputChange} min="0" max={props.maxSpaces}id="minSpacesInput" type="range" value={props.minSpaces}/>
                        <input name="minSpaces" onChange={props.inputChange} min="0" max={props.maxSpaces} id="minSpacesInput" type="number" value={props.minSpaces}/>
                    </div>
                </div>

                {/*POIS SETTINGS*/}
            </div>
        </div>
       
    )
}

export default DisplaySettings