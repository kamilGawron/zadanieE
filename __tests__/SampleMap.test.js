import React from 'react';
import { shallow } from 'enzyme';
import '../src/setupTest'
import { expect } from 'chai';
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
        expect(wrapper.find(Map)).to.have.lengthOf(1);
    });
    it('renders a 3 marker cluster groups', () => {
        const wrapper = shallow(<SampleMap {...props}/>);
        expect(wrapper.find(MarkerClusterGroup)).to.have.lengthOf(3);
    });
});