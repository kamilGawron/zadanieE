import React from 'react';
import { shallow } from 'enzyme';
import CustomCarPopup from './CustomCarPopup';
import '../src/setupTest'
import { expect } from 'chai';
import {Popup} from 'react-leaflet'


const props={
    name:"",
    status:"",
    batteryLevelPct:0,
    color:"",
    rangeKm:0,
    platesNumber:""
}
describe('test <CustomCarPopup />', () => {
    it('renders a popup`', () => {
        const wrapper = shallow(<CustomCarPopup {...props}/>);
        expect(wrapper.find(Popup)).to.have.lengthOf(1);
    });
    it('contain div className="content"`', () => {
        const wrapper = shallow(<CustomCarPopup {...props}/>);
        expect(wrapper.find('.content')).to.have.lengthOf(1);
    });
});