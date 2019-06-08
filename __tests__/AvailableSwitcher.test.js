import React from 'react';
import { shallow } from 'enzyme';
import AvailableSwitcher from '../components/AvailableSwitcher';
import '../src/setupTest'
import { expect } from 'chai';

const props={
    availableToggler : function(){},
}
describe('test <AvailableSwitcher />', () => {
    const wrapper = shallow(<AvailableSwitcher {...props}/>);

    it('display "only available" text', () => {
        expect(wrapper.text()).to.equal('Tylko dostępne');
    });
    it('contain a label className="switch"`', () => {
        expect(wrapper.find('label.switch')).to.have.lengthOf(1);
    });
    it('contain an input inside label className="switch"`', () => {
        expect(wrapper.find('label.switch input')).to.have.lengthOf(1);
    });
    it('contain a span className="slider round" inside label className="switch"`', () => {
        expect(wrapper.find('label.switch span.slider.round')).to.have.lengthOf(1);
    });
    it('switcher is default checked', () => {
        expect(wrapper.find('label.switch input').props().defaultChecked).to.equal(true);
    });
});