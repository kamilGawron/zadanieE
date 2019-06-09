import React from 'react';
import { shallow } from 'enzyme';
import InputGenerator from '../components/InputGenerator';
import '../src/setupTest'

const props={
    inputChange : function(){},
    name:"name",
    id:true,
    max:30,
    type:"type",
    value:15,
}
describe('test <InputGenerator />', () => {
    const wrapper = shallow(<InputGenerator {...props}/>);
    it('renders an input', () => {
        expect(wrapper.find('input')).toHaveLength(1);
    });
    it('an input has correct id', () => {
        expect(wrapper.find('input').props().id).toEqual("nameLevel");
    });
    it('an input has empty id when id flag is false', () => {
        wrapper.setProps({id:false})
        expect(wrapper.find('input').props().id).toEqual("");
        wrapper.setProps({id:true})
    });
    it('an input has correct max value', () => {
        expect(wrapper.find('input').props().max).toEqual(30);
    });
    it('an input has correct type', () => {
        expect(wrapper.find('input').props().type).toEqual("type");
    });
    it('an input has correct value', () => {
        expect(wrapper.find('input').props().value).toEqual(15);
    });
});