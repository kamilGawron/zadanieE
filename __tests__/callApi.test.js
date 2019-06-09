import React from 'react';
import { shallow } from 'enzyme';
import {callApi,fetchCars,fetchParkings,fetchPois} from '../services/callApi';
import {carsUrl,parkingsUrl,poisUrl} from '../components/App'
import '../src/setupTest'
import { expect } from 'chai';


describe('test callApi', () => {
    it('callApi fetch an array of data', () => {
        return callApi(carsUrl).then(data=>{
            expect(Array.isArray(data)).to.equal(true);
        })
    });
   
});
describe('test fetchCars', () => {
    it('returns a cars array', () => {
        return fetchCars(carsUrl)
            .then(data=>{
            expect(Array.isArray(data.cars)).to.equal(true);
        })
    });
    it('returns carsLoaded:true', () => {
        return fetchCars(carsUrl)
            .then(data=>{
            expect(data.carsLoaded).to.equal(true);
        })
    });
    it('maxRange is greater than 0', () => {
        return fetchCars(carsUrl)
            .then(data=>{
            expect(data.maxRange).to.be.greaterThan(0);
        })
    });
});
describe('test fetchParkings', () => {
    it('returns a parkings array', () => {
        return fetchParkings(parkingsUrl)
            .then(data=>{
            expect(Array.isArray(data.parkings)).to.equal(true);
        })
    });
    it('returns parkingsLoaded:true', () => {
        return fetchParkings(parkingsUrl)
            .then(data=>{
            expect(data.parkingsLoaded).to.equal(true);
        })
    });
    it('maxSpaces is greater than 0', () => {
        return fetchParkings(parkingsUrl)
            .then(data=>{
            expect(data.maxSpaces).to.be.greaterThan(0);
        })
    });
});
describe('test fetchPois', () => {
    it('returns a pois array', () => {
        return fetchPois(poisUrl)
            .then(data=>{
            expect(Array.isArray(data.pois)).to.equal(true);
        })
    });
    it('returns poisLoaded:true', () => {
        return fetchPois(poisUrl)
            .then(data=>{
            expect(data.poisLoaded).to.equal(true);
        })
    });
});