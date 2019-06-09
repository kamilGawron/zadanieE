import React from 'react';
import { shallow } from 'enzyme';
import {carsFilter,parkingsFilter} from '../services/filters';
import '../src/setupTest'

describe('test carsFilter', () => {
    it('returns an array', () => {
        expect(Array.isArray(carsFilter([{}],0,0,""))).toEqual(true);
    });
    it('returns an empty array', () => {
        expect(carsFilter([{}],0,0,"incorrectCarStatus").length).toEqual(0);
    });
});
describe('test parkingsFilter', () => {
    it('returns an array', () => {
        expect(Array.isArray(parkingsFilter([{}],0))).toEqual(true);
    });
});