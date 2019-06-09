import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../components/Filters';
import CarsSettings from '../components/CarsSettings';
import ParkingsSettings from '../components/ParkingsSettings';
import '../src/setupTest'

const props={
    showFilters : function(){},
    availableToggler : function(){},
    inputChange : function(){},
    minBatteryLevel:0,
    maxRange:0,
    minRange:0,
    filterCarLen:0,
    carsLen:0,
    minSpaces:0,
    filterParkingLen:0,
    parkingsLen:0,
    maxSpaces:0,
}
describe('test <Filters />', () => {
    const wrapper = shallow(<Filters {...props}/>);

    it('renders a div className="specific-settings"', () => {
        expect(wrapper.find('div.specific-settings')).toHaveLength(1)
    });
    it('renders a div className="close"', () => {
        expect(wrapper.find('div.close')).toHaveLength(1)
    });
    it('renders a <CarsSettings/>', () => {
        expect(wrapper.find(CarsSettings)).toHaveLength(1)
    });
    it('renders a <ParkingsSettings/>', () => {
        expect(wrapper.find(ParkingsSettings)).toHaveLength(1)
    });
});