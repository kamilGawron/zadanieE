import React from 'react';
import { shallow } from 'enzyme';
import CarsSettings from '../components/CarsSettings';
import AvailableSwitcher from '../components/AvailableSwitcher';
import InputFiltersRow from '../components/InputFiltersRow';
import FiltersResult from '../components/FiltersResult';
import '../src/setupTest'
import { expect } from 'chai';

const props={
    availableToggler : function(){},
    inputChange : function(){},
    title:"",
    name:"",
    value:0,
    clearInput:0,
    change:0,
    default:0,
    minBatteryLevel:0,
    minRange:0,
    filtersCarLen:0,
    carsLen:0
}
describe('test <CarsSettings />', () => {
    const wrapper = shallow(<CarsSettings {...props}/>);
    it('contain a div className="cars"`', () => {
        expect(wrapper.find('div.cars')).to.have.lengthOf(1);
    });
    it('display a h6 with "Filtruj samochody:" in div className="cars"', () => {
        expect(wrapper.find('div.cars h6').text()).to.equal('Filtruj samochody:');
    });
    it('renders a <AvailableSwitcher/>', () => {
        expect(wrapper.find(AvailableSwitcher)).to.have.lengthOf(1);
    });
    it('renders a two <InputFiltersRow/>', () => {
        expect(wrapper.find(InputFiltersRow)).to.have.lengthOf(2);
    });
    it('does not renders a <FiltersResult/> when minBatteryLevel==0 and minRange==0 ', () => {
        expect(wrapper.find(FiltersResult)).to.have.lengthOf(0);
    });
    it('renders an empty span with "&nbsp;" when minBatteryLevel==0 and minRange==0  ', () => {
        expect(wrapper.find('div.cars span')).to.have.lengthOf(1);
    });
    it('renders a <FiltersResult/> when minBatteryLevel!=0', () => {
        wrapper.setProps({
            minBatteryLevel:1,
        })
        expect(wrapper.find(FiltersResult)).to.have.lengthOf(1);
    });
    it('renders a <FiltersResult/> when minRange!=0', () => {
        wrapper.setProps({
            minBatteryLevel:0,
            minRange:1,
        })
        expect(wrapper.find(FiltersResult)).to.have.lengthOf(1);
    });
        it('does not renders an empty span with "&nbsp;" when minRange!=0', () => {
            expect(wrapper.find('div.cars span')).to.have.lengthOf(0);
    });
});