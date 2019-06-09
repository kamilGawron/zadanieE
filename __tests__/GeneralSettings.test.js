import React from 'react';
import { shallow } from 'enzyme';
import GeneralSettings from '../components/GeneralSettings';
import ViewSettings from '../components/ViewSettings';
import '../src/setupTest'

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
        expect(wrapper.find(ViewSettings)).toHaveLength(3)
    });
    it('one of <ViewSettings/> has title="Samochody"', () => {
        expect(wrapper.find('[title="Samochody"]')).toHaveLength(1)

    });
    it('one of <ViewSettings/> has title="Parkingi"', () => {
        expect(wrapper.find('[title="Parkingi"]')).toHaveLength(1)

    });
    it('one of <ViewSettings/> has title="POI"', () => {
        expect(wrapper.find('[title="POI"]')).toHaveLength(1)

    });
    it('contains a div with "Filtruj" text', () => {
        expect(wrapper.find('div div div').text()).toMatch(/Filtruj/);

    });
    it('div contains a clickable span',() => {
        expect(wrapper.find('div div div span[onClick]')).toHaveLength(1);
    });
});