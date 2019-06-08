import React from 'react';
import { shallow } from 'enzyme';
import InputGenerator from '../components/InputGenerator';
import '../src/setupTest'
import { expect } from 'chai';

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
        expect(wrapper.find('input')).to.have.lengthOf(1);
    });
    it('an input has correct id', () => {
        expect(wrapper.find('input').props().id).to.equals("nameLevel");
    });
    it('an input has empty id when id flag is false', () => {
        wrapper.setProps({id:false})
        expect(wrapper.find('input').props().id).to.equals("");
        wrapper.setProps({id:true})
    });
    it('an input has correct max value', () => {
        expect(wrapper.find('input').props().max).to.equals(30);
    });
    it('an input has correct type', () => {
        expect(wrapper.find('input').props().type).to.equals("type");
    });
    it('an input has correct value', () => {
        expect(wrapper.find('input').props().value).to.equals(15);
    });
});