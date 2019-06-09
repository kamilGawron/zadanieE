import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import DisplaySettings from '../components/DisplaySettings';
import SampleMap from '../components/SampleMap';
import '../src/setupTest'
import renderer from 'react-test-renderer'
describe('test <App /> when load state is false', () => {
    const wrapper = shallow(<App/>);
    it('matches the snapshot', () => {
        const tree=renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('does not renders a <DisplaySettings/>', () => {
        expect(wrapper.find(DisplaySettings)).toHaveLength(0);
    });
    it('does not renders a <SampleMap/>', () => {
        expect(wrapper.find(SampleMap)).toHaveLength(0);
    });
});
describe('test <App /> when load state is true', () => {
    const wrapper = shallow(<App/>);
    wrapper.setState({
        carsLoaded:true,
        parkingsLoaded:true,
        poisLoaded:true,
        fetchErr:false,
    })
    it('renders a <DisplaySettings/>', () => {
        expect(wrapper.find(DisplaySettings)).toHaveLength(1);
    });
    it('renders a <SampleMap/>', () => {
        expect(wrapper.find(SampleMap)).toHaveLength(1);
    });
});