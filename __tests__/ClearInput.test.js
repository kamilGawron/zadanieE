import React from 'react';
import { shallow } from 'enzyme';
import ClearInput from '../components/ClearInput';
import '../src/setupTest'

const props={
    inputChange : function(){},
    name:"",
    value:0,
}
describe('test <ClearInput />', () => {
    const wrapper = shallow(<ClearInput {...props}/>);

    it('renders a span className="clear-input"', () => {
        expect(wrapper.find('span.clear-input')).toHaveLength(1)
    });
});