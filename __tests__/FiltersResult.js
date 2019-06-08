import React from 'react';
import { shallow } from 'enzyme';
import FiltersResult from '../components/FiltersResult';
import '../src/setupTest'
import { expect } from 'chai';


describe('test <FiltersResult />', () => {

    it('if default!=change displays span with amount of find elements ', () => {
        const wrapper = shallow(
            <FiltersResult
                default="0"
                change="20"
                type="type"
            />
        );
        expect(wrapper.find('span').text()).to.equal('znaleziono: 20');
    });
    it('if default==change displays info span with correct type ', () => {
        const wrapper = shallow(
            <FiltersResult
                default="20"
                change="20"
                type="type"
            />
        );
        expect(wrapper.find('span').text()).to.equal('Wszystkie type spełniają określone kryteria');
    });
    
});