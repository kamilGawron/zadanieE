export function carsFilter(cars,minBattery,minRange,carStatus){
    let tmpCars = cars.filter(elem=>{
        return elem.batteryLevelPct>=minBattery&&elem.rangeKm>=minRange&&elem.status.includes(carStatus)
    })
    return tmpCars;
}
export function parkingsFilter(parkings,minSpaces){
    let tmpParkings = parkings.filter(elem=>{
        return elem.availableSpacesCount>=minSpaces
    })
    return tmpParkings;
    }
