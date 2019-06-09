import React from 'react';
import { shallow } from 'enzyme';
import DisplaySettings from '../components/DisplaySettings';
import GeneralSettings from '../components/GeneralSettings';
import Filters from '../components/Filters';
import '../src/setupTest'

const props={
    cars:[],
    parkings:[],
    pois:[],
    maxRange:0,
    minRange:0,
    filtersCarLen:0,
    minSpaces:0,
    maxSpaces:0,
    minBatteryLevel:0,
    carsToggler:function(){},
    parkingsToggler:function(){},
    poisToggler:function(){},
    availableToggler:function(){},
    inputChange:function(){},
    
}
describe('test <DisplaySettings />', () => {
    it('renders a div with class settings`', () => {
        const wrapper = shallow(<DisplaySettings {...props}/>);
        expect(wrapper.find('.settings')).toHaveLength(1);
    });
    it('renders <GeneralSettings/>`', () => {
        const wrapper = shallow(<DisplaySettings {...props}/>);
        expect(wrapper.find(GeneralSettings)).toHaveLength(1);
    });
    it('renders <Filters/>`', () => {
        const wrapper = shallow(<DisplaySettings {...props}/>);
        expect(wrapper.find(Filters)).toHaveLength(1);
    });
});