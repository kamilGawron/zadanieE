import React from 'react';
import { shallow } from 'enzyme';
import '../src/setupTest'
import SampleMap from "../components/SampleMap"
import {Map} from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

const props={
    carsLoaded:true,
    parkingsLoaded:true,
    poisLoaded:true,
    showCars:true,
    showParkings:true,
    showPois:true,
    cars:[],
    parkings:[],
    pois:[]
}
describe('test <SampleMap />', () => {
    it('renders a map', () => {
        const wrapper = shallow(<SampleMap {...props}/>);
        expect(wrapper.find(Map)).toHaveLength(1);
    });
    it('renders a 3 marker cluster groups', () => {
        const wrapper = shallow(<SampleMap {...props}/>);
        expect(wrapper.find(MarkerClusterGroup)).toHaveLength(3);
    });
});