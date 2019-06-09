import React from 'react';
import { shallow } from 'enzyme';
import AvailableSwitcher from '../components/AvailableSwitcher';
import '../src/setupTest'
import renderer from 'react-test-renderer'
const props={
    availableToggler : function(){},
}
describe('test <AvailableSwitcher />', () => {
    const wrapper = shallow(<AvailableSwitcher {...props}/>);
    it('matches the snapshot', () => {
        const tree=renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('display "only available" text', () => {
        expect(wrapper.text()).toEqual('Tylko dostępne');
    });
    it('contain a label className="switch"`', () => {
        expect(wrapper.find('label.switch')).toHaveLength(1);
    });
    it('contain an input inside label className="switch"`', () => {
        expect(wrapper.find('label.switch input')).toHaveLength(1);
    });
    it('contain a span className="slider round" inside label className="switch"`', () => {
        expect(wrapper.find('label.switch span.slider.round')).toHaveLength(1);
    });
    it('switcher is default checked', () => {
        expect(wrapper.find('label.switch input').props().defaultChecked).toEqual(true);
    });
});