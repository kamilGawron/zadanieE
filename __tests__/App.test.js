import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import DisplaySettings from '../components/DisplaySettings';
import SampleMap from '../components/SampleMap';
import '../src/setupTest'
import { expect } from 'chai';

describe('test <App /> when load state is false', () => {
    const wrapper = shallow(<App/>);
    it('does not renders a <DisplaySettings/>', () => {
        expect(wrapper.find(DisplaySettings)).to.have.lengthOf(0);
    });
    it('does not renders a <SampleMap/>', () => {
        expect(wrapper.find(SampleMap)).to.have.lengthOf(0);
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
        expect(wrapper.find(DisplaySettings)).to.have.lengthOf(1);
    });
    it('renders a <SampleMap/>', () => {
        expect(wrapper.find(SampleMap)).to.have.lengthOf(1);
    });
});