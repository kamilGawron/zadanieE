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
    it('renders a popup`', () => {
        const wrapper = shallow(<CustomCarPopup {...props}/>);
        expect(wrapper.find(Popup)).toHaveLength(1);
    });
    it('contain div className="content"`', () => {
        const wrapper = shallow(<CustomCarPopup {...props}/>);
        expect(wrapper.find('.content')).toHaveLength(1);
    });
});