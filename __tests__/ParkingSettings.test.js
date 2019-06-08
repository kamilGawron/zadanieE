import React from 'react';
import { shallow } from 'enzyme';
import ParkingsSettings from '../components/ParkingsSettings';
import InputFiltersRow from '../components/InputFiltersRow';
import FiltersResult from '../components/FiltersResult';
import '../src/setupTest'
import { expect } from 'chai';

const props={
    inputChange : function(){},
    minSpaces:5,
    name:"name",
    maxSpaces:0,
    filterParkingLen:0,
    parkingsLen:0,
}
describe('test <ParkingsSettings />', () => {
    const wrapper = shallow(<ParkingsSettings {...props}/>);
    it('renders a div with className="parkings', () => {
        expect(wrapper.find('div.parkings')).to.have.lengthOf(1);
    });
    it('renders a h6 with "Filtruj parkingi:"', () => {
        expect(wrapper.find('div h6').text()).to.equals("Filtruj parkingi:");
    });
    it('renders a <InputFiltersRow/>', () => {
        expect(wrapper.find(InputFiltersRow)).to.have.lengthOf(1);
    });
    it('renders a <FiltersResult/>', () => {
        expect(wrapper.find(FiltersResult)).to.have.lengthOf(1);
    });
    it('<FiltersResult/> has correct type="parkingi', () => {
        expect(wrapper.find('[type="parkingi"]')).to.have.lengthOf(1);
    });
    it('does not renders a <FiltersResult/> when minSpaces==0', () => {
        wrapper.setProps({minSpaces:0})
        expect(wrapper.find(FiltersResult)).to.have.lengthOf(0);
        wrapper.setProps({minSpaces:5})
    });
    it('<InputFiltersRow/> has correct title prop', () => {
        expect(wrapper.find('[title="Minimalna dostępna liczba miejsc"]')).to.have.lengthOf(1);
    });
});