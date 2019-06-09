import React from 'react';
import { shallow } from 'enzyme';
import ClearInput from '../components/ClearInput';
import '../src/setupTest'
import renderer from 'react-test-renderer'
const props={
    inputChange : function(){},
    name:"",
    value:0,
}
describe('test <ClearInput />', () => {
    it('matches the snapshot', () => {
        const tree=renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });
    const wrapper = shallow(<ClearInput {...props}/>);

    it('renders a span className="clear-input"', () => {
        expect(wrapper.find('span.clear-input')).toHaveLength(1)
    });
});