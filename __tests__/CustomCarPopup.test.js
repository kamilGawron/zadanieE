import React from 'react';
import { shallow } from 'enzyme';
import CustomCarPopup from '../components/CustomCarPopup';
import '../src/setupTest'
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
    const wrapper = shallow(<CustomCarPopup {...props}/>);
    
    it('renders a popup`', () => {
        expect(wrapper.find(Popup)).toHaveLength(1);
    });
    it('contain div className="content"`', () => {
        expect(wrapper.find('.content')).toHaveLength(1);
    });
});