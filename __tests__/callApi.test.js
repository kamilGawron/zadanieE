import React from 'react';
import { shallow } from 'enzyme';
import {callApi,fetchCars,fetchParkings,fetchPois} from '../services/callApi';
import {carsUrl,parkingsUrl,poisUrl} from '../components/App'
import '../src/setupTest'


describe('test callApi', () => {
    it('callApi fetch an array of data', () => {
        return callApi(carsUrl).then(data=>{
            expect(Array.isArray(data)).toEqual(true);
        })
    });
   
});
describe('test fetchCars', () => {
    it('returns a cars array', () => {
        return fetchCars(carsUrl)
            .then(data=>{
            expect(Array.isArray(data.cars)).toEqual(true);
        })
    });
    it('returns carsLoaded:true', () => {
        return fetchCars(carsUrl)
            .then(data=>{
            expect(data.carsLoaded).toEqual(true);
        })
    });
    it('maxRange is greater than 0', () => {
        return fetchCars(carsUrl)
            .then(data=>{
            expect(data.maxRange).toBeGreaterThan(0);
        })
    });
});
describe('test fetchParkings', () => {
    it('returns a parkings array', () => {
        return fetchParkings(parkingsUrl)
            .then(data=>{
            expect(Array.isArray(data.parkings)).toEqual(true);
        })
    });
    it('returns parkingsLoaded:true', () => {
        return fetchParkings(parkingsUrl)
            .then(data=>{
            expect(data.parkingsLoaded).toEqual(true);
        })
    });
    it('maxSpaces is greater than 0', () => {
        return fetchParkings(parkingsUrl)
            .then(data=>{
            expect(data.maxSpaces).toBeGreaterThan(0);
        })
    });
});
describe('test fetchPois', () => {
    it('returns a pois array', () => {
        return fetchPois(poisUrl)
            .then(data=>{
            expect(Array.isArray(data.pois)).toEqual(true);
        })
    });
    it('returns poisLoaded:true', () => {
        return fetchPois(poisUrl)
            .then(data=>{
            expect(data.poisLoaded).toEqual(true);
        })
    });
});