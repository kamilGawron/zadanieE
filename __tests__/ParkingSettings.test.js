import React from 'react';
import { shallow } from 'enzyme';
import ParkingsSettings from '../components/ParkingsSettings';
import InputFiltersRow from '../components/InputFiltersRow';
import FiltersResult from '../components/FiltersResult';
import '../src/setupTest'
import renderer from 'react-test-renderer'

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
    it('matches the snapshot', () => {
        const tree=renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders a div with className="parkings', () => {
        expect(wrapper.find('div.parkings')).toHaveLength(1);
    });
    it('renders a h6 with "Filtruj parkingi:"', () => {
        expect(wrapper.find('div h6').text()).toEqual("Filtruj parkingi:");
    });
    it('renders a <InputFiltersRow/>', () => {
        expect(wrapper.find(InputFiltersRow)).toHaveLength(1);
    });
    it('renders a <FiltersResult/>', () => {
        expect(wrapper.find(FiltersResult)).toHaveLength(1);
    });
    it('<FiltersResult/> has correct type="parkingi', () => {
        expect(wrapper.find('[type="parkingi"]')).toHaveLength(1);
    });
    it('does not renders a <FiltersResult/> when minSpaces==0', () => {
        wrapper.setProps({minSpaces:0})
        expect(wrapper.find(FiltersResult)).toHaveLength(0);
        wrapper.setProps({minSpaces:5})
    });
    it('<InputFiltersRow/> has correct title prop', () => {
        expect(wrapper.find('[title="Minimalna dostępna liczba miejsc"]')).toHaveLength(1);
    });
});