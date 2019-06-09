import React from 'react';
import { shallow } from 'enzyme';
import InputFiltersRow from '../components/InputFiltersRow';
import InputGenerator from '../components/InputGenerator';
import ClearInput from '../components/ClearInput';
import '../src/setupTest'

const props={
    inputChange : function(){},
    name:"",
    title:"title",
    clearInput:false,
}
describe('test <InputFiltersRow />', () => {
    const wrapper = shallow(<InputFiltersRow {...props}/>);
    it('label has correct text', () => {
        expect(wrapper.find('label[htmlFor]').text()).toEqual('title');
    });
    it('renders a 2 <InputGenerator/>', () => {
        expect(wrapper.find(InputGenerator)).toHaveLength(2);
    });
    it('one of <InputGenerator/> has type="range"', () => {
        expect(wrapper.find('[type="range"]')).toHaveLength(1);
    });
    it('one of <InputGenerator/> has type="number"', () => {
        expect(wrapper.find('[type="number"]')).toHaveLength(1);
    });
    it('does not renders a <ClearInput/> when clearInput is false', () => {
        expect(wrapper.find(ClearInput)).toHaveLength(0);
    });
    it('renders a span with className="clear-input" when clearInput is false', () => {
        expect(wrapper.find('span.clear-input')).toHaveLength(1);
    });
    it('renders a <ClearInput/> when clearInput is true', () => {
        wrapper.setProps({clearInput:true})
        expect(wrapper.find(ClearInput)).toHaveLength(1);
        wrapper.setProps({clearInput:false})
    });
    it('does not renders a span with className="clear-input" when clearInput is true', () => {
        wrapper.setProps({clearInput:true})
        expect(wrapper.find(ClearInput)).toHaveLength(1);
        wrapper.setProps({clearInput:false})
    });
});