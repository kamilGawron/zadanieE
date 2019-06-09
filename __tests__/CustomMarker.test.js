import React from 'react';
import { shallow } from 'enzyme';
import CustomMarker from '../components/CustomMarker';
import '../src/setupTest'
import {Marker} from 'react-leaflet'
import emptyIcon from '../services/icons/emptyIcon'

const props={
    index:0,
    location:{
        latitude:0,
        longitude:0,
    },
    icon:emptyIcon ,
    popup:{}
}
describe('test <CustomMarker />', () => {
    it('renders a marker`', () => {
        const wrapper = shallow(<CustomMarker {...props}/>);
        expect(wrapper.find(Marker)).toHaveLength(1);
    });
});