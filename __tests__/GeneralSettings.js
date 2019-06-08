import React from 'react';
import { shallow } from 'enzyme';
import GeneralSettings from '../components/GeneralSettings';
import ViewSettings from '../components/ViewSettings';
import '../src/setupTest'
import { expect } from 'chai';

const props={
    toggler : function(){},
    showFilters : function(){},
    cars:[],
    parkings:[],
    pois:[],
}
describe('test <GeneralSettings />', () => {
    const wrapper = shallow(<GeneralSettings {...props}/>);
    it('renders a 3 <ViewSettings/>', () => {
        expect(wrapper.find(ViewSettings)).to.have.lengthOf(3)
    });
    it('one of <ViewSettings/> has title="Samochody"', () => {
        expect(wrapper.find('[title="Samochody"]')).to.have.lengthOf(1)

    });
    it('one of <ViewSettings/> has title="Parkingi"', () => {
        expect(wrapper.find('[title="Parkingi"]')).to.have.lengthOf(1)

    });
    it('one of <ViewSettings/> has title="POI"', () => {
        expect(wrapper.find('[title="POI"]')).to.have.lengthOf(1)

    });
    it('contains a div with "Filtruj" text', () => {
        expect(wrapper.find('div div div').text()).to.match(/Filtruj/);

    });
    it('div contains a clickable span',() => {
        expect(wrapper.find('div div div span[onClick]')).to.have.lengthOf(1);
    });
});