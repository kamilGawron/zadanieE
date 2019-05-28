import React,{useEffect} from 'react'

function showFilters(){
    let filters = document.getElementById("filters");
    filters.style.display = filters.style.display=="flex"? "none":"flex";
    let zoom = document.getElementsByClassName("leaflet-control");
    if(window.innerWidth<=768){
        zoom[0].style.display = zoom[0].style.display=="block"? "none":"block";
    }
}

function DisplaySettings(props){
    useEffect(()=>{
        document.getElementById("filters").style.display="none";
        let zoom = document.getElementsByClassName("leaflet-control");
        zoom[0].style.display="block";
    },[])
    
    return(
        <div className="settings">
            <div className="general">
               <h6>Wybierz elementy jakie chcesz zobaczyć na mapie:</h6>
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
            <div id="filters" className="specific-settings">
                <div onClick={showFilters} className="close">&#9747;</div>
                <div className="cars">
                    <h6>Filtruj samochody:</h6>
                    <div>
                        <span>Tylko dostępne</span>
                        <label className="switch">
                            <input name="available" id="availableSwitcher" type="checkbox" onChange={props.availableToggler} defaultChecked/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <label htmlFor="minBatteryLevelInput">
                        Minimalny procentowy poziom baterii samochodu
                    </label>
                    <div>
                        <input id="minBatteryLevelInput" name="minBatteryLevel" onChange={props.inputChange} min="0" max="100" type="range" value={props.minBatteryLevel}/>
                        <input name="minBatteryLevel" onChange={props.inputChange} min="0" max="100" type="number" value={props.minBatteryLevel}/>
                        {props.minBatteryLevel!=0?
                            <span onClick={()=>{
                                    props.inputChange({target:{name:"minBatteryLevel",value:0}})
                                }} className="clear-input">&#9747;
                            </span>
                            :
                            <span className="clear-input">&nbsp;</span>
                        }
                                            </div>
                    <label htmlFor="minRangeInput">Minimalny zasięg kilometrów</label>
                    <div>
                        <input id="minRangeInput" name="minRange" onChange={props.inputChange} min="0" max={props.maxRange} type="range" value={props.minRange}/>
                        <input name="minRange" onChange={props.inputChange} min="0" max={props.maxRange} type="number" value={props.minRange}/>
                        {props.minRange!=0? 
                            <span onClick={()=>{
                                    props.inputChange({target:{name:"minRange",value:0}})
                                }} className="clear-input">&#9747;
                            </span>
                            :
                            <span className="clear-input">&nbsp;</span>
                        }
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

                <div className="parkings">
                    <h6>Filtruj parkingi:</h6>
                    <label htmlFor="minSpacesInput">Minimalna dostępna liczba miejsc</label>
                    <div>
                        <input id ="minSpacesInput" name="minSpaces" onChange={props.inputChange} min="0" max={props.maxSpaces}id="minSpacesInput" type="range" value={props.minSpaces}/>
                        <input name="minSpaces" onChange={props.inputChange} min="0" max={props.maxSpaces} id="minSpacesInput" type="number" value={props.minSpaces}/>
                        {props.minSpaces!=0?
                            <span onClick={()=>{
                                    props.inputChange({target:{name:"minSpaces",value:0}})
                                }} className="clear-input">&#9747;
                            </span>
                            :
                            <span className="clear-input">&nbsp;</span>
                        }
                    </div>
                    {
                        props.minSpaces!=0?
                            props.filterParkingLen==props.parkings.length?
                            <span>Wszystkie parkingi spełniają określone kryteria</span>:
                            <span>znaleziono: {props.filterParkingLen}</span> 
                        : <span>&nbsp;</span>
                    }
                </div>

            </div>
        </div>
       
    )
}

export default DisplaySettings