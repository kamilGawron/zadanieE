export function callApi(url){
    return new Promise(function(resolve,reject){
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            resolve(data.objects)
        })
        .catch(err=>{reject(err)})
    })
}
export function fetchCars(url){
    return new Promise(function(resolve,reject){
        let tmpMaxRange=0;
        callApi(url)
        .then(data=>{
            for(let x in data){
                if(data[x].rangeKm>tmpMaxRange){
                    tmpMaxRange=data[x].rangeKm;
                }
            }
            return data;
        })
        .then((data)=>{
            resolve({
                cars:data,
                carsLoaded:true,
                maxRange:tmpMaxRange
            })
        })
        .catch(err=>{reject(err)})
    })
}
export function fetchParkings(url){
    return new Promise(function(resolve,reject){
        let tmpMaxSpaces=0;
        callApi(url)
        .then(data=>{
            for (let x in data){
                if(data[x].availableSpacesCount>tmpMaxSpaces){
                    tmpMaxSpaces = data[x].availableSpacesCount;
                }
            }
            return data;
        })
        .then((data)=>{
        resolve({
            parkings:data,
            parkingsLoaded:true,
            maxSpaces:tmpMaxSpaces
        })
        })
        .catch(err=>{reject(err)})
    })
}
export function fetchPois(url){
    return new Promise(function(resolve,reject){
        let tmpMaxRange=0;
        callApi(url)
        .then((data)=>{
            resolve({
                pois:data,
                poisLoaded:true
            })
        })
        .catch(err=>{reject(err)})
    })
}