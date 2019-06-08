import React from 'react';
import { shallow } from 'enzyme';
import ViewSettings from '../components/ViewSettings';
import '../src/setupTest'
import { expect } from 'chai';

const props={
    toggler:function(){},
    title:"title",
    data:[],
    inputId:"",
}
describe('test <ViewSettings />', () => {
    const wrapper = shallow(<ViewSettings {...props}/>);
    it('renders a div', () => {
        expect(wrapper.find('div')).to.have.lengthOf(1);
    });
    it('renders a correct text in span', () => {
        expect(wrapper.find('div>span').text()).to.equals("title (0)");
    });
    it('renders a label with className="switch"', () => {
        expect(wrapper.find('div>label.switch')).to.have.lengthOf(1);
    });
    it('renders an input type="checkbox"', () => {
        expect(wrapper.find('div>label input[type="checkbox"]')).to.have.lengthOf(1);
    });
    it('checkbox is default checked', () => {
        expect(wrapper.find('div>label input[type="checkbox"]').props().defaultChecked).to.equals(true);
    });
    it('renders a span with className="slider round"', () => {
        expect(wrapper.find('div>label>span.slider.round')).to.have.lengthOf(1);
    });
});