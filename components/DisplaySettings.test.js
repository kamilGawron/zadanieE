import React from 'react';
import { shallow } from 'enzyme';
import DisplaySettings from './DisplaySettings';
import '../src/setupTest'
import { expect } from 'chai';



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
        expect(wrapper.find('.settings')).to.have.lengthOf(1);
    });
    it('contains general settings`', () => {
        const wrapper = shallow(<DisplaySettings {...props}/>);
        expect(wrapper.find('.general')).to.have.lengthOf(1);
    });
    it('contains cars settings`', () => {
        const wrapper = shallow(<DisplaySettings {...props}/>);
        expect(wrapper.find('.cars')).to.have.lengthOf(1);
    });
    it('contains parkings settings`', () => {
        const wrapper = shallow(<DisplaySettings {...props}/>);
        expect(wrapper.find('.parkings')).to.have.lengthOf(1);
    });
});