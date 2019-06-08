import React from 'react';
import { shallow } from 'enzyme';
import InputFiltersRow from '../components/InputFiltersRow';
import InputGenerator from '../components/InputGenerator';
import ClearInput from '../components/ClearInput';
import '../src/setupTest'
import { expect } from 'chai';

const props={
    inputChange : function(){},
    name:"",
    title:"title",
    clearInput:false,
}
describe('test <InputFiltersRow />', () => {
    const wrapper = shallow(<InputFiltersRow {...props}/>);
    it('label has correct text', () => {
        expect(wrapper.find('label[htmlFor]').text()).to.equals('title');
    });
    it('renders a 2 <InputGenerator/>', () => {
        expect(wrapper.find(InputGenerator)).to.have.lengthOf(2);
    });
    it('one of <InputGenerator/> has type="range"', () => {
        expect(wrapper.find('[type="range"]')).to.have.lengthOf(1);
    });
    it('one of <InputGenerator/> has type="number"', () => {
        expect(wrapper.find('[type="number"]')).to.have.lengthOf(1);
    });
    it('does not renders a <ClearInput/> when clearInput is false', () => {
        expect(wrapper.find(ClearInput)).to.have.lengthOf(0);
    });
    it('renders a span with className="clear-input" when clearInput is false', () => {
        expect(wrapper.find('span.clear-input')).to.have.lengthOf(1);
    });
    it('renders a <ClearInput/> when clearInput is true', () => {
        wrapper.setProps({clearInput:true})
        expect(wrapper.find(ClearInput)).to.have.lengthOf(1);
        wrapper.setProps({clearInput:false})
    });
    it('does not renders a span with className="clear-input" when clearInput is true', () => {
        wrapper.setProps({clearInput:true})
        expect(wrapper.find(ClearInput)).to.have.lengthOf(1);
        wrapper.setProps({clearInput:false})
    });
});