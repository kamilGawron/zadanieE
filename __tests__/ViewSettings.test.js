import React from 'react';
import { shallow } from 'enzyme';
import ViewSettings from '../components/ViewSettings';
import '../src/setupTest'

const props={
    toggler:function(){},
    title:"title",
    data:[],
    inputId:"",
}
describe('test <ViewSettings />', () => {
    const wrapper = shallow(<ViewSettings {...props}/>);
    it('renders a div', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    });
    it('renders a correct text in span', () => {
        expect(wrapper.find('div>span').text()).toEqual("title (0)");
    });
    it('renders a label with className="switch"', () => {
        expect(wrapper.find('div>label.switch')).toHaveLength(1);
    });
    it('renders an input type="checkbox"', () => {
        expect(wrapper.find('div>label input[type="checkbox"]')).toHaveLength(1);
    });
    it('checkbox is default checked', () => {
        expect(wrapper.find('div>label input[type="checkbox"]').props().defaultChecked).toEqual(true);
    });
    it('renders a span with className="slider round"', () => {
        expect(wrapper.find('div>label>span.slider.round')).toHaveLength(1);
    });
});