import L from 'leaflet'
import carPngUnavailable from  '../../img/carUnavailable.png'

var carIconUnavailable = L.icon({
    iconUrl: carPngUnavailable,

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -24] // point from which the popup should open relative to the iconAnchor
});
export default carIconUnavailable